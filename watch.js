import chokidar from 'chokidar';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

let commitTimeout;
const DEBOUNCE_MS = 5000; // 5 שניות המתנה לפני commit

async function gitCommitAndPush() {
  try {
    console.log('🔄 עדכון שינויים ב-GitHub...');
    
    // בדיקה אם יש שינויים
    const { stdout: status } = await execAsync('git status --porcelain');
    if (!status.trim()) {
      console.log('✅ אין שינויים חדשים');
      return;
    }

    // הוספת כל הקבצים
    await execAsync('git add .');
    
    // Commit עם תאריך ושעה
    const date = new Date().toLocaleString('he-IL');
    await execAsync(`git commit -m "Auto-update: ${date}"`);
    
    // Push ל-GitHub
    await execAsync('git push origin main');
    
    console.log('✅ עודכן בהצלחה ב-GitHub!');
  } catch (error) {
    console.error('❌ שגיאה בעדכון GitHub:', error.message);
  }
}

function debounceCommit() {
  clearTimeout(commitTimeout);
  commitTimeout = setTimeout(gitCommitAndPush, DEBOUNCE_MS);
}

console.log('👀 מעקב אחר שינויים בקבצים...');
console.log('📡 כל שינוי יועלה אוטומטית ל-GitHub תוך 5 שניות');

// מעקב אחר כל הקבצים בפרויקט
const watcher = chokidar.watch('.', {
  ignored: [
    /(^|[\/\\])\../, // קבצים נסתרים
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/*.log'
  ],
  persistent: true,
  ignoreInitial: true
});

watcher
  .on('add', path => {
    console.log(`📝 קובץ נוסף: ${path}`);
    debounceCommit();
  })
  .on('change', path => {
    console.log(`📝 קובץ שונה: ${path}`);
    debounceCommit();
  })
  .on('unlink', path => {
    console.log(`📝 קובץ נמחק: ${path}`);
    debounceCommit();
  });

console.log('✅ מערכת המעקב פעילה!');


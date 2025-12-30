# הוראות פרסום - קישור חיצוני קבוע

## ✅ מה שכבר בוצע:

1. **GitHub Pages Workflow** - נוצר קובץ `.github/workflows/deploy.yml`
2. **Netlify Configuration** - נוצר קובץ `netlify.toml`
3. **כל הקבצים מסונכרנים** ב-GitHub

## 🚀 אופציה 1: GitHub Pages (מומלץ)

### שלבים להפעלה:

1. **היכנס ל-GitHub Repository:**
   - https://github.com/yanivmizrachiy/hadracha

2. **לך ל-Settings:**
   - לחץ על "Settings" בראש העמוד

3. **בחר Pages:**
   - בתפריט השמאלי, לחץ על "Pages"

4. **הגדר את המקור:**
   - **Source:** בחר "GitHub Actions"
   - שמור

5. **הקישור החיצוני שלך יהיה:**
   - **https://yanivmizrachiy.github.io/hadracha**

### הערה:
- ה-workflow כבר מוכן ויעבוד אוטומטית
- כל push ל-main יפרסם את האתר אוטומטית

## 🌐 אופציה 2: Netlify (מהיר יותר)

### שלבים:

1. **היכנס ל-Netlify:**
   - https://app.netlify.com

2. **חבר את GitHub:**
   - לחץ על "Add new site" → "Import an existing project"
   - בחר "GitHub" והרשא גישה
   - בחר את ה-repository: `yanivmizrachiy/hadracha`

3. **הגדרות Build:**
   - **Build command:** השאר ריק (אין build)
   - **Publish directory:** `.` (root)
   - לחץ "Deploy site"

4. **הקישור החיצוני שלך יהיה:**
   - `https://[random-name].netlify.app`
   - או שם מותאם אישית: `https://hadracha.netlify.app`

## 🔗 אופציה 3: Vercel

### שלבים:

1. **היכנס ל-Vercel:**
   - https://vercel.com

2. **חבר את GitHub:**
   - לחץ על "Add New Project"
   - בחר את ה-repository: `yanivmizrachiy/hadracha`

3. **הגדרות:**
   - **Framework Preset:** Other
   - **Root Directory:** `.`
   - לחץ "Deploy"

4. **הקישור החיצוני שלך יהיה:**
   - `https://hadracha.vercel.app`

## 📋 סיכום

**הקישור החיצוני הקבוע שלך יהיה:**
- **GitHub Pages:** https://yanivmizrachiy.github.io/hadracha (לאחר הפעלה)
- **Netlify:** https://[name].netlify.app (לאחר חיבור)
- **Vercel:** https://hadracha.vercel.app (לאחר חיבור)

**כל הקבצים מוכנים לפרסום!**


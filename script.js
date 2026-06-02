// 1. مصفوفة المدائح والقصائد (يمكنك زيادة عدد القصائد هنا بسهولة)
const poemsData = [
    {
        id: 1,
        title: "قمرٌ سيّدنا النّبي قمر",
        content: `قمرٌ وسيدنا النبى قمرٌ
        وجَميل وسيدنا النبى وجَميل
        
        وكفُّ المُصطفى كالوردِ نادي
        وعِطرُها يَبْقَى إذا مَسَّتْ أيادي
        وعَمَّ نَوالُها كُلَّ العِبادِ
        حبيبُ اللهِ يا خيرَ البَرايا
        
        قمرٌ وسيدنا النبى قمرٌ
        وجَميل وسيدنا النبى وجَميل`
    },
    {
        id: 2,
        title: "ولد الهدى فالكائنات ضياء",
        content: `وُلِدَ الهُدى فَالكائِناتُ ضِياءُ
        وَفَمُ الزَمانِ تَبَسُّمٌ وَثَناءُ
        
        الروحُ وَالمَلَأُ المَلائِكُ حَولَهُ
        لِلدينِ وَالدُنيا بِهِ بُشَراءُ
        
        يا خَيرَ مَن جاءَ الوُجودَ تَحِيَّةً
        مِن مُرسَلينَ لَإِن جَاؤوا بِكَ عُزَراءُ`
    },
    {
        id: 3,
        title: "برضاك يا خالقي (يا رب بالمصطفى)",
        content: `يَا رَبِّ بِالْمُصْطَفَى بَلِّغْ مَقَاصِدَنَا
        وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الْكَرَمِ
        
        هُوَ الْحَبِيبُ الَّذِي تُرْجَى شَفَاعَتُهُ
        لِكُلِّ هَوْلٍ مِنَ الْأَهْوَالِ مُقْتَحِمِ
        
        مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ
        وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ`
    }
];

// 2. عناصر الواجهة
const mainScreen = document.getElementById('main-screen');
const poemScreen = document.getElementById('poem-screen');
const poemsListContainer = document.getElementById('poems-list-container');
const poemTitle = document.getElementById('poem-title');
const poemText = document.getElementById('poem-text');
const backBtn = document.getElementById('back-btn');

// 3. توليد مصفوفة القصائد في الشاشة الرئيسية
function loadPoemsList() {
    poemsListContainer.innerHTML = ''; // تنظيف الحاوية
    
    poemsData.forEach(poem => {
        const item = document.createElement('div');
        item.classList.add('poem-item');
        item.textContent = poem.title;
        
        // عند الضغط على القصيدة
        item.addEventListener('click', () => {
            showPoem(poem);
        });
        
        poemsListContainer.appendChild(item);
    });
}

// 4. الانتقال لشاشة القصيدة كاملة
function showPoem(poem) {
    poemTitle.textContent = poem.title;
    poemText.textContent = poem.content;
    
    mainScreen.classList.add('hidden');
    poemScreen.classList.remove('hidden');
}

// 5. زر العودة للخلف
backBtn.addEventListener('click', () => {
    poemScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
});

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadPoemsList);

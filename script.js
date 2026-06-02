// قاعدة بيانات القصائد
const database = {
    'البردة': {
        title: "قصيدة البردة الشريفة",
        text: "مولاي صلِّ وسلم دائماً أبداً... على حبيبك خير الخلق كلهمُ... أمِن تذكّرِ جيرانٍ بذي سَلَمِ... مزجتَ دمعاً جَرى من مقلةٍ بدمِ"
    },
    'نهج_البردة': {
        title: "نهج البردة",
        text: "ريمٌ على القاعِ بين البانِ والعلمِ... أحلَّ سفكَ دمي في الأشهرِ الحُرُمِ... رمى القضاءُ بعيني جؤذرٍ أسداً... يا ساكنَ القاعِ أدرك ساكنَ الأجَمِ"
    },
    'يا_إمام_الرسل': {
        title: "يا إمام الرسل",
        text: "يا إمامَ الرسلِ يا سندي... أنت بعد الله معتمدي... يا غياثَ الخلقِ أجمعهم... يا ركابَ الحقِ في الأمدِ"
    },
    'قمر_سيدنا_النبي': {
        title: "قمرٌ سيدنا النبي",
        text: "قمرٌ قمرٌ قمرٌ سيدنا النبي... وجميلٌ وجميلٌ وجميلٌ سيدنا النبي... وكفُّ المصطفى كالوردِ نادى... الله الله"
    }
};

// دالة فتح القصيدة
function openPoem(id) {
    const selected = database[id];
    
    // تغيير المحتوى
    document.getElementById('display-title').innerText = selected.title;
    document.getElementById('display-content').innerText = selected.text;
    
    // التبديل بين الشاشات
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('poem-view').classList.remove('hidden');
}

// دالة العودة
function returnToMenu() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('poem-view').classList.add('hidden');
}

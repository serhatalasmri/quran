document.addEventListener('DOMContentLoaded', () => {
    const surahSelect = document.getElementById('surah-select');
    const surahTextContainer = document.getElementById('surah-text');
    const quranAudio = document.getElementById('quran-audio');

    // 1. جلب قائمة السور كلها لكي نضعها في القائمة المنسدلة
    fetch('https://api.alquran.cloud/v1/surah')
        .then(response => response.json())
        .then(data => {
            const surahs = data.data;
            surahSelect.innerHTML = '<option value="">-- اختر سورة --</option>';
            surahs.forEach(surah => {
                const option = document.createElement('option');
                option.value = surah.number;
                option.textContent = `${surah.number}. ${surah.name} (${surah.englishName})`;
                surahSelect.appendChild(option);
            });
        })
        .catch(err => {
            surahSelect.innerHTML = '<option>خطأ في تحميل السور</option>';
            console.error(err);
        });

    // 2. عند تغيير السورة، قم بجلب الآيات والصوت
    surahSelect.addEventListener('change', (e) => {
        const surahNumber = e.target.value;
        if (!surahNumber) return;

        surahTextContainer.innerHTML = '<p class="placeholder-text">جاري تحميل الآيات...</p>';

        // جلب النص (المصحف المكتوب)
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
            .then(response => response.json())
            .then(data => {
                const verses = data.data.ayahs;
                let surahHTML = '';
                
                // إضافة البسملة في البداية إذا لم تكن سورة التوبة، ولتجنب تكرارها في الفاتحة
                if (surahNumber != 1 && surahNumber != 9) {
                    surahHTML += `<div style="text-align:center; font-weight:bold; margin-bottom:15px; color:#1e3c72;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>`;
                }

                verses.forEach(verse => {
                    // تنظيف النص من البسملة في بداية السور لأننا أضفناها بالأعلى
                    let text = verse.text;
                    if (surahNumber != 1 && verse.numberInSurah === 1) {
                        text = text.replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", "");
                    }
                    
                    surahHTML += `<span class="ayah">${text} <span class="ayah-num">${verse.numberInSurah}</span></span> `;
                });

                surahTextContainer.innerHTML = surahHTML;
            });

        // جلب الصوت (بصوت الشيخ مشاري العفاسي كمثال)
        // ar.alafasy هو المعرف الخاص بالشيخ
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`)
            .then(response => response.json())
            .then(data => {
                // سنقوم بتشغيل السورة كاملة كملف صوتي واحد إذا توفر، أو الصوت المجمع
                // للسهولة، سنربطه برابط صوتي مباشر للسورة من الخادم
                const formattedNumber = String(surahNumber).padStart(3, '0');
                quranAudio.src = `https://server8.mp3quran.net/afs/${formattedNumber}.mp3`;
                quranAudio.play();
            })
            .catch(err => console.error('خطأ في جلب الملف الصوتي:', err));
    });
});
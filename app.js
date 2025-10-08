// يحول اسم الفصل إلى معرف صالح لمجلدات Firestore
function sanitizeClassName(name) {
  return name.trim().replace(/\s+/g, '_').replace(/[^\w\-]/g, '').toLowerCase();
}

// 🔹 مصفوفة الأسئلة وصورها وقيمها (مع أول سؤالين نصيين)
const questions = [
    {
        question: "السؤال الاول كيف تحب أن تتعلم شيئًا جديدًا؟",
        images: [
            { src: "asses/quistionnaire/q1/a2/صورة2.jpg", title:"اشاهد لوحة مليئة بالالرسومات", value: "imagev1" },
            { src: "asses/quistionnaire/q1/a1/صورة1.jpg", title:"اجلس واستمع الى المعلمة", value: "imagea1" },
            { src: "asses/quistionnaire/q1/a3/صورة4.jpg", title:"العب بالمكعبات والأدوات التعليمية", value: "imagek1" },
            { src: "asses/quistionnaire/q1/a4/صورة5.jpg", title:"امسك كتاب واشير للكلمات", value: "imagel1" }
        ]
    },
    {
        question: "السؤال الثاني كيف تحب أن تتعلم عن الحيوانات؟",
        images: [
            { src: "asses/quistionnaire/q2/a1/صورة6.jpg", title:"أشاهد صور الحيوانات", value: "imagev3" },
            { src: "asses/quistionnaire/q2/a2/صورة7.jpg", title:"استمع إلي اصوات الحيوانات", value: "imagea3" },
            { src: "asses/quistionnaire/q2/a3/صورة8.jpg", title:"اقلد حركات الحيوانات", value: "imagel3" },
            { src: "asses/quistionnaire/q2/a4/صورة9.jpg", title:"أقرأ اسماء الحيوانات", value: "imagel2" }
        ]
    },
    {
        question: "السؤال الثالث كيف تحب أن تتعلم الأرقام ؟",
        images: [
            { src: "asses/quistionnaire/q3/a1/صورة12.jpg", title:"أشاهد بطاقات الأرقام", value: "imagev2" },
            { src: "asses/quistionnaire/q3/a2/صورة10.jpg", title:"أستمع الى نشيد الأرقام", value: "imagea2" },
            { src: "asses/quistionnaire/q3/a3/صورة.jpeg", title:" أقرا الارقام ", value: "imagek2" },
            { src: "asses/quistionnaire/q3/a4/صورة13.jpg", title:"أعد المكعبات", value: "imagek3" }
        ]
    },
    {
        question: "السؤال الرابع كيف تحب ان تحفظ الأناشيد ؟",
        images: [
            { src: "asses/quistionnaire/q4/a1/صورة1.jpg", title:"أشاهد صور معبرة عن كلمات النشيد", value: "imagev4" },
            { src: "asses/quistionnaire/q4/a2/صورة2.jpg", title:"أستمع للمعلمة وهي تغني", value: "imagea4" },
            { src: "asses/quistionnaire/q4/a3/صورة3.jpg", title:"أتحرك مع النشيد", value: "imagek4" },
            { src: "asses/quistionnaire/q4/a4/صورة4.jpg", title:"أقرأ كلمات النشيد", value: "imagel4" }
        ]
        
    },
    {
        question: "السؤال الخامس ماذا تفعل عندما تريد معرفة طريق البيت ؟",
        images: [
            { src: "asses/quistionnaire/q5/a1/صورة1.jpg", title:"أشاهد خريطة او رسمة للحي", value: "imagev5" },
            { src: "asses/quistionnaire/q5/a2/صورة2.jpg", title:"استمع لشخص يشرح الاتجاهات", value: "imagea5" },
            { src: "asses/quistionnaire/q5/a3/صورة3.jpg", title:"اتبع اشارات الطريق بنفسي", value: "imagek5" },
            { src: "asses/quistionnaire/q5/a4/صورة4.jpg", title:"أقرأ اللوحات الإرشادية", value: "imagel5" }
        ]
    },
    {
        question: "السؤال السادس ماذا تفعل عندما تلعب لعبة تركيب (Puzzle)",
        images: [
            { src: "asses/quistionnaire/q6/a1/صورة5.jpg", title:"اشاهد الصورة كاملة قبل البدأ", value: "imagev6" },
            { src: "asses/quistionnaire/q6/a2/صورة6.jpg", title:"استمع لشرح صديقي كيف يركبها", value: "imagea6" },
            { src: "asses/quistionnaire/q6/a3/صورة7.png", title:"ابدأ بتركيب القطع مباشرة", value: "imagek6" },
            { src: "asses/quistionnaire/q6/a4/صورة1.jpg", title:"أقرأ التعليمات", value: "imagel6" }
        ]
    },
    {
        question: "السؤال السابع ماذا تفعل اذا اردت تعلم لعبة رياضية ؟",
        images: [
            { src: "asses/quistionnaire/q7/a1/صورة8.jpg", title:"اشاهد صور او فيديو للعبة", value: "imagev7" },
            { src: "asses/quistionnaire/q7/a2/صورة9.jpg", title:"استمع لشرح القوانين من المدرب", value: "imagea7" },
            { src: "asses/quistionnaire/q7/a3/صورة10.jpg", title:"اجرب تنفيذ الحركات بنفسي", value: "imagek7" },
            { src: "asses/quistionnaire/q7/a4/صورة11.jpg", title:"اقرأ قوانين اللعبة", value: "imagel7" }
        ]
    },
    {
        question: "السؤال الثامن كيف تحب ان تتعلم عن الفواكة ؟ ",
        images: [
            { src: "asses/quistionnaire/q8/a1/صورة12.jpg", title:"اشاهد صور الفواكة الملونة", value: "imagev8" },
            { src: "asses/quistionnaire/q8/a2/صورة13.jpg", title:"استمع للمعلمة وهي تتحدث عن الفواكة", value: "imagea8" },
            { src: "asses/quistionnaire/q8/a3/صورة14.jpg", title:"المس الفواكة واتذوقها واشم رائحتها", value: "imagek8" },
            { src: "asses/quistionnaire/q8/a4/صورة.jpg", title:"اقرأ اسماء الفواكة المكتوبة", value: "imagel8" }
        ]
    },
];

let currentQuestionIndex = 0;
let selectedValues = [];
let selectedImageValue = null; // لتخزين الصورة المختارة للسؤال الحالي

document.getElementById("startBtn").addEventListener("click", () => {
    const childName = document.getElementById("childName").value.trim();
    const childDesc = document.getElementById("childDesc").value; // الآن select

    if (!childName || !childDesc) {
        alert("الرجاء إدخال اسم الطفل واختيار الفصل أولاً");
        return;
    }
    selectedValues.push({ key: "childName", value: childName });
    selectedValues.push({ key: "childDesc", value: childDesc });

    // إخفاء القسم الأول وإظهار الأسئلة
    document.getElementById("startSection").style.display = "none";
    document.querySelector(".quistioncontainer").style.display = "block";

    // تحميل السؤال الأول
    loadQuestion();
});

// 🔹 تحميل السؤال (نسخة محدثة مع أزرار النطق)
// 🔹 تحميل السؤال (نسخة محدثة مع أزرار النطق + إخفاء زر التالي على آخر سؤال)
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.querySelector(".img-container");
    const qTextEl = document.getElementById("questionText");

    // عرض السؤال ونضيف زر الاستماع بجانبه
    qTextEl.innerText = question.question;
    // إن كان زر الاستماع موجود من قبل نحدّثه، وإلا ننشئه
    let qSpeakBtn = document.getElementById("speakQuestionBtn");
    if (!qSpeakBtn) {
        qSpeakBtn = document.createElement("button");
        qSpeakBtn.id = "speakQuestionBtn";
        qSpeakBtn.type = "button";
        qSpeakBtn.className = "speak-btn small";
        qSpeakBtn.title = "استمع للسؤال";
        qSpeakBtn.innerText = "🔊";
        qTextEl.parentNode.insertBefore(qSpeakBtn, qTextEl.nextSibling);
    }
    // عند الضغط يقرأ نص السؤال
    qSpeakBtn.onclick = () => speakText(question.question);

    // إعادة تعيين الاختيار الحالي
    selectedImageValue = null;

    // إن كان السؤال نصي
    if (question.isText) {
        container.innerHTML = `<input type="text" id="textAnswer" placeholder="أدخل إجابتك هنا">`;
    } else {
        // نبني الـ cards ديناميكياً حتى نضيف أزرار الاستماع لكل جواب
        container.innerHTML = "";
        question.images.forEach((imgObj, index) => {
            const card = document.createElement("div");
            card.className = "answercard";

            const img = document.createElement("img");
            img.className = "answer-image";
            img.src = imgObj.src;
            img.alt = imgObj.title;
            img.style.cursor = "pointer";

            const title = document.createElement("h3");
            title.className = "image-title";
            title.innerText = imgObj.title;

            // زر الاستماع بجانب العنوان
            const speakBtn = document.createElement("button");
            speakBtn.type = "button";
            speakBtn.className = "speak-btn small-inline";
            speakBtn.title = "استمع للنص";
            speakBtn.innerText = "🔊";
            speakBtn.onclick = (e) => {
                e.stopPropagation();
                speakText(imgObj.title);
            };

            // تفاعل النقر على الصورة لاختيارها
            img.addEventListener("click", () => {
                selectedImageValue = imgObj.value;
                // تأثير بصري للاختيار
                const allImgs = container.querySelectorAll(".answer-image");
                allImgs.forEach(i => i.style.border = "none");
                img.style.border = "3px solid green";
            });

            // ترتيب داخل الكارد
            title.appendChild(speakBtn);
            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card);
        });
    }

    // ======= تحكّم بأزرار التالي/التسليم: نخفي زر 'التالي' لو هذا آخر سؤال =======
    const yesBtn = document.getElementById('yesBtn');
    const noBtn  = document.getElementById('noBtn');
    if (currentQuestionIndex === questions.length - 1) {
      if (yesBtn) yesBtn.style.display = 'none';
      if (noBtn)  { noBtn.style.display = 'inline-block'; noBtn.disabled = false; }
    } else {
      if (yesBtn) yesBtn.style.display = 'inline-block';
      if (noBtn)  { noBtn.style.display = 'inline-block'; noBtn.disabled = true; }
    }
}


// 🔹 حفظ الإجابة عند الضغط على زر التالي أو إرسال
function handleAnswer() {
    const question = questions[currentQuestionIndex];

    if (question.isText) {
        const text = document.getElementById("textAnswer").value.trim();
        if (!text) { alert("الرجاء إدخال الإجابة"); return false; }
        selectedValues.push({ key: question.valueKey, value: text });
    } else {
        if (!selectedImageValue) { alert("الرجاء اختيار صورة"); return false; }
        selectedValues.push(selectedImageValue);
    }

    console.log("القيم المختارة:", selectedValues);
    return true;
}

// 🔹 زر (التالي)
document.getElementById("yesBtn").addEventListener("click", () => {
   if (!handleAnswer()) return;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // تم الوصول إلى آخر سؤال
        document.getElementById("noBtn").disabled = false; // تفعيل زر التسليم
    }
});

// 🔹 زر (إرسال)


// إغلاق النافذة المنبثقة
document.getElementById("closeModalBtn").addEventListener("click", () => {
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "finalLandPage.html"; // ضع هنا رابط الصفحة الأساسية
});



document.getElementById("storeda").addEventListener("click", () => {
    // توجيه المستخدم إلى صفحة "results.html" (يمكنك تعديل الرابط حسب حاجتك)
    window.location.href = "storedAnswers.html";
});

// 🔹 الفنكشن لحساب النمط
function detectThinkingStyle(answers) {
    let visual = 0, auditory = 0, kinesthetic = 0, linguistic = 0;

    answers.forEach(answer => {
        if (typeof answer === "string") {
            if (["imagev1","imagev2","imagev3","imagev4","imagev5","imagev6","imagev7","imagev8"].includes(answer)) visual++;
            if (["imagea1","imagea2","imagea3","imagea4","imagea5","imagea6","imagea7","imagea8"].includes(answer)) auditory++;
            if (["imagek1","imagek2","imagek3","imagek4","imagek5","imagek6","imagek7","imagek8"].includes(answer)) kinesthetic++;
            if (["imagel1","imagel2","imagel3","imagel4","imagel5","imagel6","imagel7","imagel8"].includes(answer)) linguistic++;
        }
    });

    const maxScore = Math.max(visual, auditory, kinesthetic, linguistic);
    const result = [];
    if (visual === maxScore) result.push("بصري");
    if (auditory === maxScore) result.push("سمعي");
    if (kinesthetic === maxScore) result.push("حسي حركي");
    if (linguistic === maxScore) result.push("لغوي");
    
    window.currentThinkingStyle = result.join(" & ");

    return window.currentThinkingStyle;
}


(function() {
  // الحاويات التي قد تحتوي الصور الجانبية
  const sideContainers = document.querySelectorAll('.with-sides, .table-with-sides');

  // أزرار وع عناصر التحكم
  const startBtn = document.getElementById('startBtn');          // زر ابدأ
  const closeModalBtn = document.getElementById('closeModalBtn'); // زر إغلاق المودال (إن وُجد)
  const Homebtn = document.getElementById('Homebtn');            // زر العودة (إن وُجد)
  const qContainer = document.querySelector('.quistioncontainer'); // صندوق الأسئلة

  // دوال المساعدة
  function hideSidePhotos() {
    sideContainers.forEach(c => c.classList.add('hide-sides'));
  }
  function showSidePhotos() {
    sideContainers.forEach(c => c.classList.remove('hide-sides'));
  }

  // 1) عند الضغط على زر "ابدأ" نخفي الصور (هذا يغطي أكثر الحالات)
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      hideSidePhotos();
      // لو عندك كود آخر يظهر الأسئلة هنا، هذا يكفي لإخفاء الصور
    });
  }

  // 2) مراقب للتغيّر في حالة صندوق الأسئلة (لو يتم إظهاره بطرق أخرى)
  if (qContainer) {
    const observer = new MutationObserver(() => {
      const isVisible = (qContainer.offsetParent !== null) || (qContainer.style.display && qContainer.style.display !== 'none');
      if (isVisible) hideSidePhotos();
    });
    observer.observe(qContainer, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  // 3) عند إغلاق المودال أو الضغط على زر العودة، نعيد الصور (اختياري)
  if (closeModalBtn) closeModalBtn.addEventListener('click', showSidePhotos);
  if (Homebtn) Homebtn.addEventListener('click', showSidePhotos);

  // ملاحظة: إذا تريدين أن الصور تُخفي أيضاً أثناء التصدير، أضيفي hideSidePhotos() داخل دالة التصدير بعد حفظ الملف.
})();

// 🔊 دالة لقراءة نص عربي باستخدام Web Speech API
function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("جهازك لا يدعم ميزة القراءة الصوتية.");
        return;
    }
    // أوقف أي كلام جاري
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";         // تعيين اللغة للعربية السعودية (أقرب دعم للعربية)
    utter.rate = 0.95;            // سرعة مقروءة معقولة
    utter.pitch = 1;

    // اختيار صوت عربي إن وُجد (تحسين جودة النطق)
    const voices = window.speechSynthesis.getVoices();
    const arVoice = voices.find(v => v.lang && v.lang.startsWith("ar"));
    if (arVoice) utter.voice = arVoice;

    window.speechSynthesis.speak(utter);
}
// ===== دالة الاحتفال: كونفيتي + نجوم + صوت =====
function showCelebration(options = {}) {
  const confettiDuration = options.duration || 2200;
  const overlay = document.getElementById('celebrationOverlay');
  const audio = document.getElementById('applauseAudio');

  // تشغيل الصوت (إذا سمح المتصفح)
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 0.85;
    audio.play().catch(e => {
      // قد يمنع المتصفح التشغيل التلقائي - هذا طبيعي
      console.warn('Autoplay prevented or audio play failed:', e);
    });
  }

  // تشغيل الكونفيتي باستمرار لمدّة محددة
  if (typeof confetti === 'function') {
    const end = Date.now() + confettiDuration;
    (function frame() {
      confetti({
        particleCount: 10,
        spread: 60,
        startVelocity: 45,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() * 0.4 }
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

const classOptions = [
  "1-2", "2-2",
  "3-2", "4-2", "5-2", "تمهيدي 1", "تمهيدي 2", "تمهيدي 3", "تمهيدي 4",
  "تمهيدي 5", "تمهيدي 6"
];

// دالة لتحويل اسم الفصل لمعرف صالح لمستند Firestore
function sanitizeClassName(name) {
  return name.trim().replace(/\s+/g, '_').replace(/[^\w\-]/g, '').toLowerCase();
}

// تعبئة الـ select في الصفحة
function populateClassSelect() {
  const sel = document.getElementById('childDesc');
  if (!sel) {
    // إذا العنصر غير موجود الآن، جرّب تنفيذ الدالة بعد تحميل DOM
    document.addEventListener('DOMContentLoaded', populateClassSelect);
    return;
  }

  // إزالة أي خيارات مولّدة سابقًا لتفادي التكرار
  sel.querySelectorAll('option[data-generated="1"]').forEach(o => o.remove());

  // أضف خيار placeholder إذا لم يكن موجودًا
  if (!sel.querySelector('option[disabled]')) {
    const placeholder = document.createElement('option');
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.innerText = "اختر الفصل";
    sel.insertBefore(placeholder, sel.firstChild);
  }

  // أضف الخيارات من مصفوفة classOptions
  classOptions.forEach(opt => {
    if (![...sel.options].some(o => o.value === opt)) {
      const el = document.createElement('option');
      el.value = opt;
      el.innerText = opt;
      el.setAttribute('data-generated', '1');
      sel.appendChild(el);
    }
  });
}
populateClassSelect();

  // نجوم متحركة
  if (overlay) {
    overlay.innerHTML = '';
    const emojis = ['✨','🌟','🎉','⭐','💫'];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span');
      span.className = 'celebration-star';
      span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 80 + 10;
      span.style.left = left + '%';
      span.style.fontSize = (14 + Math.random() * 28) + 'px';
      span.style.animationDelay = (Math.random() * 400) + 'ms';
      overlay.appendChild(span);
    }
    setTimeout(() => { overlay.innerHTML = ''; }, confettiDuration + 600);
  }
}
// robust call — ضع هذا في نهاية app.js بعد تعريف populateClassSelect
(function ensurePopulate() {
  function tryPopulate() {
    try {
      if (typeof populateClassSelect === 'function') {
        populateClassSelect();
        console.log('populateClassSelect called ✅');
        return true;
      } else {
        console.warn('populateClassSelect غير معرفة بعد.');
        return false;
      }
    } catch (e) {
      console.error('خطأ أثناء استدعاء populateClassSelect:', e);
      return false;
    }
  }

  // 1) إذا DOM جاهز الآن فحاول مباشرة
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (tryPopulate()) return;
  }

  // 2) استمع DOMContentLoaded كحل آمن
  document.addEventListener('DOMContentLoaded', function onLoad() {
    document.removeEventListener('DOMContentLoaded', onLoad);
    tryPopulate();
  });

  // 3) كاحتياط أخير (بعد 700ms) جرّب مرة ثانية — مفيد لو السكربت كموديول تأخر
  setTimeout(() => {
    tryPopulate();
  }, 700);
})();
/* === Fallback: ضمان ملأ قائمة الفصول لو populateClassSelect غير معرفة ===
   ألصق هذا السطر في نهاية app.js (آخر الملف). */
(function(){
  try {
    // لو الدالة معرفة بالفعل — استدعيها مباشرة
    if (typeof populateClassSelect === 'function') {
      try {
        populateClassSelect();
        console.log('populateClassSelect: executed (existing function).');
        return;
      } catch (e) {
        console.warn('populateClassSelect موجودة لكن استدعاؤها فشل:', e);
        // نستمر لعمل الفالباك
      }
    }

    // ---------- فالباك: نملأ select#childDesc بمصفوفة classOptions ثابتة ----------
    const classOptionsFallback = [
      "1-2","2-2","3-2","4-2","5-2",
      "تمهيدي 1","تمهيدي 2","تمهيدي 3","تمهيدي 4","تمهيدي 5","تمهيدي 6"
    ];

    function fillSelectFallback() {
      const sel = document.getElementById('childDesc');
      if (!sel) {
        console.warn('fillSelectFallback: العنصر #childDesc غير موجود الآن.');
        return false;
      }

      // إزالة خيارات مولّدة سابقًا
      sel.querySelectorAll('option[data-generated="1"]').forEach(o => o.remove());

      // اضف placeholder إن لم يكن موجود
      if (!sel.querySelector('option[disabled]')) {
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.innerText = "اختر الفصل";
        sel.insertBefore(placeholder, sel.firstChild);
      }

      // أضف الخيارات من المصفوفة
      classOptionsFallback.forEach(opt => {
        if (![...sel.options].some(o => o.value === opt)) {
          const el = document.createElement('option');
          el.value = opt;
          el.innerText = opt;
          el.setAttribute('data-generated', '1');
          sel.appendChild(el);
        }
      });

      console.log('fillSelectFallback: تم ملء القائمة بنجاح.');
      return true;
    }

    // حاول التنفيذ الآن أو عند جاهزية DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fillSelectFallback);
    } else {
      fillSelectFallback();
    }

    // كذلك نعلن عن الفالباك كدالة عامة لكي تتمكن من استدعائها لاحقًا
    window.populateClassSelect = fillSelectFallback;
    console.log('Fallback populateClassSelect attached to window.');
  } catch (err) {
    console.error('Fallback error:', err);
  }
})();




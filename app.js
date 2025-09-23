// 🔹 مصفوفة الأسئلة وصورها وقيمها (مع أول سؤالين نصيين)
const questions = [
    { question: "اسم الطفل:", isText: true, valueKey: "childName" },
    { question: "الفصل:", isText: true, valueKey: "childDesc" },
    {
        question: "السؤال الاول كيف تحب أن تتعلم شيئًا جديدًا؟",
        images: [
            { src: "./asses/quistionnaire/q1/a1/صورة1.jpg", title:"طفل يشاهد لوحة مليئة بالرسومات", value: "imagev1" },
            { src: "./asses/quistionnaire/q1/a2/صورة2.jpg", title:"طفل يجلس ويسيتمع الى المعلمة", value: "imagea1" },
            { src: "./asses/quistionnaire/q1/a3/صورة4.jpg", title:"طفل يلعب بالمكعبات والأدوات التعليمية", value: "imagek1" },
            { src: "./asses/quistionnaire/q1/a4/صورة5.jpg", title:"طفل يمسك كتاب ويشير للكلمات", value: "imagel1" }
        ]
    },
    {
        question: "السؤال الثاني كيف تحب أن تتعلم عن الحيوانات؟",
        images: [
            { src: "./asses/quistionnaire/q2/a1/صورة6.jpg", title:"أشاهد صور الحيوانات", value: "imagev3" },
            { src: "./asses/quistionnaire/q2/a2/صورة7.jpg", title:"استمع إلي اصوات الحيوانات", value: "imagea3" },
            { src: "./asses/quistionnaire/q2/a3/صورة8.jpg", title:"اقلد حركات الحيوانات", value: "imagel3" },
            { src: "./asses/quistionnaire/q2/a4/صورة9.jpg", title:"أقرأ اسماء الحيوانات", value: "imagel2" }
        ]
    },
    {
        question: "السؤال الثالث كيف تحب أن تتعلم الأرقام ؟",
        images: [
            { src: "./asses/quistionnaire/q3/a1/صورة12.jpg", title:"أشاهد بطاقات الأرقام", value: "imagev2" },
            { src: "./asses/quistionnaire/q3/a2/صورة10.jpg", title:"أستمع الى نشيد الأرقام", value: "imagea2" },
            { src: "./asses/quistionnaire/q3/a3/", title:" أقرا الارقام ", value: "imagek2" },
            { src: "./asses/quistionnaire/q3/a4/صورة13.jpg", title:"أعد المكعبات", value: "imagek3" }
        ]
    },
    {
        question: "السؤال الرابع كيف تحب ان تحفظ الأناشيد ؟",
        images: [
            { src: "./asses/quistionnaire/q4/a1/صورة1.jpg", title:"أشاهد صور معبرة عن كلمات النشيد", value: "imagev4" },
            { src: "./asses/quistionnaire/q4/a2/صورة2.jpg", title:"أستمع للمعلمة وهي تغني", value: "imagea4" },
            { src: "./asses/quistionnaire/q4/a3/صورة3.jpg", title:"أتحرك مع النشيد", value: "imagek4" },
            { src: "./asses/quistionnaire/q4/a4/صورة4.jpg", title:"أقرأ كلمات النشيد", value: "imagel4" }
        ]
    }
];

let currentQuestionIndex = 0;
let selectedValues = [];
let selectedImageValue = null; // لتخزين الصورة المختارة للسؤال الحالي

// 🔹 تحميل السؤال
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.querySelector(".img-container");
    document.getElementById("questionText").innerText = question.question;

    selectedImageValue = null; // إعادة تعيين كل مرة للسؤال الجديد

    if (question.isText) {
        container.innerHTML = `<input type="text" id="textAnswer" placeholder="أدخل إجابتك هنا">`;
    } else {
        container.innerHTML = `
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
            <div class="answercard"><img src="" class="answer-image"><h3 class="image-title"></h3></div>
        `;
        const titleElements = document.querySelectorAll(".image-title");
        const imgElements = document.querySelectorAll(".answer-image");

        imgElements.forEach((img, index) => {
            img.src = question.images[index].src;
            titleElements[index].innerText = question.images[index].title;
            img.onclick = () => {
                selectedImageValue = question.images[index].value;
                // لتوضيح الاختيار بصرياً
                imgElements.forEach(i => i.style.border = "none");
                img.style.border = "3px solid green";
            };
        });
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
        const style = detectThinkingStyle(selectedValues);
        window.currentThinkingStyle = style;
        alert("لقد انتهيت من الأسئلة\nنمط التفكير: " + style);
    }
});

// 🔹 زر (إرسال)
document.getElementById("noBtn").addEventListener("click", () => {
    if (!handleAnswer()) return;

    const style = detectThinkingStyle(selectedValues);
    window.currentThinkingStyle = style;
    alert("تم إرسال الإجابات\nنمط التفكير: " + style);
});

// 🔹 الفنكشن لحساب النمط
function detectThinkingStyle(answers) {
    let visual = 0, auditory = 0, kinesthetic = 0, linguistic = 0;

    answers.forEach(answer => {
        if (typeof answer === "string") {
            if (["imagev1","imagev2","imagev3","imagev4"].includes(answer)) visual++;
            if (["imagea1","imagea2","imagea3","imagea4"].includes(answer)) auditory++;
            if (["imagek1","imagek2","imagek3","imagek4"].includes(answer)) kinesthetic++;
            if (["imagel1","imagel2","imagel3","imagel4"].includes(answer)) linguistic++;
        }
    });

    const maxScore = Math.max(visual, auditory, kinesthetic, linguistic);
    const result = [];
    if (visual === maxScore) result.push("بصري");
    if (auditory === maxScore) result.push("سمعي");
    if (kinesthetic === maxScore) result.push("حسي حركي");
    if (linguistic === maxScore) result.push("لغوي");

    return result.join(" & ");
}

// 🔹 تحميل أول سؤال عند فتح الصفحة
loadQuestion();

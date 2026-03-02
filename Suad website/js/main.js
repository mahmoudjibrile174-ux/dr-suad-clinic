const form = document.getElementById("consultForm");
const webhookURL =
  "https://script.google.com/macros/s/AKfycbzQ1wsDFPo7FRfenIEtus5Dbv5Q64YFEAa523me6FlbTiB2Zwew-AQSPwXQ3whp8yp_/exec";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    age: form.age.value,
    gender: form.gender.value,
    problem: form.problem.value,
    email: form.email.value,
  };

  try {
    const res = await fetch(webhookURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log(result); // هذا لعرض النتيجة في Console

    if (result.result === "success") {
      alert("تم الإرسال بنجاح 🌸");
      form.reset();
    } else {
      alert("خطأ: " + result.message);
    }
  } catch (err) {
    console.error(err);
    alert("خطأ في الاتصال بالجدول، تحقق من الرابط أو الإعدادات");
  }
});

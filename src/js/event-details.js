const submitBtn = document.querySelector(".submit-btn");
const otpForm = document.querySelector("#otp-form");
const mainForm = document.querySelector("#main-form");
// otpForm.style.outline = "1px solid red"

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // toggle otp form and hide main form
    mainForm.className = "d-none";
    otpForm.className = "d-block";
})
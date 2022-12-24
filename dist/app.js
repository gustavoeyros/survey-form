"use strict";
const rootRoute = "/pages";
const firstPage = "/" || "/index.html";
const secondPage = `${rootRoute}/second-page.html`;
const thirdPage = `${rootRoute}/third-page.html`;
const fourthPage = `${rootRoute}/fourth-page.html`;
const fifthPage = `${rootRoute}/fifth-page.html`;
const sixthPage = `${rootRoute}/sixth-page.html`;
function pageNavigate(url) {
    window.location.href = `${rootRoute}${url}.html`;
}
if (window.location.pathname === firstPage) {
    const letsGoButton = document.getElementById("letsgo-button");
    letsGoButton.addEventListener("click", () => {
        pageNavigate("/second-page");
    });
}
if (window.location.pathname === secondPage) {
    const fillFormButton = document.getElementById("fill-form-btn");
    fillFormButton.addEventListener("click", () => {
        pageNavigate("/third-page");
    });
}
if (window.location.pathname === thirdPage) {
    const thirdSkipButton = document.getElementById("third-skip-btn");
    thirdSkipButton.addEventListener("click", () => {
        pageNavigate("/fourth-page");
    });
    let nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", () => {
        pageNavigate("/fourth-page");
    });
    const radiosButtons = document.querySelectorAll("input[name='options-form']");
    const x = radiosButtons.forEach((input) => {
        input.addEventListener("click", () => {
            if (input) {
                nextButton.disabled = false;
            }
        });
    });
}
if (window.location.pathname === fourthPage) {
    const fourthSkipButton = document.getElementById("fourth-skip-btn");
    fourthSkipButton.addEventListener("click", () => {
        pageNavigate("/fifth-page");
    });
}
if (window.location.pathname === fifthPage) {
    const fifthSkipButton = document.getElementById("fifth-skip-btn");
    fifthSkipButton.addEventListener("click", () => {
        pageNavigate("/sixth-page");
    });
    let nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", () => {
        pageNavigate("/sixth-page");
    });
    let textAtArea = document.getElementById("textarea-fifth");
    let result = document.getElementById("result");
    let limitText = 130;
    result.textContent = 0 + "/" + limitText;
    textAtArea.addEventListener("input", () => {
        let txtLength = textAtArea.value.length;
        result.textContent = txtLength + "/" + 130;
        if (txtLength >= 120) {
            result.style.color = "red";
        }
        else {
            result.style.color = "rgba(0, 0, 0, 0.35)";
        }
        if (txtLength > 0) {
            nextButton.disabled = false;
        }
        else if (txtLength === 0) {
            nextButton.disabled = true;
        }
    });
}
//# sourceMappingURL=app.js.map
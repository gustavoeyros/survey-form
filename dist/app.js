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
}
//# sourceMappingURL=app.js.map
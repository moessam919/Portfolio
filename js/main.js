"use strict";

// light and dark theme

const $themeBtn = document.querySelector("[data-theme-btn]");

const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

console.log(isDark);

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
    $HTML.dataset.theme =
        sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);

// tab fun

const $tabBtn = document.querySelectorAll("[data-tab-btn]");

let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

let [lastActivetabBtn] = $tabBtn;

$tabBtn.forEach((i) => {
    i.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActivetabBtn.classList.remove("active");
        const $tabContent = document.querySelector(
            `[data-tab-content="${i.dataset.tabBtn}"]`
        );
        $tabContent.classList.add("active");
        this.classList.add("active");
        lastActiveTab = $tabContent;
        lastActivetabBtn = this;
    });
});

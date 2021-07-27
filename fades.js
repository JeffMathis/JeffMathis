const hirebtn = document.querySelector(".floatingHire");
const hiresection = document.querySelector(".upworkWrapper");
const sectionFade = document.querySelectorAll(".sectionFade");
const sectionObserved = document.querySelectorAll(".sectionObserved");

const options = {
    threshold: 0.40
};

const sectionoptions = {
    threshold: .40
};

const hirebtnobserver = new IntersectionObserver(function(entries, hirebtnobserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            hirebtn.classList.remove("disapear");
        } else {
            hirebtn.classList.add("disapear")
        }
    });
}, options);

const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("fadeout");
        } else {
            entry.target.classList.remove("fadeout");
            entry.target.classList.add("fadein");
        }
    });
}, sectionoptions);

hirebtnobserver.observe(hiresection);
sectionFade.forEach(sectionFade => {
    sectionObserver.observe(sectionFade);
});
const hirebtn = document.querySelector(".floatingHire");
const hiresection = document.querySelector(".upworkWrapper");
const sectionFade = document.querySelectorAll(".sectionFade");
const sectionObserved = document.querySelectorAll(".sectionObserved");
const sectionFadeRight = document.querySelectorAll(".sectionFadeRight")

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
            sectionObserver.unobserve(entry.target);
        }
    });
}, sectionoptions);

const sectionObserver2 = new IntersectionObserver(function (entries, sectionObserver2) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("fadeoutright");
        } else {
            entry.target.classList.remove("fadeoutright");
            entry.target.classList.add("fadeinright");
            sectionObserver2.unobserve(entry.target);
        }
    });
}, sectionoptions);


hirebtnobserver.observe(hiresection);

sectionFade.forEach(sectionFade => {
    sectionObserver.observe(sectionFade);
});

sectionFadeRight.forEach(sectionFadeRight => {
    sectionObserver2.observe(sectionFadeRight);
});
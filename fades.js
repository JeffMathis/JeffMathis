const hirebtn = document.querySelector(".floatingHire");
const hiresection = document.querySelector(".upworkWrapper")

const options = {
    threshold: 0.40
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            hirebtn.classList.remove("disapear");
            console.log();
        } else {
            hirebtn.classList.add("disapear")
            console.log();
        }
    });
}, options);

observer.observe(hiresection);
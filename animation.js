const cartesVideos = document.querySelectorAll(".video-projet");

const observerVideos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.2
});

cartesVideos.forEach((carte) => {
    observerVideos.observe(carte);
});
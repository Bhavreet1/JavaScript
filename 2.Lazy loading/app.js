const imgs = document.querySelectorAll("img");

// Intersection Observer API
// Use an options object (root, rootMargin, threshold)
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;

            // Only set src if data-src exists
            const dataSrc = img.dataset && img.dataset.src;
            if (dataSrc) {
                img.src = dataSrc;
                img.classList.add("loaded");
            }

            // Stop observing once handled
            observer.unobserve(img);
        }
    });
}, observerOptions);

imgs.forEach((img) => {
    // If browser supports native lazy loading, prefer it as a hint
    if (!('loading' in HTMLImageElement.prototype)) {
        img.loading = 'lazy';
    }
    observer.observe(img);
});


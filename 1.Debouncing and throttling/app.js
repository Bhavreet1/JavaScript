// debouncing
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => { func(...args) }, delay);
    }
}

document.getElementById("inp").addEventListener("input", debounce(function (e) {
    console.log(e);
    console.log("Input event fired in debouncing");
}, 1000));

// throttling
function throttle(func,delay) {
    let last = 0;
    return function (...args) {
        let now = Date.now();
        if (now - last >= delay) {
            func(...args);
            last = now;
        }
    }
}

document.getElementById("inp").addEventListener("input", throttle(function (e) {
    console.log(e);
    console.log("Input event fired in throttling");
}, 4000));
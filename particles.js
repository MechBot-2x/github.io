// Efecto typewriter
const elements = document.querySelectorAll('.type');
elements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(typing);
    }, 100);
});

// Анимация кнопок
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 25px #00ccff';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
    });
});

// Плавное появление заголовка и лого
window.addEventListener('load', () => {
    const elements = [document.querySelector('h1'), document.querySelector('.logo')];
    elements.forEach(el => {
        if (el) {
            el.style.opacity = '0';
            setTimeout(() => {
                el.style.transition = 'opacity 1s';
                el.style.opacity = '1';
            }, 500);
        }
    });
});

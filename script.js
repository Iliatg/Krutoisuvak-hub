// Анимация для кнопок
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 25px #00ccff';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
    });
});

// Плавное появление заголовка
window.addEventListener('load', () => {
    document.querySelector('h1').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('h1').style.transition = 'opacity 1s';
        document.querySelector('h1').style.opacity = '1';
    }, 500);
});

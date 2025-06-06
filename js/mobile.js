// Функция для проверки ширины экрана
function checkScreenWidth() {
    const thresholdWidth = 768; // Пороговая ширина в пикселях

    // Если ширина экрана меньше пороговой, перенаправляем на другой файл
    if (window.innerWidth <= thresholdWidth) {
        window.location.href = 'mobile.html';
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
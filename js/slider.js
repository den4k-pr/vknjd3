document.addEventListener('DOMContentLoaded', () => {
  const reviewsSliderEl = document.querySelector('.reviews-swiper');
  
  if (reviewsSliderEl) {
    new Swiper(reviewsSliderEl, {
      loop: true, // Залишаємо true для безкінечного гортання
      spaceBetween: 15, // Строгий однаковий відступ між слайдами (15px)
      slidesPerView: 1.5, // Показуємо 1.5 слайда
      autoplay: false, // Без автоскролу по таймінгу
      autoHeight: false, // Обов'язково false, щоб CSS stretch працював коректно
      
      // Підключення кастомної пагінації
      pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
      
      // Підключення кастомних кнопок
      navigation: {
        nextEl: '.reviews-btn-next',
        prevEl: '.reviews-btn-prev',
      },
    });
  }
});
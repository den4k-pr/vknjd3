document.addEventListener("DOMContentLoaded", () => {
  const faqTriggers = document.querySelectorAll(".v85-faq-trigger");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const contentPanel = trigger.nextElementSibling;
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Закриваємо поточний активний елемент, якщо натиснуто на інший (ефект акордеону)
      faqTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger && otherTrigger.getAttribute("aria-expanded") === "true") {
          otherTrigger.setAttribute("aria-expanded", "false");
          otherTrigger.nextElementSibling.style.maxHeight = "0";
        }
      });

      // Перемикаємо стан поточного елемента
      if (isExpanded) {
        trigger.setAttribute("aria-expanded", "false");
        contentPanel.style.maxHeight = "0";
      } else {
        trigger.setAttribute("aria-expanded", "true");
        // Динамічно задаємо висоту скролу для абсолютно плавної анімації незалежно від обсягу тексту
        contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
      }
    });
  });
});
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const icon = question.querySelector('.faq-icon');
    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});
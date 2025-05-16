document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#solucoes-completas [data-aos]');
  let animado = false;

  AOS.init({
    once: true, 
    duration: 800,
    easing: 'ease-in-out',
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animado) {
        animado = true;

        setTimeout(() => {
          cards.forEach(card => {
            card.removeAttribute('data-aos');
            card.classList.remove('aos-animate'); 
          });
        }, 1000); 
      }
    });
  }, {
    threshold: 0.05, 
  });

  cards.forEach(card => observer.observe(card));
});
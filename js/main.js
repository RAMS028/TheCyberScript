// Efecto smooth scroll para los enlaces del navbar
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animación al hacer scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .project-card, .service-detail');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Configuración inicial para animaciones
window.addEventListener('load', () => {
  const animatedElements = document.querySelectorAll('.service-card, .project-card, .service-detail');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Forzar un reflow para activar las transiciones
  void animatedElements[0].offsetWidth;
  
  animateOnScroll();
});

// Ejecutar animación al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simulación de envío (reemplazar con tu lógica real)
    setTimeout(() => {
      submitBtn.textContent = '¡Mensaje Enviado!';
      this.reset();
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 1500);
  });
}

// Efecto de escritura simulada para las líneas de código
document.addEventListener('DOMContentLoaded', () => {
    const codeLines = document.querySelectorAll('.code-line');
    const codeTexts = [
        "def automate_tasks():",
        "    for task in repetitive_tasks:",
        "        script = create_script(task)",
        "    return success_message"
    ];

    codeLines.forEach((line, index) => {
        if (codeTexts[index]) {
            line.textContent = codeTexts[index];
            line.style.width = "fit-content";
            line.style.paddingRight = "1rem";
        }
    });
});
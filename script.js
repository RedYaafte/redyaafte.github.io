// Animaciones con Anime.js
document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const toggleIcon = darkModeToggle.querySelector(".toggle-icon");
  const body = document.body;
  let rotationCount = 0;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");
    const isLightMode = body.classList.contains("light-mode");

    // Animate the toggle button
    rotationCount += 360;
    anime({
      targets: darkModeToggle,
      rotate: rotationCount,
      duration: 600,
      easing: "easeOutBack",
    });

    // Update icon
    toggleIcon.textContent = isLightMode ? "🌙" : "☀️";
  });

  // Animación del hero - solo para elementos después del h1
  anime
    .timeline()
    .add({
      targets: ".hero-content .subtitle",
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 3000,
      easing: "easeOutExpo",
    })
    .add(
      {
        targets: ".hero-content p",
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
      },
      "-=400"
    )
    .add(
      {
        targets: ".cta-button",
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutElastic(1, .8)",
      },
      "-=400"
    );

  // Animación de las tarjetas de proyectos al hacer scroll
  const projectCards = document.querySelectorAll(".project-card");

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 800,
          delay: index * 200,
          easing: "easeOutExpo",
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  projectCards.forEach((card) => {
    card.style.opacity = "0";
    observer.observe(card);
  });

  // Animación de timeline
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const isOdd = Array.from(timelineItems).indexOf(entry.target) % 2 === 0;

        anime({
          targets: entry.target,
          translateX: [isOdd ? -50 : 50, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
        });

        anime({
          targets: entry.target.querySelector(".timeline-dot"),
          scale: [0, 1],
          duration: 600,
          delay: 300,
          easing: "easeOutElastic(1, .6)",
        });

        timelineObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    timelineObserver.observe(item);
  });

  // Animación de skill tags
  const skillTags = document.querySelectorAll(".skill-tag");
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: ".skill-tag",
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(50),
          easing: "easeOutElastic(1, .6)",
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (skillTags.length > 0) {
    skillObserver.observe(skillTags[0]);
  }

  // Smooth scroll para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Glitch effect en intervalos aleatorios para todos los h2
  const sectionTitles = document.querySelectorAll(".section-title");

  function randomGlitch() {
    sectionTitles.forEach((title) => {
      // Probabilidad aleatoria de glitch (70%)
      if (Math.random() > 0.3) {
        title.classList.add("glitch");
        setTimeout(() => {
          title.classList.remove("glitch");
        }, 300);
      }
    });

    // Siguiente glitch en un tiempo aleatorio entre 3-8 segundos
    const nextGlitch = Math.random() * 5000 + 3000;
    setTimeout(randomGlitch, nextGlitch);
  }

  // Iniciar glitch después de 2 segundos
  setTimeout(randomGlitch, 2000);
});

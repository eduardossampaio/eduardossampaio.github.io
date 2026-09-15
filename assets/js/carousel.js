/**
 * Lógica do carrossel do cabeçalho.
 * Suporta navegação por botões (anterior/próximo), indicadores (dots) e autoplay com pausa no hover.
 */
class HeaderCarousel {
  constructor(carouselSelector, intervalTime = 5000) {
    this.container = document.querySelector(carouselSelector);
    if (!this.container) return;

    this.track = this.container.querySelector('.carousel-track');
    this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
    this.prevBtn = this.container.querySelector('.carousel-btn.prev');
    this.nextBtn = this.container.querySelector('.carousel-btn.next');
    this.dotsContainer = this.container.querySelector('.carousel-dots');
    
    this.currentIndex = 0;
    this.intervalTime = intervalTime;
    this.autoPlayTimer = null;

    this.init();
  }

  init() {
    if (this.slides.length === 0) return;

    // Criar indicadores (dots)
    this.renderDots();

    // Event listeners dos botões
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prevSlide();
        this.resetAutoPlay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.nextSlide();
        this.resetAutoPlay();
      });
    }

    // Pausar autoplay ao passar o mouse
    this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.container.addEventListener('mouseleave', () => this.startAutoPlay());

    // Suporte a swipe simples em mobile
    this.setupTouchEvents();

    // Exibir o primeiro slide
    this.updateCarousel();
    this.startAutoPlay();
  }

  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';

    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
      this.dotsContainer.appendChild(dot);
    });
  }

  updateCarousel() {
    // Atualiza classes ativas nos slides
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentIndex);
    });

    // Atualiza dots
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
      });
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    if (index >= 0 && index < this.slides.length) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  }

  startAutoPlay() {
    if (this.slides.length <= 1) return;
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  setupTouchEvents() {
    let touchStartX = 0;
    let touchEndX = 0;

    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
        this.resetAutoPlay();
      }
    }, { passive: true });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new HeaderCarousel('#header-carousel');
});

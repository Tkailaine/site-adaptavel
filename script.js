//MENU
const botaoMenu = document.getElementById('icone-menu');
const fecharMenu = document.getElementById('fechar-menu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', () => {
    menu.classList.add('active');
})

fecharMenu.addEventListener('click', () => {
    menu.classList.remove('active');
})

//ANIMAÇÃO DE SURGIMENTO

function animarScroll() {
  const elementos = document.querySelectorAll('.surgir, .surgir-direita, .surgir-esquerda, .surgir-baixo');

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('aparecendo');
    } else {
      el.classList.remove('aparecendo'); // permite repetir ao rolar de volta
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);



  // SLIDES BANDEIRA
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-container .slide');
const dots = document.querySelectorAll('.dots-container .dot');
let interval = setInterval(nextSlide, 5000); // 5 segundos

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });

  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Evento de clique nos dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
    clearInterval(interval); // Reinicia o intervalo
    interval = setInterval(nextSlide, 5000);
  });
});

// Inicializa o primeiro slide
showSlide(currentIndex);


// galeria página sobre

  document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.expand-img');
    const modalContainer = document.getElementById('modal-img-container');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');

    imagens.forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalContainer.style.display = 'flex';
      });
    });

    // Fecha clicando no botão "X"
    modalClose.addEventListener('click', () => {
      modalContainer.style.display = 'none';
      modalImg.src = '';
    });

    // Fecha clicando na imagem
    modalImg.addEventListener('click', () => {
      modalContainer.style.display = 'none';
      modalImg.src = '';
    });

    // Fecha clicando fora da imagem (no fundo)
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
        modalImg.src = '';
      }
    });
  });
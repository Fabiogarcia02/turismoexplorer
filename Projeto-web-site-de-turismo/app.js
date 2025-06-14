document.getElementById('liturismo').addEventListener('click', function () {
  let cidadeId = 2;
  window.location.href = '../itensfavoritos/turismo.html?id=' + cidadeId;
});

// Para o botão dentro do conteúdo
document.getElementById('btnturismo').addEventListener('click', function () {
  let cidadeId = 2;
  window.location.href = '../itensfavoritos/turismo.html?id=' + cidadeId;
});

// Para o botão do menu
document.getElementById('lirestaurantes').addEventListener('click', function () {
  let cidadeId = 2;
  window.location.href = '../itensfavoritos/restaurantes.html?id=' + cidadeId;
});

// Para o botão dentro do conteúdo
document.getElementById('btnrestaurantes').addEventListener('click', function () {
  let cidadeId = 2;
  window.location.href = '../itensfavoritos/restaurantes.html?id=' + cidadeId;
});

document.getElementById('lieventos').addEventListener('click', function () {
  let cidadeId = 2;
  window.location.href = '../itensfavoritos/eventos.html?id=' + cidadeId;
});

// Botão “Voltar para Home”
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('backhome').addEventListener('click', function () {
    window.location.href = '../index.html';
  });
});

// Carrossel (não precisa de alteração, mantive igual ao seu código)
var nextBtn = document.querySelector('.next'),
  prevBtn = document.querySelector('.prev'),
  carousel = document.querySelector('.carousel'),
  list = document.querySelector('.list'),
  item = document.querySelectorAll('.item'),
  runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function () {
  showSlider('next');
};

prevBtn.onclick = function () {
  showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
  runningTime.style.animation = 'none';
  runningTime.offsetHeight; // trigger reflow
  runningTime.style.animation = null;
  runningTime.style.animation = 'runningTime 40s linear 1 forwards';
}

function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
  if (type === 'next') {
    list.appendChild(sliderItemsDom[0]);
    carousel.classList.add('next');
  } else {
    list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  resetTimeAnimation();
}
document.querySelector('.logosite').addEventListener('click', function () {
  window.location.href = '../index.html';
});



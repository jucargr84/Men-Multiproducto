const intervalCarousel = 7000; // Intervalo de tiempo para el carousel

document.addEventListener('DOMContentLoaded', function() {
  const toolTips = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(toolTips, {
    margin: 0
  });

  const floatingAB = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(floatingAB, {
    hoverEnabled: false,
    direction: 'left'
  });

  const carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true
  });

  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals, {
    // Remover. Solo para esteban
    onCloseStart: cambioVariableColor
  });

  // Remover. Solo para esteban
  const hasColorInputSupport = (document) => {
    try {
        const input = document.createElement('input');
        input.type = 'color';
        input.value = '!';
        return input.type === 'color' && input.value !== '!';
    } catch (e) {
        return false;
    };
  };
  const $btnCambioColor = document.querySelector('#btn-cambiar-color');
  $btnCambioColor.addEventListener('click', cambioVariableColor)

  document.querySelector('.abrir-paleta').addEventListener('click', function(){
    if(!hasColorInputSupport(document)){
      M.toast({html: 'Su navegador no soporta la paleta de colores', classes: 'red white-text'});
    }
  })


  const carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel-slider.pg-principal'));

  let carIntervalId = setInterval( () => {
    carouselInstance.next();
  },intervalCarousel)

  document.querySelector('.carousel_prev').addEventListener('click', function(){
    carouselInstance.prev();
    clearInterval(carIntervalId);
    carIntervalId = setInterval( () => {
      carouselInstance.next();
    },intervalCarousel)
  })

  document.querySelector('.carousel_next').addEventListener('click', function(){
    carouselInstance.next();
    clearInterval(carIntervalId);
    carIntervalId = setInterval( () => {
      carouselInstance.next();
    },intervalCarousel)
  })
});

// Remover. Solo para esteban
function cambioVariableColor(){
  let val = document.querySelector('#color-marca').value.trim();
  if(!val){
    return;
  }
  document.documentElement.style.setProperty('--color-marca',val);
}
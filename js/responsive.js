// Media query strings
// min-width
const ABOVE_SMALL  = "(min-width: 576px)";
      ABOVE_MEDIUM = "(min-width: 768px)";
      ABOVE_LARGE  = "(min-width: 992px)";
      ABOVE_XLARGE = "(min-width: 1200px)";
// max-width
const BELOW_SMALL  = "(max-width: 575px)";
      BELOW_MEDIUM = "(max-width: 767px)";
      BELOW_LARGE  = "(max-width: 991px)";
      BELOW_XLARGE = "(max-width: 1199px)";

function responsiveHandler(mediaQueryObj) {
   const mediaString = mediaQueryObj.media;
   switch (mediaString) {
      case ABOVE_MEDIUM:
         const $dropdownInfo = document.querySelector('.info-usuario_icono.dropdown-trigger'),
               $saldosContainer = document.querySelector('#saldos');
         // Remueve position fixed de los saldos
         if($saldosContainer){
            $saldosContainer.classList.remove('fixed-mobile-layer');
         }
         if (mediaQueryObj.matches) { // If media query matches
            // Destruye el dropdown de informacion del usuario
            let dropdownInfoInstance = M.Dropdown.getInstance($dropdownInfo);
            if(dropdownInfoInstance){
               dropdownInfoInstance.destroy();
            }
         } else {
            // Inicializa el dropdown de informacion del usuario
            M.Dropdown.init($dropdownInfo, {
               constrainWidth: false,
               coverTrigger: false,
            });
            // Agrega position fixed a los saldos
            if($saldosContainer){
               let topPosition = window.pageYOffset + $saldosContainer.getBoundingClientRect().top;
               $saldosContainer.classList.add('fixed-mobile-layer');
               $saldosContainer.style.top = topPosition+'px';
            }
         }
         break;
      case ABOVE_LARGE:
            const $recargaAqui = document.querySelector('.recarga_aqui'),
                  $saldosLeft = document.querySelector('#saldos-left'),
                  $mobileShortcuts = document.querySelector('#mobile-shortcuts');
            if (mediaQueryObj.matches) { // If media query matches
               if($recargaAqui){
                  $saldosLeft.insertBefore($recargaAqui,$saldosLeft.firstElementChild);
               }
            } else {
               if($recargaAqui){
                  $mobileShortcuts.insertBefore($recargaAqui,$mobileShortcuts.firstElementChild);
               }
            }
            break;
      default:
         console.log(mediaString)
         break;
   }
}

let asOfMediumObj = window.matchMedia(ABOVE_MEDIUM)
let asOfLargeObj = window.matchMedia(ABOVE_LARGE)
// Call listener function at run time
responsiveHandler(asOfMediumObj)
responsiveHandler(asOfLargeObj)
// Attach listener function on state changes 
asOfMediumObj.addListener(responsiveHandler)
asOfLargeObj.addListener(responsiveHandler)
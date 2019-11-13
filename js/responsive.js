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
         const $dropdownInfo = document.querySelector('.info-usuario_icono.dropdown-trigger');
         if (mediaQueryObj.matches) { // If media query matches
            let dropdownInfoInstance = M.Dropdown.getInstance($dropdownInfo);
            if(dropdownInfoInstance){
               dropdownInfoInstance.destroy();
            }
         } else {
            M.Dropdown.init($dropdownInfo, {
               constrainWidth: false,
               coverTrigger: false,
            });
         }
         break;
      default:
         console.log(mediaString)
         break;
   }
}

let asOfMediumObj = window.matchMedia(ABOVE_MEDIUM)
// Call listener function at run time
responsiveHandler(asOfMediumObj)
// Attach listener function on state changes 
asOfMediumObj.addListener(responsiveHandler)
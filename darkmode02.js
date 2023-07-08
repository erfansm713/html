// $( ".inner-switch" ).on("click", function() {
//     if( $( "body" ).hasClass( "dark" )) {
//       $( "body" ).removeClass( "dark" );
//       $( ".inner-switch" ).text( "OFF" );
//     } else {
//       $( "body" ).addClass( "dark" );
//       $( ".inner-switch" ).text( "ON" );
//     }
// });

function switchTheme() {
  let children = document.body.children;
  for (let i = 0; i < children.length; i++){
    children[i].classList.toggle('dark-mode');
  }
}
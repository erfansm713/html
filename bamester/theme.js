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
    console.log('Number of children: ', children.length);
    for (let i = 0; i < children.length; i++){
      console.log('Child: ', children[i]);
      children[i].classList.toggle('dark-mode');
    }

    let box = document.getElementById('box');
    box.classList.toggle('dark-mode');
    let children2 = box.children;
    for (let i = 0; i < children2.length; i++){
        console.log('Child: ', children2[i]);
        children2[i].classList.toggle('dark-mode');
      }
  
  }
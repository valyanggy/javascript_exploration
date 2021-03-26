// scroll-direction detection referenced from: https://codepen.io/lehollandaisvolant/pen/ryrrGx
// Initial state
var scrollPos = 0;





// adding scroll event
window.addEventListener('scroll', function(){

    // detects new state and compares it with the new one
  //   if ((document.body.getBoundingClientRect()).top > scrollPos)
  //   document.getElementById('adjective').setAttribute('data-scroll-direction', 'beautiful.');
    



  // else
  //   document.getElementById('adjective').setAttribute('data-scroll-direction', 'dreadful.');
  // // saves the new position for iteration.
  // scrollPos = (document.body.getBoundingClientRect()).top;
  // });

  let adjective =document.querySelector('#adjective');
  let scenario = document.querySelector('#scenario');
  // let bg = document.querySelector();

  // if ( (document.body.getBoundingClientRect()).top > scrollPos )
  // document.getElementById('adjective').setAttribute('data-scroll-direction', 'beautiful.');



  // else
  // document.getElementById('adjective').setAttribute('data-scroll-direction', 'dreadful.');
  // // saves the new position for iteration.
  // scrollPos = (document.body.getBoundingClientRect()).top;


  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    document.getElementById('adjective').setAttribute('data-scroll-direction', 'beautiful.');
    document.getElementById('scenario').setAttribute('data-scroll-situation', 'know what & how to do with it');
  
  
  
  } else {
    document.getElementById('adjective').setAttribute('data-scroll-direction', 'dreadful.');
    document.getElementById('scenario').setAttribute('data-scroll-situation', 'stare at people\' code for 2 hrs but still dont know how to work that magic ');
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
  }
});








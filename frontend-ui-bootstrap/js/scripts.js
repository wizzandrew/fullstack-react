//  Script for Reserve Table button Tooltip
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltip) => new bootstrap.Tooltip(tooltip)
  );


//  Script for Carousel resume/play buttons
//set carousel interval
const myCarousel = document.getElementById('mycarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  pause: false
});

//set carousel pause button
const carouselControls = document.getElementById('carouselControls');
carouselControls.addEventListener("click", event => {


  // if it pause button
  if(carouselControls.querySelector(':scope > span').classList.contains('fa-pause')) {
    //pause carousel
    carousel.pause();
    console.log("carousel paused");

    //set to play button
    carouselControls.querySelector(':scope > span').classList.remove('fa-pause');
    carouselControls.querySelector(':scope > span').classList.add('fa-play');
  }
  
  else if(carouselControls.querySelector(':scope > span').classList.contains('fa-play')) {
    //play carousel
    carousel.cycle();
    console.log("carousel resumed");

    //set to pause button
    carouselControls.querySelector(':scope > span').classList.remove('fa-play');
    carouselControls.querySelector(':scope > span').classList.add('fa-pause');
  }
});


//  Script for toggling Login  modal
//get modal
const modal = new bootstrap.Modal(document.getElementById('loginModal'), {
    keyboard: true
  });

  //get button
  const btn = document.getElementById('loginBtn');

  //set event listener
  btn.addEventListener('click', event => {
    modal.toggle();
    console.log('login modal toggled');
  })

 
//  Script for toggling Reserve table modal   
//get modal
const myModal = new bootstrap.Modal(document.getElementById('reserveTableModal'), {
    keyboard: true
  });

  //get button
  const button = document.getElementById('reserveTableBtn');

  //set event listener
  button.addEventListener('click', event => {
    myModal.toggle();
    console.log('reserve table modal toggled');
  })
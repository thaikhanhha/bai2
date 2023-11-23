const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

// By default make pause button disabled
pauseButton.disabled = true;


playButton.addEventListener('click', () => {
  pauseButton.disabled = false;
  playButton.disabled = true;
});


pauseButton.addEventListener('click', () => {
  playButton.disabled = false;
  pauseButton.disabled = true;
});

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/1.jpg')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/2.jpg')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/3.jpg')";
});

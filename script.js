'use strict';
const box = document.querySelectorAll('.box');
const btnColor = document.querySelector('.btn1');
const btnPicture = document.querySelector('.btn2');
let color = false;
let picture = false;

const sel = selector => document.querySelector(selector);

const setBackground = function() {
    if (picture) {
        document.body.style.backgroundImage = this.style.backgroundImage;
        console.log(this.style.backgroundImage);
    } else if (color) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = this.style.backgroundColor;
        console.log(this.style.backgroundColor);
    }
};

btnColor.addEventListener('click', function() {
    color = true;
    picture = false;
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundImage = `none`;
        box[i].style.backgroundColor = `rgb(${[1, 2, 3].map(
      x => (Math.random() * 256) | 0
    )})`;
    }
    document.querySelector('.container').classList.remove('hidden');
    console.log('press btnColor', color, 'picture is', picture);
});

btnPicture.addEventListener('click', function() {
    picture = true;
    color = false;
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundImage = `url('img/img${i + 1}.jpg')`;
    }
    document.querySelector('.container').classList.remove('hidden');
    console.log('press btnPicture', picture, 'color is', color);
});

sel('.box1').addEventListener('click', setBackground);
sel('.box2').addEventListener('click', setBackground);
sel('.box3').addEventListener('click', setBackground);
sel('.box4').addEventListener('click', setBackground);
sel('.box5').addEventListener('click', setBackground);
sel('.box6').addEventListener('click', setBackground);
sel('.box7').addEventListener('click', setBackground);
sel('.box8').addEventListener('click', setBackground);
sel('.box9').addEventListener('click', setBackground);
"use strict";

const paragraphArray = [{
  city: 'Rostov-on-Don LCD admiral',
  apartaments: '81 m2',
  time: '3.5 months',
  cost: 'Upon request',
  image: 'img/window.png'
}, {
  city: 'Sochi Thieves',
  apartaments: '105 m2',
  time: '4 months',
  cost: 'Upon request',
  image: 'img/tv.png'
}, {
  city: 'Rostov-on-Don Patriotic',
  apartaments: '93 m2',
  time: '3 months',
  cost: 'Upon request',
  image: 'img/bigTv.png'
}];

const paragraph1 = document.querySelector('.options-block__paragraph_1');
const paragraph2 = document.querySelector('.options-block__paragraph_2');
const paragraph3 = document.querySelector('.options-block__paragraph_3');
const paragraph4 = document.querySelector('.options-block__paragraph_4');

const linkSlideOne = document.querySelector('.completed__link_1');
const linkSlideTwo = document.querySelector('.completed__link_2');
const linkSlideThree = document.querySelector('.completed__link_3');

const circleSlide1 = document.querySelector('.block-content__circle_1');
const circleSlide2 = document.querySelector('.block-content__circle_2');
const circleSlide3 = document.querySelector('.block-content__circle_3');

const arrowRight = document.querySelector('.block-content__arrowRight');
const arrowLeft = document.querySelector('.block-content__arrowLeft');

const image = document.querySelector('.completed__image');

let currentIndex = 0;

const setEntity = (index) => {
  paragraph1.innerText = paragraphArray[index].city
  paragraph2.innerText = paragraphArray[index].apartaments
  paragraph3.innerText = paragraphArray[index].time
  paragraph4.innerText = paragraphArray[index].cost
  image.src = paragraphArray[index].image;
};



arrowLeft.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = paragraphArray.length - 1;
    setEntity(currentIndex);
    setActive(currentIndex);
  } else {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
    setActive(currentIndex);
  }
});

arrowRight.addEventListener('click', () => {
  if (currentIndex === paragraphArray.length - 1) {
    currentIndex = 0;
    setEntity(currentIndex);
    setActive(currentIndex);
  } else {
    setEntity(currentIndex + 1);
    currentIndex += 1;
    setActive(currentIndex);
  }
});

function setActive(num) {
  let activeClass = `.block-content__circle_${num + 1}`;
  const activeItem = document.querySelector(activeClass);
  document.querySelector('.circle_active').classList.remove('circle_active');
  activeItem.classList.add('circle_active');
}

linkSlideOne.addEventListener('click', function () {
  currentIndex = 0;
  setEntity(0);
  setActive(currentIndex);
});
linkSlideTwo.addEventListener('click', function () {
  currentIndex = 1;
  setEntity(1);
  setActive(currentIndex);
});
linkSlideThree.addEventListener('click', function () {
  currentIndex = paragraphArray.length - 1;
  setEntity(2);
  setActive(currentIndex);
});

const blockCircle = document.querySelector('.block-content__arrow-block');

circleSlide1.addEventListener('click', function () {
  currentIndex = 0;
  setEntity(0);
  setActive(currentIndex);
});
circleSlide2.addEventListener('click', function () {
  currentIndex = 1;
  setEntity(1);
  setActive(currentIndex);
});
circleSlide3.addEventListener('click', function () {
  currentIndex = paragraphArray.length - 1;
  setEntity(2);
  setActive(currentIndex);
});


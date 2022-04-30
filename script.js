'use strict';

/////////////////////// Heart Functionality ///////////////////////

function myFunction() {
  let element = document.getElementById('heart');
  element.classList.toggle('fa-solid');
}

let field = document.querySelector('input');
let btn = document.querySelector('button');
let form = document.querySelector('form');

/////////////////////// Comment Functionality ///////////////////////

btn.onclick = function addComment() {
  let html = `<p class="text" id="comment">
  <em>Comment</em> ${field.value}</p>`;
  if (field.value != '') {
    document.getElementById('comments').innerHTML += html;
    field.value = '';
  }
};
form.onsubmit = function () {
  return false;
};

/////////////////////// Swiper Functionality ///////////////////////

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

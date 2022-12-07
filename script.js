'use strict'

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

var slideIndex = 1

function plusDivs(n) {
  showDivs((slideIndex += n))
}

function showDivs(n) {
  var i
  var x = document.getElementsByClassName('mySlides')
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  x[slideIndex - 1].style.display = 'block'
}

$(toggleIcon)
$(closeMobileMenu)

showDivs(slideIndex)

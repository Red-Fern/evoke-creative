(function () {
  // Variables
  var body = document.querySelector('body');
  var nav = document.querySelector('header.header');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    body.classList.toggle('no-scroll');
    nav.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    body.classList.toggle('no-scroll');
    nav.classList.toggle('open');

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Function to init standard carousels
  function initCarousels() {
    // Grab all swiper containers
    let carouselContainers = document.getElementsByClassName('swiper-container');
  
    for (let i = 0; i < carouselContainers.length; i++) {
      // Get carousel, arrows and data attributes
      let carousel = carouselContainers[i].querySelector('.swiper'),
          prevArrow = carouselContainers[i].querySelector('.swiper-button-prev'),
          nextArrow = carouselContainers[i].querySelector('.swiper-button-next'),
          noSlides = carousel.dataset.slides ?? 1,
          noSlidesSm = carousel.dataset.slidesSm ?? noSlides,
          noSlidesMd = carousel.dataset.slidesMd ?? noSlides,
          noSlidesLg= carousel.dataset.slidesLg ?? noSlides,
          slidesGap = carousel.dataset.slidesGap ?? 12;

      new Swiper(carousel, {
        navigation: {
          prevEl: prevArrow,
          nextEl: nextArrow
        },
        slidesPerView: noSlides,
        spaceBetween: slidesGap,
        breakpoints: {
          640: {
            slidesPerView: noSlidesSm
          },
          768: {
            slidesPerView: noSlidesMd
          },
          992: {
            slidesPerView: noSlidesLg
          }
        }
      });
    }
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

      initCarousels();
    }
  });
})();

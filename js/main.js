
//  ==============  box Menu ======================
let menu = document.querySelector(".box-menu");
let menuIcon = document.querySelector(".box-menu-icon");
let settingBox = document.querySelector(".menu-list-container");
let menuHeaderIconXMark = document.querySelector(".menu-header-icon .fa-xmark")
let menuOverlay = document.querySelector(".menu-overlay")

document.addEventListener("click", (e) => {
  if (!(e.target === menu) && !(e.target === menuIcon) && !(settingBox.contains(e.target)) && !(e.target === menuOverlay)) {
    settingBox.classList.remove("active")
  }
  if (settingBox.classList.contains("active")) {
    document.body.style.cssText = "overflow: hidden"
    menuOverlay.classList.add("active")
  }
  else {
    document.body.style.cssText = "overflow: auto"
    menuOverlay.classList.remove("active")
  }
})

menu.addEventListener("click", () => {
  settingBox.classList.toggle("active")
})

menuHeaderIconXMark.addEventListener("click", () => {
  settingBox.classList.toggle("active")
})



//=========================   Menu List   ==========================
// get All Categories
let categories = document.querySelectorAll(".menu-categories-list-item-link-container")
// get Specific Categories
let computers = document.querySelector(".menu-categories-list-item-menu.computer")
let mobiles = document.querySelector(".menu-categories-list-item-menu.mobile")
let Accessories = document.querySelector(".menu-categories-list-item-menu.accessories")
let games = document.querySelector(".menu-categories-list-item-menu.games")
let electronics = document.querySelector(".menu-categories-list-item-menu.electronics")

let icon = document.querySelector(".fa-angle-down")

console.log(icon);

categories.forEach(ele => {
  console.log(ele.classList[1]);
  ele.addEventListener("click", (e) => {
    switch (ele.classList[1]) {
      case "computer": {
        computers.classList.toggle("active");
        break;
      }
      case "mobile": {
        mobiles.classList.toggle("active");
        break;
      }
      case "games": {
        games.classList.toggle("active");
        break;
      }
      case "accessories": {
        Accessories.classList.toggle("active");
        break;
      }
      case "electronics": {
        electronics.classList.toggle("active");
        break;
      }
      default: {
        return false;
      }

    }
  })
});




//==========   ( Swiper Banner )   ===========
$('.owl-carousel-swiper').owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    1199: {
      items: 1,
      nav: true,
      loop: true
    }
  }
})



//=============  (  Swiper Products   )   ===========
$('.owl-carousel-marka').owlCarousel({
  items: 6,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true
    },
    380: {
      items: 3,
      nav: false
    },
    575: {
      items: 4,
      nav: false
    },
    767: {
      items: 6,
      nav: true,
      loop: true
    },
    992: {
      items: 7,
      nav: true,
      loop: true
    }
    ,
    1199: {
      items: 8,
      nav: true,
      loop: true
    }
  }
})



//==========   ( Swiper Banner )   ===========
$('.owl-carousel-swiper').owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    1199: {
      items: 1,
      nav: true,
      loop: true
    }
  }
})



//===============  (  Swiper Products   )   ==============
$('.owl-carousel-products').owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    510: {
      items: 2,
      nav: false
    },
    767: {
      items: 3,
      nav: true,
      loop: true
    },
    992: {
      items: 4,
      nav: true,
      loop: true
    }
    ,
    1199: {
      items: 5,
      nav: true,
      loop: true
    }
  }
})



//===============  (  Swiper Brans   )   ==============
$('.owl-carousel-brand').owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: true
    },
    475: {
      items: 4,
      nav: false
    },
    767: {
      items: 5,
      nav: true,
      loop: true
    },
    992: {
      items: 5,
      nav: true,
      loop: true
    }
    ,
    1199: {
      items: 6,
      nav: true,
      loop: true
    }
  }
})


























document.addEventListener("DOMContentLoaded", () => {
  const swiper1 = new Swiper(".swiper-slider1", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper(".swiper-slider2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const swiper3 = new Swiper(".swiper-slider3", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

//
//
//
//
//
//
//
//
//
document.addEventListener("DOMContentLoaded", () => {
  const image1 = document.querySelector(".cont8");
  const image2 = document.querySelector(".section-100-2 .cont5");

  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 967) {
      const speed = 0.05;
      const windowHeight = window.innerHeight;

      if (image1) {
        const rect1 = image1.getBoundingClientRect();
        if (rect1.top < windowHeight && rect1.bottom > 0) {
          const shift1 =
            (windowHeight / 2 - (rect1.top + rect1.height / 2)) * speed;
          image1.style.transform = `translateY(${shift1}px)`;
        }
      }

      if (image2) {
        const rect2 = image2.getBoundingClientRect();
        if (rect2.top < windowHeight && rect2.bottom > 0) {
          const shift2 =
            -(windowHeight / 2 - (rect2.top + rect2.height / 2)) * speed;
          image2.style.transform = `translateY(${shift2}px)`;
        }
      }
    } else {
      if (image1) image1.style.transform = "none";
      if (image2) image2.style.transform = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedImages = document.querySelectorAll(".mkujynhtbgrvf");

  if (animatedImages.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    animatedImages.forEach((image) => {
      observer.observe(image);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selectors = [
    ".img-section-1 img",
    ".last443 img",
    ".section-big-3 img",
  ];

  const images = [];
  selectors.forEach((selector) => {
    const img = document.querySelector(selector);
    if (img) {
      images.push(img);
    }
  });

  if (images.length > 0) {
    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 967) {
        const speed = 0.05;
        const windowHeight = window.innerHeight;

        images.forEach((image) => {
          const rect = image.getBoundingClientRect();
          if (rect.top < windowHeight && rect.bottom > 0) {
            const shift =
              (windowHeight / 2 - (rect.top + rect.height / 2)) * speed;
            image.style.transform = `translateY(${shift}px) scale(1.15)`;
          }
        });
      } else {
        images.forEach((image) => {
          image.style.transform = "none";
        });
      }
    });
  }
});

//
//
//
//
//
//

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".h2, .p");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});

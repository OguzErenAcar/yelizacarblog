import { onScroll, animate } from "animejs";
 
 animate(".fade-in-element", {
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
    });
    animate(".slide-up-element", {
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic",
    });

    //must give custom target vy for loop
    animate("x", {
      x: "15rem",
      rotate: "1turn",
      duration: 2000,
      alternate: true,
      loop: true,
      autoplay: onScroll({
        container: document.body,
        debug: true,
      }),
    });

         animate(".slide-right-to-left", {
      translateX: ["100%", "0%"],
      opacity: [0, 1],
      duration: 2000, 
      easing: "easeOutExpo",
      autoplay: onScroll({
        container: document.body,
        debug: true,
      }),
    });
    animate(".slide-right-to-right", {
      translateX: ["-100%", "0%"],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo",
       autoplay: onScroll({
        container: document.body,
        debug: true,
      }),
    });
    //growing img tw
    //transition duration-500 ease-in-out transform hover:scale-110

    animate(".slide-right-to-left", {
      translateX: ["100%", "0%"],
      opacity: [0, 1],
      duration: 700,
      easing: "easeOutExpo",
    });

    animate(".slide-right-to-right", {
      translateX: ["-100%", "0%"],
      opacity: [0, 1],
      duration: 700,
    });
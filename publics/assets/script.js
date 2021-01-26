// // // parallax
// // function smootScroll(target, duration) {
// //   var target = document.querySelector(target);
// //   var targetPosition = target.getBoundingClientRect().top;
// //   var startPosition = window.pageXOffset;
// //   var distance = targetPosition - startPosition;
// //   var startTime = null;

// //   function animation(currentTime) {
// //     if (startTime === null) startTime = currentTime;
// //     var timeElapsed = currentTime - startTime;
// //     var run = ease(timeElapsed, startPosition, distance, duration);
// //     window.scrollTop(0, run);
// //     if (timeElapsed < duration) requestAnimationFrame(animation);
// //     console.log("timeElapsed:" + timeElapsed + "duration:" + duration);
// //   }

// //   function ease(t, b, c, d) {
// //     t /= d / 2;
// //     if (t < 1) return (c / 2) * t * t + b;
// //     t--;
// //     return (-c / 2) * (t * (t - 2) - 1) + b;
// //   }
// //   requestAnimationFrame(animation);
// // }

// // var section1 = document.getElementById("#home");
// // var section2 = document.getElementById("#quote");

// // section1.addEventListener("click", function () {
// //   smootScroll("#home", 1000);
// // });

// // section1.addEventListener("click", function () {
// //   smootScroll("#quote", 1000);
// // });

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();

//     console.log(wScroll);
// })

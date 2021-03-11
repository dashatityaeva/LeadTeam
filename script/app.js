$(document).ready(function () {

    $('.review__slider').slick({
        arrows: false, 
        slidesToShow: 1, 
        speed: 900,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true
        // responsive: [
        //     {
        //         breakpoint: 1280,
        //         settings: {
        //             slidesToShow: 1,
        //             slideToScroll: 1,
        //             dots: true, 
                    
        //         }
        //     }]
    });
});

let time = 1800;
const countDownEl = document.querySelector("#countdown");

setInterval(updateCount, 1000);
function updateCount() {
    const min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? `0${sec}` : sec;
    countDownEl.innerHTML = `${min}:${sec}`;
    time--;
}
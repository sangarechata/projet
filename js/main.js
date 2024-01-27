window.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector(".app-bar")

    window.addEventListener("scroll", (e)=> {
        if (window.scrollY > 125) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    })

    document.querySelector(".slice").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})
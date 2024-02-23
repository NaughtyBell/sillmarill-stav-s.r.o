document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Show logo for 3 seconds
    setTimeout(function () {
        document.getElementById("preloader").style.opacity = 0;
        setTimeout(function () {
            // Hide preloader and show main content
            document.getElementById("preloader").classList.add("slide-up 2s ease-in-out");
            document.getElementById("main-content").classList.remove("hidden");

            // Implement the slide-up animation
            document.getElementById("preloader").style.animation = "slide-up 2s ease-in-out";
        }, 3000); // 3 seconds
    }, 0); // 0 milliseconds (immediate)

});

document.addEventListener("DOMContentLoaded", function() {
    const contactPanel = document.getElementById("contact-panel");
    const logo = document.getElementById("logo");
    const contactLink = document.querySelector(".nav-link[href='#contact']");
    const closeBtn = document.querySelector(".close-btn");
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Open panel when hovering over logo
    logo.addEventListener("mouseenter", function() {
        contactPanel.style.width = "300px";
    });

    // Open panel when clicking the contact link
    contactLink.addEventListener("click", function(e) {
        e.preventDefault();
        contactPanel.style.width = "300px";
    });

    // Close panel when clicking the close button
    closeBtn.addEventListener("click", function() {
        contactPanel.style.width = "0";
    });

    // Close panel when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!contactPanel.contains(event.target) && !logo.contains(event.target) && !contactLink.contains(event.target)) {
            contactPanel.style.width = "0";
        }
    });

    // Close navbar after clicking on a link in toggle mode
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });

    // Smooth scrolling for the Back to Top button
    backToTopBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

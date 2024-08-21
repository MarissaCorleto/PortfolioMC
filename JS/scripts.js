document.addEventListener("DOMContentLoaded", function() {
    const contactPanel = document.getElementById("contact-panel");
    const logo = document.getElementById("logo");
    const contactLink = document.querySelector(".nav-link[href='#contact']");
    const closeBtn = document.querySelector(".close-btn");

    // Define navLinks and navbarCollapse
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Open panel when hovering over logo
    logo.addEventListener("mouseenter", function() {
        contactPanel.classList.add("show");
    });

    // Open panel when clicking the contact link
    contactLink.addEventListener("click", function(e) {
        e.preventDefault();
        contactPanel.classList.add("show");
    });

    // Close panel when clicking the close button or clicking outside the panel
    closeBtn.addEventListener("click", function() {
        contactPanel.classList.remove("show");
    });

    document.addEventListener("click", function(event) {
        if (!contactPanel.contains(event.target) && !logo.contains(event.target) && !contactLink.contains(event.target)) {
            contactPanel.classList.remove("show");
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

    // Back to Top Button
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });

    backToTopBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.getElementById('backToTop');
const footer = document.querySelector('footer');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }

    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight) {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});

document.querySelectorAll('.me img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.classList.add('flipped');
    });
    img.addEventListener('mouseout', () => {
        img.classList.remove('flipped');
    });
});

const profileImage = document.getElementById('profileImage');
const originalSrc = 'Images/Profilephoto1.jpg';
const logoSrc = 'Images/LogoInitials.png';

profileImage.addEventListener('mouseover', () => {
    profileImage.src = logoSrc;
});

profileImage.addEventListener('mouseout', () => {
    profileImage.src = originalSrc;
});
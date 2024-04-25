// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika menu  di klik
document.querySelector('#nav-side').onclick = () => {navbarNav.classList.toggle('active');};
// Klik Untuk Menghilangkan Navbar
const hamburger = document.querySelector('#nav-side');
document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

function copyToClipboard() {
    const copyText = document.getElementById("copy-text");
    copyText.select();
    document.execCommand("copy");
};


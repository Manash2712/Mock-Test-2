
const mobileNav = document.querySelector('.nav-items-list-mobile')
const toggleBtn = document.querySelector('.toggleBtn')

const toggleNav = () => {
    if (toggleBtn.classList.contains('fa-bars')) {
        toggleBtn.classList.remove('fa-bars')
        toggleBtn.classList.add('fa-xmark')
        mobileNav.style.display = 'flex'
    }
    else {
        toggleBtn.classList.remove('fa-xmark')
        toggleBtn.classList.add('fa-bars')
        mobileNav.style.display = 'none'
    }
}
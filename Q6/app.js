
const showBtn = document.getElementById('show')


function showDialog(e) {
    e.stopPropagation()
    document.getElementById('dialog').classList.add('show')
    document.querySelector("body").style.overflow = 'hidden';
};
const closeDialog = () => {
    document.getElementById('dialog').classList.remove('show');
    document.querySelector("body").style.overflow = 'visible';
}

window.onclick = function (event) {
    const modal = document.getElementById('dialog');
    if (event.target !== modal) {
        modal.classList.remove('show');
        document.querySelector("body").style.overflow = 'visible';
    }
}
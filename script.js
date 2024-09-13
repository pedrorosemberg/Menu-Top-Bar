const menu = document.getElementById("menu");
const profPic = document.getElementById("prof-pic");

profPic.addEventListener("click", () => {
    menu.classList.remove('fade-out');
    menu.classList.add('fade-in');
});

menu.addEventListener("click", () => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnProficPic = profPic.contains(event.target);

    if (!isClickInsideMenu && !isClickOnProficPic) {
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
    }
});


const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", () => {
        const isOpen = mainNavigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("bi-list", !isOpen);
            icon.classList.toggle("bi-x-lg", isOpen);
        }
    });

    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNavigation.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.add("bi-list");
                icon.classList.remove("bi-x-lg");
            }
        });
    });
}
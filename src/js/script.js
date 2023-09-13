const typewriter = new Typewriter("#hello-friend-text", {
    strings: [
        "Hello friend",
        "Ciao amico",
        "Bok prijatelju",
        "Привет друг",
        "Hallo Freund",
        "Hej ven",
        "Привіт друже",
        "Salut l'ami",
        "Γεια σου φίλε",
        "Hola amigo",
        !Math.random() ? "Сәләм дуҫ" : "Salut prietene",
        "Hei ystävä",
        "Witaj przyjacielu",
    ],
    cursor: "_",
    cursorClassName: "typewriter-cursor", // Give it a nice name and remove the default CSS
    autoStart: true,
    loop: true,
    delay: 80,
    pauseFor: 750,
});

const can_hover = window.matchMedia("(hover: hover)").matches;

// Animate the scroll down arrow when pressed
document.querySelector("#scroll-down-cta").addEventListener("click", () => {
    document.querySelector("#scroll-down-cta").classList.add("spin-slide-out");
});

// Make footer email button focus the email form
document.querySelector(".fi-br-at").addEventListener("click", () => {
    document.querySelector('input[name="email"]').focus();
});

//* Temporary solution until Firefox catches up with :has()
document.querySelectorAll(".carousel-card").forEach((card) => {
    for (const c of card.children) {
        if (c.classList.contains("front")) {
            card.classList.toggle("has-front");
        }
    }
});

//* Temporary solution until Firefox catches up with :has()
const refresh = () => {
    document.querySelectorAll(".carousel-container").forEach((container) => {
        container.classList.toggle(
            "has-div-front",
            container.querySelector("div.front") !== null
        );
    });
};

// document.querySelectorAll(".carousel-card:has(.front)").forEach((e) => {
document.querySelectorAll(".carousel-card.has-front").forEach((e) => {
    const toggle = () => {
        setTimeout(() => {
            for (const c of e.children) {
                c.classList.toggle("front");
            }

            refresh();
        }, 5);
    };

    if (can_hover) {
        e.addEventListener("mouseenter", toggle);
        e.addEventListener("mouseleave", toggle);
    } else {
        e.addEventListener("mouseenter", () => {
            toggle();
            setTimeout(toggle, 2000);
        });
    }
});

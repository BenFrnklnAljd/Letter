function createConfetti() {

    const isMobile = window.innerWidth <= 390;

    const confettiCount = isMobile ? 25 : 50;

    const confettiContainer = document.createElement('div');

    confettiContainer.style.position = 'fixed';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.overflow = 'hidden';
    confettiContainer.style.zIndex = '9999';

    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {

        const confetti = document.createElement('div');

        const size = isMobile
            ? Math.random() * 6 + 3
            : Math.random() * 10 + 5;

        confetti.style.position = 'absolute';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        confetti.style.backgroundColor =
            `hsl(${Math.random() * 360}, 100%, 70%)`;

        confetti.style.borderRadius =
            Math.random() > 0.5 ? '50%' : '2px';

        confetti.style.left =
            Math.random() * window.innerWidth + 'px';

        confetti.style.top = '-20px';

        confetti.style.opacity = Math.random();

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetti.style.transition =
            `transform ${Math.random() * 6 + 9}s linear,
             opacity 5s ease-out`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform = `
                translateY(${window.innerHeight + 100}px)
                translateX(${Math.random() * 100 - 50}px)
                rotate(${Math.random() * 720}deg)
            `;

            confetti.style.opacity = '0';

        }, 50);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 4000);
}

setInterval(createConfetti, 1200);
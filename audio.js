document.addEventListener("click", function() {
    let audio = document.getElementById("musica");
    audio.play();
    audio.muted = false;
}, { once: true })

document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");

    function moverBoton() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // El botón se moverá cuando el mouse pase por encima
    noBtn.addEventListener("mouseenter", moverBoton);
    
    // El botón también se moverá si alguien hace clic en él
    noBtn.addEventListener("click", moverBoton);
});


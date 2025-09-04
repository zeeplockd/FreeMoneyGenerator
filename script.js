button = document.getElementById("button");
button.addEventListener("click", () => {
    button.style.display = "none";
    const video = document.getElementById("video");
    if (video) {
        video.style.display = "block";
        video.volume = 0.3;
        video.play();
    }
});

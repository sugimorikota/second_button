document.addEventListener("DOMContentLoaded", function() {
  const playButton = document.querySelector(".button");
  const imageContainers = document.querySelectorAll(".image-container");

  playButton.addEventListener("click", function(event) {
    event.preventDefault();
    imageContainers.forEach(container => {
      container.style.display = "block";
    });
    setTimeout(function() {
      window.location.href = playButton.href;
    }, 2000); // 3秒後に遷移
  });
});
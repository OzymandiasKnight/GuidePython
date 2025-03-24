document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function() {
            window.location.href = "guide_bases.pdf"; // Change this to your desired link
          });
    });
});

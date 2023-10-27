var modal = document.getElementById("imageModal");
var btn = document.getElementById("enlargeImageBtn");
var span = document.getElementById("closeModal");

// Function to open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Function to close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
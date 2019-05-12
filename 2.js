var modal = document.getElementsByClassName("modal")[0];
var btn_open = document.getElementsByClassName("button")[0];
var btn_close = document.getElementsByClassName("button")[1];

// When the user clicks the button, open the modal
btn_open.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks the button, close the modal
btn_close.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, don't close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
};

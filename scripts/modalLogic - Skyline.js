const suffix = "Sky-1"
var modal = document.getElementById("myModal-" + suffix);

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-" + suffix);
var modalImg = document.getElementById("img" + suffix);
var captionText = document.getElementById("caption" + suffix);
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
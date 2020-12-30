// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".prev-img");

img.forEach(addImg);


function addImg(e) {
    var modalImg = document.querySelector(".modal-content");
    var captionText = document.querySelector(".caption");
    e.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = e.src;
        captionText.innerHTML = e.alt;
    });
}

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
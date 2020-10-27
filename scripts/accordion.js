
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        //accordion is open and we need to close it
      content.style.maxHeight = null;
    } else {
        //accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


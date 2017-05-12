var form = document.querySelector(".form-block");
var form_button = document.querySelector(".search-form-trigger");
form_button.addEventListener("click", function(){

// if (form.className.match("display-toggle")) {
//   console.log("yes");
//   form.classList.remove("slide-down");
//   form.classList.add("slide-up");
// } else {
//   console.log("no");
//   form.classList.remove("slide-up");
//   form.classList.add("slide-down");
// }

form.classList.toggle("display-toggle");

})

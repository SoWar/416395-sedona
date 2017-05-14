var form = document.querySelector(".form-block");
var form_button = document.querySelector(".search-form-trigger");
form.classList.toggle("display-toggle");
form_button.addEventListener("click", function(){form.classList.toggle("display-toggle")})

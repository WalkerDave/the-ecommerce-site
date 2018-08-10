function myFunction() {
    var name = document.getElementById("name").value;
    console.log(name);
    var username = document.getElementById("username").value;
    console.log(username);
    var email = document.getElementById("email").value;
    console.log(email);
    var password = document.getElementById("password").value;
    console.log(password);
    var bday = document.getElementById("bday").value;
    console.log(bday);
    var check = document.getElementById("signup").checked;
    console.log(check);
    var today = new Date().getFullYear();
    var birthYear = new Date(bday).getFullYear();
    var difference = today - birthYear;
    if(difference < 18) {
        alert("you're too young to sign up");
    }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if(form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
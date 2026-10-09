window.addEventListener("load", function () {

    var userForm = document.getElementById("userForm");
    var usernameInput = document.getElementById("username");
    var validationMsg = document.getElementById("validationMsg");
    var displayText = document.getElementById("displayText");
    var mainHeading = document.getElementById("mainHeading");
    var themeBtn = document.getElementById("themeBtn");

    function setBackground(e) {
        if (e.type === "focus") {
            e.target.style.backgroundColor = "#FFE393";
        } else if (e.type === "blur") {
            e.target.style.backgroundColor = "white";
        }
    }

    usernameInput.addEventListener("focus", setBackground);
    usernameInput.addEventListener("blur", setBackground);

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var fieldValue = usernameInput.value.trim();

        if (fieldValue === null || fieldValue === "") {
            validationMsg.textContent = "You must enter a username!";
            validationMsg.className = "status-msg error";
        } else {
            validationMsg.textContent = "Form submitted successfully!";
            validationMsg.className = "status-msg success";

            displayText.textContent = "Hello, " + fieldValue + "! Welcome to the DOM portal.";
            mainHeading.textContent = "Welcome, " + fieldValue + "!";

            usernameInput.value = "";
        }
    });

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeBtn.textContent = "Switch to Light Mode";
        } else {
            themeBtn.textContent = "Toggle Theme";
        }
    });

});
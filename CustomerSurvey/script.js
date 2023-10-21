
        const form = document.getElementById("surveyForm");
        const resetButton = document.getElementById("resetButton");
        const submitButton = document.getElementById("submitButton");

        const popup = document.getElementById("popup");
        const closePopupButton = document.getElementById("closePopup");
        
        resetButton.addEventListener("click", () => {
            form.reset();
        });

        submitButton.addEventListener("click", () => {
            if (form.checkValidity()) {
                document.getElementById("popupFirstName").textContent = document.getElementById("firstName").value;
                document.getElementById("popupLastName").textContent = document.getElementById("lastName").value;
                document.getElementById("popupDob").textContent = document.getElementById("dob").value;
                document.getElementById("popupCountry").textContent = document.getElementById("country").value;
                const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
                const genders = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(", ");
                document.getElementById("popupGender").textContent = genders;
                document.getElementById("popupProfession").textContent = document.getElementById("profession").value;
                document.getElementById("popupEmail").textContent = document.getElementById("email").value;
                document.getElementById("popupMobile").textContent = document.getElementById("mobile").value;
                popup.style.display = "flex";
            }
        });

        closePopupButton.addEventListener("click", () => {
            popup.style.display = "none";
            form.reset();
        });
 

    document.addEventListener("DOMContentLoaded", function () {
        const registerForm = document.getElementById("registerForm");

        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

           
            const fullName = registerForm.querySelector('input[type="text"]').value;
            const email = registerForm.querySelector('input[type="email"]').value;
            const age = registerForm.querySelector('input[type="number"]').value;
            const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

            
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

             
            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

         
            const storedUserDetails = localStorage.getItem("userDetails");
            if (storedUserDetails) {
                const existingUser = JSON.parse(storedUserDetails);
                if (existingUser.email === email) {
                    alert("This email is already registered. Please use a different email.");
                    return;
                }
            }

    
            const userDetails = {
                fullName: fullName,
                email: email,
                age: age,
                password: password
            };

            localStorage.setItem("userDetails", JSON.stringify(userDetails));

            alert("Registration successful! Your details have been saved.");
            window.location.href = "login.html"; 
        });
    });


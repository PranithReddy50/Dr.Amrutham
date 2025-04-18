
  
    document.addEventListener("DOMContentLoaded", function () {
   
        const loginForm = document.getElementById("loginForm");

       
        loginForm.addEventListener("submit", function (event) {
             event.preventDefault(); 

           
            const emailInput = loginForm.querySelector('input[type="email"]').value;
            const passwordInput = loginForm.querySelector('input[type="password"]').value;

 
            const storedUserDetails = localStorage.getItem("userDetails");

            if (storedUserDetails) {
                
                const userDetails = JSON.parse(storedUserDetails);

         
                if (userDetails.email === emailInput && userDetails.password === passwordInput) {
                   
                    window.location.href = "index.html"; // Redirect to the dashboard or home page
                } else {
                    
                    alert("Invalid email or password. Please try again.");
                }
            } else {
                alert("No user registered. Please sign up first.");
            }
        });
    });


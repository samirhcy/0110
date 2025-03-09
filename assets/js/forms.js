/*
	This one is for handling forms. It has form validation js r8 now.
    it needs serial for every form to work.
*/

//index access code
document.getElementById("myForm").addEventListener("submit", validateForm);
		  
			function validateForm(event) {
			  event.preventDefault(); // Prevent form submission
		  
			  // Get the entered code
			  var enteredCode = document.getElementById("code").value;
		  
			  // Compare the entered code with the stored code
			  var storedCode = "tge2890"; // Replace with your actual stored code
		  
			  if (enteredCode === storedCode) {
				// Code is valid, redirect to the desired page
				window.location.href = "#intro"; // Replace with your actual page URL
			  } else {
				// Code is invalid, display an error message
				alert("Invalid Access Code. Please try again.");
			  }
			}

//stage 1 
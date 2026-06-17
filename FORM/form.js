$(document).ready(function () {

    $("#contactForm").submit(function (e) {

        e.preventDefault();

        $(".error").text("");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let message = $("#message").val().trim();

        let isValid = true;

        
        if (name === "") {
            $("#name").next(".error").text("Name is required");
            isValid = false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#email").next(".error").text("Email is required");
            isValid = false;
        }
        else if (!emailPattern.test(email)) {
            $("#email").next(".error").text("Enter a valid email");
            isValid = false;
        }

       
        let phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            $("#phone").next(".error").text("Phone number is required");
            isValid = false;
        }
        
        else if (!phonePattern.test(phone)) {
            $("#phone").next(".error").text("Enter a valid 10-digit phone number");
            isValid = false;
        }

        
        if (message === "") {
            $("#message").next(".error").text("Message is required");
            isValid = false;
        }
           
        if (isValid) {

            const formData = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            $.ajax({
                url: "https://practice-gida.onrender.com/Data",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(formData),

                success: function (response) {

                    alert("Form Submitted Successfully");

                    $("#contactForm")[0].reset();

                    console.log(response);
                },

                error: function (error) {

                    console.log(error);
                    alert("Something went wrong");
                }
            });
        }
        
    });

    

});
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// const email = document.querySelector("label.email").value.trim();

   

    // Use the 'email' and 'password' variables as needed

 
const login = document.getElementById("loginbtn");
const emailwarn = document.getElementById("emailwarn");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;





login.addEventListener('click',()=>{
    // alert("am clicked")
    // console.log(email)
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pswrd").value.trim();
    // console.log(email, password);

    if (email === "" || password  === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields!",
          });
        }
    else if (!emailRegex.test(email)) {
        emailwarn.style.display="block";
        setTimeout(() => {
            emailwarn.style.display="none";
        }, 2000);
      } else if(!passwordRegex.test(password)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number  ",
          });
      }
      else{
        Swal.fire({
            position: 'top',
            customClass: {
              popup: 'custom-top-center-popup',
              title: 'custom-top-center-title',
            },
            icon: 'success',
            title: 'Your Login Successfully',
            showConfirmButton: false,
            timer: 3000
          });
          
          setTimeout(() => {
            window.location.href = 'loginsuss.html';
          }, 4000);

      }  
      }

)
    
document.getElementById("pswrd").addEventListener('input', function() {
    const passwordInput = document.getElementById("pswrd");
    const strengthText = document.getElementById("strengthText");
    const passwordStrength = document.getElementById("passwordStrength");

    const passwordValue = passwordInput.value;

    // Minimum 8 characters, at least one uppercase, one lowercase, and one number
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (strongRegex.test(passwordValue)) {
      strengthText.textContent = "Strong";
      strengthText.className = "strong";
    } else if (mediumRegex.test(passwordValue)) {
      strengthText.textContent = "Medium";
      strengthText.className = "medium";
    } else {
      strengthText.textContent = "Weak";
      strengthText.className = "weak";
    }

    passwordStrength.style.display = "block";
  });


signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

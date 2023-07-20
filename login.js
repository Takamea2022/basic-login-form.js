
document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;


  // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
      //Successful login
      alert('Login Successfuly');
    } else {
      //Invalid Login
      alert('Invalid Username or Password');
    }
});

document.getElementById('registrationForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
     // Check if all fields are filled
    if (username && email && password && confirmPassword) {
      //check if the password match
      if (password === confirmPassword) {
        //Successful registration
        alert('Registration Successful');
        //Reset the form
        document.getElementById('registrationForm').reset();
      } else {
        alert('Password do not match');
      }
    } else {
      //Messing fields
      alert ('Please fill in all fields');
    }
});
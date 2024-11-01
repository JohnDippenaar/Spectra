// JavaScript for Sign-In Form
const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('signin-username').value;
  const password = document.getElementById('signin-password').value;

  if (username && password) {
    // Mock sign-in logic
    localStorage.setItem('isLoggedIn', true);
    alert('Sign-In Successful!');
    window.location.href = 'index.html'; // Redirect to home page
  } else {
    alert('Please fill in both username and password.');
  }
});

// JavaScript for Sign-Up Form
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username && email && password) {
    // Mock sign-up logic: store data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Sign-Up Successful!');
    window.location.href = 'signin.html'; // Redirect to Sign-In page after sign-up
  } else {
    alert('Please fill in all fields.');
  }
});

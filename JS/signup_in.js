const signupModal = document.getElementById('signup-modal');
const signinModal = document.getElementById('signin-modal');
const websiteContent = document.getElementById('website-content');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');

// Switch to Sign-In Modal
switchToSignin.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.classList.add('hidden');
  signinModal.classList.remove('hidden');
});

// Switch to Sign-Up Modal
switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  signinModal.classList.add('hidden');
  signupModal.classList.remove('hidden');
});

// Handle Sign-Up Form Submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign-Up Successful!');
  signupModal.classList.add('hidden');
  websiteContent.classList.remove('hidden');
});

// Handle Sign-In Form Submission
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign-In Successful!');
  signinModal.classList.add('hidden');
  websiteContent.classList.remove('hidden');
});
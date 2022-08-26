import React from 'react';
import './css/SignUp.css';
function SignUp() {
  return (
    <form action='/' class='form' method='post'>
      <div className='form'>
        <div class='form_name'>SIGN UP FOR OUR DAILY INSIDER</div>
        <div>
          <input
            type='text'
            name='email'
            class='form_input'
            placeholder='Enter your Email'
            aria-label='Enter your Email'
          />
        </div>
        <button class='form-button' name='Subscribe' type='submit'>
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default SignUp;

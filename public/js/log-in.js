async function signupFormHandler(event){
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/employee', 
        {
            method: 'post',
            body: JSON.stringify(
                {
                    email,
                    password,
                    role_id: 2
                }
            ),
            headers: { 'Content-Type': 'application/json'}
        });
        
        if (response.ok){
            alert('Account successfully created. You can now sign in')
            console.log('success')
        } else {
            alert(response.statusText);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/employee/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok){
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
    }
};


document.querySelector('#login').addEventListener('click', loginFormHandler);
document.querySelector('#signup').addEventListener('click', signupFormHandler);

async function adminFormHandler(event){
    event.preventDefault();
    console.log('here')
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(email, password);

    if (email && password) {
        const response = await fetch('/api/employee', 
        {
            method: 'post',
            body: JSON.stringify(
                {
                    email,
                    password,
                    role_id: 1
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
};

document.querySelector('#admin').addEventListener('click', adminFormHandler);
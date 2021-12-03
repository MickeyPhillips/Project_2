const linkForm = document.querySelector('#link-form')

async function addResourceFormHandler(event){
    event.preventDefault();
    const name = linkForm.querySelector('#rname').value.trim();
    const description = linkForm.querySelector('#desc').value.trim();
    const link = linkForm.querySelector('#link').value.trim();

    console.log(name, description, link);

    const response = await fetch('/api/link',
    {
        method: "POST",
        body: JSON.stringify(
            {
            name,
            description,
            link,
            }
        ),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok){
        alert('Link has been added');
        window.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('#resource-submit').addEventListener('click', addResourceFormHandler)
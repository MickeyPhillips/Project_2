async function remove(){
    const button = document.querySelector('.delete-btn');
    const id = button.getAttribute('id');
    const convert_id = parseInt(id);
    
    const response = await fetch(`/api/link/${convert_id}`, {
        method: 'DELETE'
    })

    if (response.ok){
        alert('successfully deleted post');
        window.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-btn').addEventListener('click', remove);
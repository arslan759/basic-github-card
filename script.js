function getUserData(){
    
    let username = document.getElementById('url').value
    let link = 'https://api.github.com/users/'

    if(username=='')
    {
        document.getElementById('profile-card').classList.remove('visible')
        document.getElementById('profile-card').classList.add('invisible')
        alert('Please Enter a valid URL')
    }
    else
    {
    fetch(link.concat('',username))
    .then(response=>response.json())
    .then(json=>{
        document.getElementById('profile-name').innerHTML = json.name
        document.getElementById('profile-photo').src = json.avatar_url
        document.getElementById('profile-bio').innerHTML = json.bio
        document.getElementById('profile-link').href = json.html_url
        document.getElementById('profile-card').classList.remove('invisible')
        document.getElementById('profile-card').classList.add('visible')
    })
    }
    
}
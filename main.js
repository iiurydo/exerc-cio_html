document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#profile_name');
    const username = document.querySelector('#profile_username');
    const avatarPic = document.querySelector('#avatar_image');
    const repos = document.querySelector('#repositorio');
    const following = document.querySelector('#seguindo');
    const follwers = document.querySelector('#seguidores');
    const linkPage = document.querySelector('#link');
    
    fetch('https://api.github.com/users/iiurydo')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            name.innerText = json.login;
            username.innerHTML = json.login;
            avatarPic.src = json.avatar_url;
            repos.innerHTML = json.public_repos;
            following.innerHTML = json.following;
            follwers.innerHTML = json.followers;
            linkPage.href = json.html_url;
        })
})
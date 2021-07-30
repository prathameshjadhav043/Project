
var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {

    e.preventDefault();
    if (!e) {
        alert('Enter username');
    }
    else {

        var search = document.getElementById('search').value

        var originalName = search.split(' ').join('')

        document.getElementById('result').innerHTML = ''

        fetch("https://api.github.com/users/" + originalName)
            .then((result) => result.json())
            .then((data) => {
                document.getElementById('result').innerHTML = `
                    <img class="img" src="${data.avatar_url}"/>
                    <div class="content">
                        <br/>
                        <p>Name: ${data.name}</p>
                        <p>Bio: ${data.bio}</p>
                        <p>Location: ${data.location}</p>
                        <p>Repo: ${data.public_repos}</p>
                    </div>
                    `
            }).catch((err) => {
                console.log(`something goes wrong ${err}`);
            })
    }

})
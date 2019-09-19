const getGitHubInfo = function (username) {
	var username = document.getElementById("username").value;
	var repositorio = document.getElementById("repositorio").value;
	var gists = document.getElementById("gists").value;
	var followers = document.getElementById("followers").value;
    var url = 'https://api.github.com/users/' + username;


    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            const avatar = ajax.avatar_url;
            const repos = ajax.public_repos;
            const gists = ajax.public_gists;
            const follow = ajax.followers;
            document.getElementById("github-avatar").src = avatar;
            document.getElementById("repositorio").innerHTML = "<strong>"+repos+"</strong>Repos</a>";
            document.getElementById("gists").innerHTML = "<strong>"+gists+"</strong>Repos</a>";
            document.getElementById("followers").innerHTML = "<strong>"+follow+"</strong>Repos</a>";


        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};


class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // display profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3" style="text-align: center">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary mb-2">Public Gists: ${user.gists}</span>
        <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
        <span class="badge badge-info mb-2">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">User: ${user.login}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
        </div>

      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // show reset button
  reset() {
    const reset = document.getElementById("reset");
    const search = document.getElementById("search-user");

    reset.style.display = "initial";

    reset.addEventListener('mouseup', (e) => {
      this.profile.innerHTML = '';
      reset.style.display = "none";
      search.value = '';
      search.focus();
    });
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // show alert messge
  showAlert(message, className) {
    // clear any previous alerts
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get searchbox
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}

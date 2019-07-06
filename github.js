class GitHub {
  constructor () {
    this.client_id = '64b6e66b1011cf36155e';
    this.client_secret = '56b3294536aa3c6b2709c2f8e17f0e4ba8523fff';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}

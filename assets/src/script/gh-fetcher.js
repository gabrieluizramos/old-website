
class GHFetcher {
  constructor(username) {
    this.username = username;
    this.reposURL = `https://api.github.com/users/${this.username}/repos`;
    this.repoForBranchUrl = `https://api.github.com/repos/${this.repoName}/devagenda/branches`;

    this.start();
  }

  fetchRepos() {
    return fetch(this.reposURL).then(response => response.json());
  }

  fetchBranchesByRepo(repo) {
    this.repoName = repo;
    console.log('===brancheForUrl', this.repoForBranchUrl);
    // return fetch(this.repoForBranchUrl).then(response => response.json());
  }

  loadReposWithGHBranches() {
    for (const repo in this.repos) {
      this.fetchBranchesByRepo(this.repos[repo].name);
    }
  }

  start() {
    this.fetchRepos()
    .then(data => {
      this.repos = data;
      console.log('===data', data);
      return this.loadReposWithGHBranches();
    });
  }
}

GHFetcher = new GHFetcher('gabrieluizramos');

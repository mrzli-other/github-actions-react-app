module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/mrzli/github-actions-react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};

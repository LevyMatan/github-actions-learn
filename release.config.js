module.exports = {
    "branches": ["main",],
    "repositoryUrl": "https://github.com/LevyMatan/github-actions-learn",
    "plugins": [
        "@semantic-release/commit-analyzer", 
        "@semantic-release/release-notes-generator", 
        "@semantic-release/npm",
        "@semantic-release/github"
    ]
}

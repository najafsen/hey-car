module.exports = {
  plugins: [
    ["@semantic-release/commit-analyzer", { config: "./commitlint.config.js" }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
  branches: ["master"],
};

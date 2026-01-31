/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "header-max-length": [2, "always", 100],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
    ],
    "scope-empty": [0],
    "subject-empty": [2, "never"],
    "subject-case": [0],
  },

  prompt: {
    useEmoji: false,
    scopes: [],
    allowEmptyScopes: true,

    types: [
      { value: "feat", name: "feat: new feature" },
      { value: "fix", name: "fix: bug fix" },
      { value: "docs", name: "docs: documentation" },
      { value: "refactor", name: "refactor: code change" },
      { value: "perf", name: "perf: performance" },
      { value: "test", name: "test: tests" },
      { value: "chore", name: "chore: maintenance" },
      { value: "build", name: "build: build system" },
      { value: "ci", name: "ci: CI config" },
      { value: "revert", name: "revert: revert commit" }
    ],

    messages: {
      type: "Select commit type:",
      subject: "Write commit message:"
    },

    skipQuestions: [
      "scope",
      "body",
      "breaking",
      "footerPrefixSelect",
      "customFooterPrefix",
      "footer",
      "confirmCommit",
      "issues"
    ],
  },
}

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feature",
        "hotfix",
        "bugfix",
        "foo",
        "build",
        "chore",
        "ci",
        "cleanup",
        "docs",
        "feat",
        "fix",
        "followup",
        "improve",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "unfeat",
        "formatted",
        "setup",
        "merge",
        "version",
        "deleted",
        "modified",
        "info"
      ]
    ]
  }
};
const when = (condition, value, fallback) => (condition ? value : fallback);

module.exports = ({
  name,
  description,
  username,
  email,
}) => {
  return {
    name,
    version: "0.0.0",
    description,
    main: "src/index.js",
    files: "src",
    keywords: [],
    scripts: {
      build: "",
      lint: "eslint src/** --fix",
      test: "",
      commit: "git-cz",
      changelog: "conventional-changelog -i CHANGELOG.md -s -r 0",
      release: "release-it --no-git.requireCleanWorkingDir",
      prepublishOnly: ""
    },
    repository: {
      url: `${username}/${name}`,
      type: "git"
    },
    author: `${username}<${email}>`,
    license: "MIT",
    dependencies: {
      "cookie-parser": "~1.4.4",
      express: "~4.16.1",
      "http-errors": "~1.6.3",
      jade: "~1.11.0",
      "jwt-simple": "^0.5.6",
      morgan: "~1.9.1",
      mysql: "^2.17.1",
    },
    devDependencies: {
      debug: "~2.6.9",
      commitizen: "^3.0.5",
      "conventional-changelog-cli": "^2.0.11",
      "cz-emoji": "^1.1.2",
      eslint: "^5.11.1",
      "eslint-config-prettier": "^3.3.0",
      "eslint-plugin-prettier": "^3.0.1",
      husky: "^1.3.1",
      "lint-staged": "^8.1.0",
      prettier: "^1.15.3"
    },
    husky: {
      hooks: {
        "pre-commit": ""
      }
    }
  };
};

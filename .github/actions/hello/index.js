const core = require("@actions/core");
const github = require("@actions/github");

// before committing changes in here, run:
// npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist
try {
  throw new Error("some error message");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, 2));
} catch (error) {
  core.setFailed("");
}

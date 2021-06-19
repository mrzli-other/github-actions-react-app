const core = require("@actions/core");
const github = require("@actions/github");

// before committing changes in here, run:
// npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist
try {
  // throw new Error("some error message");

  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  core.setSecret(name); // whenever we log a string such as one specified here, it will be masked in the logs (like a password)
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging github"); // make the logged text collapsible in logs (for example when we log something long, or something usually not useful)
  console.log(JSON.stringify(github, null, 2));
  core.endGroup();

  core.exportVariable("HELLO", "hello"); // set environment variables which we can use in subsequent steps in a job
} catch (error) {
  core.setFailed(error.message);
}

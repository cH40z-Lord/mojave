#!/usr/bin/env node

const browserstackRunner = require("browserstack-runner");
const path = require("path");
const process = require("process");

let config = null;
let configPath = process.env.BROWSERSTACK_JSON || "browserstack.json";
configPath = path.resolve(path.relative(process.cwd(), configPath));

console.log(`BrowserStack config: ${configPath}`);

try
{
    config = require(configPath);
}
catch (e)
{
    if (e.code === "MODULE_NOT_FOUND")
    {
        console.error("Configuration file `browserstack.json` is missing.");

        throw new Error("Configuration file `browserstack.json` is missing.");
    }
    else
    {
        console.error("Invalid configuration in `browserstack.json` file");
        console.error(e.message);
        console.error(e.stack);

        throw new Error("Invalid configuration in `browserstack.json` file");
    }
}

const envUser = process.env.CI_BROWSERSTACK_USER;
if (envUser)
{
    config.username = envUser;
}

const envAccessKey = process.env.CI_BROWSERSTACK_ACCESS_KEY;
if (envAccessKey)
{
    config.key = envAccessKey;
}

browserstackRunner.run(config, (error, report) =>
{
    if (error)
    {
        console.log("Error: " + error);
        return;
    }

    console.log(JSON.stringify(report, null, 2));
    console.log("Test Finished");
});

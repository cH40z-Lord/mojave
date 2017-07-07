#!/usr/bin/env node

const browserstackRunner = require("browserstack-runner");
const process = require("process");

const config = require('../browserstack.json');

const envUser = process.env.BROWSERSTACK_USER;
if (envUser)
{
    config.username = envUser;
}

const envAccessKey = process.env.BROWSERSTACK_ACCESS_KEY;
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

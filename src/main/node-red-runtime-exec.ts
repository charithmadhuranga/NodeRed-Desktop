const path = require('path');

function isNpmCommand(command: string, args: string[]): boolean {
    if (command.includes('npm')) return true;
    if (args && args.length > 0) {
        if (args[0].includes('npm-cli.js') || args[0].includes(path.sep + 'npm' + path.sep)) return true;
    }
    return false;
}

function ensureSpawnEnv(options: any): any {
    const opts = Object.assign({}, options);
    const env = Object.assign({}, process.env, (options && options.env) || {});
    env.ELECTRON_RUN_AS_NODE = "1";
    opts.env = env;
    return opts;
}

const util = require("@node-red/util");
const origRun = util.exec.run.bind(util.exec);
util.exec.run = function(command: string, args: string[], options: any, emit: boolean): Promise<execResult> {
    if (isNpmCommand(command, args)) {
        options = ensureSpawnEnv(options);
    }
    return origRun(command, args, options, emit);
};

export default { run: util.exec.run };

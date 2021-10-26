import { ExampleExecutableKurtosisModuleConfigurator } from "./impl/example_executable_kurtosis_module_configurator";
import * as log from "loglevel";
import { KurtosisModuleConfigurator, KurtosisModuleExecutor } from "kurtosis-module-api-lib";

const SUCCESS_EXIT_CODE: number = 0;
const FAILURE_EXIT_CODE: number = 1;

// >>>>>>>>>>>>>>>>>>> REPLACE WITH YOUR OWN CONFIGURATOR <<<<<<<<<<<<<<<<<<<<<<<<
const configurator: KurtosisModuleConfigurator = new ExampleExecutableKurtosisModuleConfigurator();
// >>>>>>>>>>>>>>>>>>> REPLACE WITH YOUR OWN CONFIGURATOR <<<<<<<<<<<<<<<<<<<<<<<<

const executor: KurtosisModuleExecutor = new KurtosisModuleExecutor(configurator)
executor.run().then(runModuleResult => {
    let exitCode: number = SUCCESS_EXIT_CODE;
    if (runModuleResult.isErr()) {
        console.log("A non-exception error occurred running the Kurtosis module executor:");
        console.log(runModuleResult.error);
        exitCode = FAILURE_EXIT_CODE;
    }
    process.exit(exitCode);
}).catch(reason => {
    console.log("An uncaught exception occurred running the Kurtosis module executor:");
    console.log(reason);
    process.exit(FAILURE_EXIT_CODE);
});

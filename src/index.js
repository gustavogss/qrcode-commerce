import prompt from "prompt"
import {mainPrompt} from './prompts/prompt-main.js'
import chalk from "chalk"

async function main() {
  prompt.get(mainPrompt, async function(_err, result) {
    if (result.select == 1) console.log(chalk.green("Escolheu o qrCODE"))
    if (result.select == 2) console.log(chalk.green("Escolheu o password"))
  })
  prompt.start()
}

main();
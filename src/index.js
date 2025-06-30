import prompt from "prompt"
import chalk from "chalk"
import {mainPrompt} from './prompts/prompt-main.js'
import { createQRCode } from "./services/qr-code/create.js"

async function main() {
  prompt.get(mainPrompt, async function(_err, result) {
    if (result.select == 1) await createQRCode()
    if (result.select == 2) console.log(chalk.green("Escolheu o password"))
  })
  prompt.start()
}

main();
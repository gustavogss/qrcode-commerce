import prompt from "prompt"
import {mainPrompt} from './prompts/prompt-main.js'

async function main() {
  prompt.get(mainPrompt, async function(_err, result) {
    if (result.select == 1) console.log("Escolheu o qrCODE")
    if (result.select == 2) console.log("Escolheu o password")
  })
  prompt.start()
}

main();
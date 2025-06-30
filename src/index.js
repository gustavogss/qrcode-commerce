import prompt from "prompt"
import {shemaMain} from './prompts-schema/schema-main.js'
import { createQRCode } from "./services/qr-code/create.js"
import {createPassword} from './services/password/create.js'

async function main() {
  prompt.get(shemaMain, async function(err, result) {
    if(err) console.log(`Deu erro: ${err}`);    
    if (result.select == 1) await createQRCode()
    if (result.select == 2) await createPassword()
  })
  prompt.start()
}

main();
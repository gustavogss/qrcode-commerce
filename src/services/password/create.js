import chalk from "chalk";
import { handle } from "./handle.js";

export async function createPassword() {
  console.log(chalk.green("password"))  

  const password = await handle()
  console.log(password);
  
}
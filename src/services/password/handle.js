
async function permitedCharacters() {
  let permited = []

  if(process.env.UPPERCASE_LETTERS === "true")
    permited.push(..."ABCDEFGHIJLMNOPQRSTUVXZ")
  
  if(process.env.LOWERCASE_LETTERS === "true")
    permited.push(..."abcdefghijlmnopqrstuvxz")
  
  if(process.env.NUMBERS === "true")
    permited.push(..."0123456789")
  
  if(process.env.SPECIAL_CHARACTERS === "true")
    permited.push(..."*&@#$%?!_-")

  return permited
}

export async function handle() {  
  let characters = []
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH
  characters = await permitedCharacters()
  
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }
  return password
}
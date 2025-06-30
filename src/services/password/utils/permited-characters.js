export async function permitedCharacters() {
  const charMap = {
    UPPERCASE_LETTERS: "ABCDEFGHIJLMNOPQRSTUVXZ",
    LOWERCASE_LETTERS: "abcdefghijlmnopqrstuvxz",
    NUMBERS: "0123456789",
    SPECIAL_CHARACTERS: "*&@#$%?!_-"
  };

  const permited = [];

  Object.entries(charMap).forEach(([key, chars]) => {
    if (process.env[key] === "true") {
      permited.push(...chars);
    }
  });

  return permited;
}

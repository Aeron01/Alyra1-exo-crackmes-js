// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@hh!hhhhhhhhhh'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') { // longeur du mot de passe (14 caractères), le 1er caractère doit etre "@"" et le 3ème un "!"
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)
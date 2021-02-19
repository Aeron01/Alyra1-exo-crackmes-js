// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'a'
/* ici la donné password attendue  correspont à la longeur de ce dernier, quelques soit ce qui est entrer :
exemple : si vous metez à la ligne 3 let password = 'entrer', la donnée "entrer" à une longeur de 6 et
le programe attend une longeur de 1, donc sa réponse sera "BAD"*/
const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)
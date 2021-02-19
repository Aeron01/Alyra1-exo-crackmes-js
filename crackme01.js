// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'password1234'

const crackme1 = (password) => {
  if (password === 'password1234') { // C'est ici qu'il fait la comparaison entre le mot de passe et la réponse donnée (la donnée "password"). si elle ne sont pas exacte, ca retourne un "BAD"
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme1(password)
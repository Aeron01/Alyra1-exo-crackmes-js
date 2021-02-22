let password = ''

const crackme11 = (password) => {
  if (password = password.toUpperCase(), password.length === 26 && password.startsWith('VADOR')) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme11(password)

// c'est un facile
const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question(`Enter Username: `, function(name){
      console.log(`Welcome, ${name}`)
    
      reader.question(`Enter password: `, function(password){
          if (password.length >= 10){
              console.log(`Correct, accessing your onlyfanz account now!`)
            } else if(password.length < 10){
                console.log(`Incorrect, try again`)
            }
        }
        )
}
)
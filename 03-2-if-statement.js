let validEmail = true
let validPassword = false

if(validEmail && validPassword){
    console.log("logged in")
} else if (validEmail || validPassword){
    console.log("is correct")
}
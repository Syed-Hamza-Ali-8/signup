userSignup = prompt("Welocme to signup", "Type yes to continue")
userArray = []
if (userSignup) {
    userName = prompt("Enter your username :")
    userArray.push(userName)
    alert("Your name is added !")
}
console.log(userArray)
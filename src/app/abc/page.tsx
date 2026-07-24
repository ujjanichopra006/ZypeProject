const users = await user.find()
.sort({ createsAt-1})
console.log(users); 

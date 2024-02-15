const mongoose=require('mongoose')
const connectionString=process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("mongodb atlas connected with rserver");
}).catch((reason)=>{
    console.log(reason);
    console.log("mongodb connection failed");
})


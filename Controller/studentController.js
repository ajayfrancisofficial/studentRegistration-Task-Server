const students=require('../Models/studentModel')

//register
exports.register=async(req,res)=>{
    console.log("inside register API");
    const {firstName,lastName,address,email,gender,mobile,password,DOB,course}=req.body
    // console.log(firstName,lastName,address,email,gender,mobile,password,DOB,course);
    try{
        const newStudent=new students({
            firstName,lastName,address,email,gender,mobile,password,DOB,course
        })
        await newStudent.save()
        res.status(200).json(newStudent)
        console.log(newStudent);

    }catch(err){
        res.status(401).json(err)
    }
}

//get student details
exports.getAllStudentDetails=async(req,res)=>{
    console.log("inside get all student details API");
    try{
        const allStudentDetails=await students.find()
        console.log(allStudentDetails);
        res.status(200).json(allStudentDetails)

    }catch(err){
        res.status(401).json(err)
    }
}
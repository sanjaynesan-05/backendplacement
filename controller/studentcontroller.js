const addstudent = require("../schema/addstudent");

const addStudent = async (req, res) => {
    try {
        const { studentname, rollno, email_id, student_number, DOB } = req.body;
        const student = new addstudent({
            studentname,
            rollno,
            email_id,
            student_number,
            DOB
        });
        await Student.save();
        res.status(201).json({ 
            success: true,
            message: "Student added successfully" ,
            data: student
        });
    }catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Failed to add student",
            error: error.message,
        });
    }
}

module.exports = { addStudent };
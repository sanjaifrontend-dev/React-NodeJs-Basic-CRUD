import connection from "../config/dbConfig.js";

export const getAllUsers = (req,res)=>{
    connection.query("SELECT * FROM users", function (err, result) {
        if (err) throw err;
        res.status(200).send({status:true,message:"Fetched succesfully!",data:result});
    });
}

export const getSingleUser =(req,res)=>{
    const userId=req.params.id;
    connection.query(`SELECT * FROM users where id=${userId}`, function (err, result) {
        if (err) throw err;
        res.status(200).send({status:true,message:"Single User Fetched succesfully!",data:result});
    });
}

export const createUser = (req, res) => {
  
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
  
    connection.query('INSERT INTO users (first_name, last_name, email, mobile) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, mobile],
      function (err, result) {
        if (err) {
          console.error('Error inserting user:', err);
          res.status(500).send({ 
            status: false, 
            message: 'Error inserting user' });
          return;
        }
        res.status(200).send({
          status: true,
          message: 'User inserted successfully!',
          data: result,
        });
      });
  }
  
  export const updateUser = (req,res)=>{
    const userId=req.params.id;
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;

    connection.query('UPDATE users SET first_name=?, last_name=?, email=?, mobile=? WHERE id = ?',
    [first_name, last_name, email, mobile, userId],
    (err, result) => {
        if (err) {
            console.error('Error when Updating User:', err);
            res.status(500).send({
                status: false, 
                message: 'Error while Updating User'
            });
            return;
        }
        res.status(200).send({
            status: true,
            message: 'User Updated Successfully!',
            data: result
        });
    });
}

export const deleteUser = (req,res)=>{
    const userId=req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
            console.log('Error while deleting:', err);
            res.status(500).send({
                status: false,
                message: 'Error while Deleting'
            });
            return;
        }
        res.status(200).send({
            status: true,
            message: 'User Deleted Successfully!',
            data: result
        });
    });
}
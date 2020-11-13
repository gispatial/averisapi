'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//System_User object constructor
var System_User = function(req,system_user){
    
this.system_user_id = 0;
this.system_user_name = system_user.system_user_name;
this.system_user_type = system_user.system_user_type;
this.first_name = system_user.first_name;
this.middle_name = system_user.middle_name;
this.last_name = system_user.last_name;
this.created_by = system_user.created_by;
this.creation_date = system_user.creation_date;
this.last_updated_by = system_user.last_updated_by;
this.last_update_date = system_user.last_update_date;
};
System_User.create = function (req,newSystem_User, result) {    
        sql.query("INSERT INTO system_user set ?",newSystem_User, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
System_User.getById = function (req,id, result) {
        sql.query("Select * from system_user where system_user_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
System_User.getAll = function (req,result) {
        sql.query("Select * from system_user", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('system_user : ', res);  

                 result(null, res);
                }
            });   
};
System_User.updateById = function(req,id, system_user, result){
  sql.query("UPDATE system_user SET system_user_name = ?,system_user_type = ?,first_name = ?,middle_name = ?,last_name = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE system_user_id= ?",[ system_user.system_user_name, system_user.system_user_type, system_user.first_name, system_user.middle_name, system_user.last_name, system_user.created_by, system_user.creation_date, system_user.last_updated_by, system_user.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
System_User.remove = function(req,id, result){
     sql.query("DELETE FROM system_user WHERE system_user_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= System_User;

'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//System_User_Type object constructor
var System_User_Type = function(req,system_user_type){
    
this.system_user_type_id = 0;
this.system_user_type = system_user_type.system_user_type;
this.created_by = system_user_type.created_by;
this.creation_date = system_user_type.creation_date;
this.last_updated_by = system_user_type.last_updated_by;
this.last_update_date = system_user_type.last_update_date;
};
System_User_Type.create = function (req,newSystem_User_Type, result) {    
        sql.query("INSERT INTO system_user_type set ?",newSystem_User_Type, function (err, res) {
                
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
System_User_Type.getById = function (req,id, result) {
        sql.query("Select * from system_user_type where system_user_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
System_User_Type.getAll = function (req,result) {
        sql.query("Select * from system_user_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('system_user_type : ', res);  

                 result(null, res);
                }
            });   
};
System_User_Type.updateById = function(req,id, system_user_type, result){
  sql.query("UPDATE system_user_type SET system_user_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE system_user_type_id= ?",[ system_user_type.system_user_type, system_user_type.created_by, system_user_type.creation_date, system_user_type.last_updated_by, system_user_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
System_User_Type.remove = function(req,id, result){
     sql.query("DELETE FROM system_user_type WHERE system_user_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= System_User_Type;

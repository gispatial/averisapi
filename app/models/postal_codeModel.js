'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Postal_Code object constructor
var Postal_Code = function(req,postal_code){
    
this.postal_code_id = 0;
this.postal_code = postal_code.postal_code;
this.created_by = postal_code.created_by;
this.creation_date = postal_code.creation_date;
this.last_updated_by = postal_code.last_updated_by;
this.last_update_date = postal_code.last_update_date;
};
Postal_Code.create = function (req,newPostal_Code, result) {    
        sql.query("INSERT INTO postal_code set ?",newPostal_Code, function (err, res) {
                
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
Postal_Code.getById = function (req,id, result) {
        sql.query("Select * from postal_code where postal_code_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Postal_Code.getAll = function (req,result) {
        sql.query("Select * from postal_code", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('postal_code : ', res);  

                 result(null, res);
                }
            });   
};
Postal_Code.updateById = function(req,id, postal_code, result){
  sql.query("UPDATE postal_code SET postal_code = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE postal_code_id= ?",[ postal_code.postal_code, postal_code.created_by, postal_code.creation_date, postal_code.last_updated_by, postal_code.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Postal_Code.remove = function(req,id, result){
     sql.query("DELETE FROM postal_code WHERE postal_code_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Postal_Code;

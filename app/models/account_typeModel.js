'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Account_Type object constructor
var Account_Type = function(req,account_type){
    
this.account_type_id = 0;
this.account_type = account_type.account_type;
this.created_by = account_type.created_by;
this.creation_date = account_type.creation_date;
this.last_updated_by = account_type.last_updated_by;
this.last_update_date = account_type.last_update_date;
};
Account_Type.create = function (req,newAccount_Type, result) {    
        sql.query("INSERT INTO account_type set ?",newAccount_Type, function (err, res) {
                
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
Account_Type.getById = function (req,id, result) {
        sql.query("Select * from account_type where account_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Account_Type.getAll = function (req,result) {
        sql.query("Select * from account_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account_type : ', res);  

                 result(null, res);
                }
            });   
};
Account_Type.updateById = function(req,id, account_type, result){
  sql.query("UPDATE account_type SET account_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE account_type_id= ?",[ account_type.account_type, account_type.created_by, account_type.creation_date, account_type.last_updated_by, account_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Account_Type.remove = function(req,id, result){
     sql.query("DELETE FROM account_type WHERE account_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Account_Type;

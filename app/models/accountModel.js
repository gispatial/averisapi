'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Account object constructor
var Account = function(req,account){
    
this.account_id = 0;
this.account_type = account.account_type;
this.account_number = account.account_number;
this.password = account.password;
this.created_by = account.created_by;
this.creation_date = account.creation_date;
this.last_updated_by = account.last_updated_by;
this.last_update_date = account.last_update_date;
};
Account.create = function (req,newAccount, result) {    
        sql.query("INSERT INTO account set ?",newAccount, function (err, res) {
                
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
Account.getById = function (req,id, result) {
        sql.query("Select * from account where account_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Account.getAll = function (req,result) {
        sql.query("Select * from account", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account : ', res);  

                 result(null, res);
                }
            });   
};
Account.updateById = function(req,id, account, result){
  sql.query("UPDATE account SET account_type = ?,account_number = ?,password = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE account_id= ?",[ account.account_type, account.account_number, account.password, account.created_by, account.creation_date, account.last_updated_by, account.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Account.remove = function(req,id, result){
     sql.query("DELETE FROM account WHERE account_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Account;

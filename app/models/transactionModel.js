'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction object constructor
var Transaction = function(req,transaction){
    
this.transaction_id = 0;
this.account_id = transaction.account_id;
this.transaction_type = transaction.transaction_type;
this.transaction_date = transaction.transaction_date;
this.amount = transaction.amount;
this.created_by = transaction.created_by;
this.creation_date = transaction.creation_date;
this.last_updated_by = transaction.last_updated_by;
this.last_update_date = transaction.last_update_date;
};
Transaction.create = function (req,newTransaction, result) {    
        sql.query("INSERT INTO transaction set ?",newTransaction, function (err, res) {
                
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
Transaction.getById = function (req,id, result) {
        sql.query("Select * from transaction where transaction_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction.getAll = function (req,result) {
        sql.query("Select * from transaction", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction : ', res);  

                 result(null, res);
                }
            });   
};
Transaction.updateById = function(req,id, transaction, result){
  sql.query("UPDATE transaction SET account_id = ?,transaction_type = ?,transaction_date = ?,amount = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_id= ?",[ transaction.account_id, transaction.transaction_type, transaction.transaction_date, transaction.amount, transaction.created_by, transaction.creation_date, transaction.last_updated_by, transaction.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction.remove = function(req,id, result){
     sql.query("DELETE FROM transaction WHERE transaction_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction;

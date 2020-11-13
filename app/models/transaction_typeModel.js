'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction_Type object constructor
var Transaction_Type = function(req,transaction_type){
    
this.transaction_type_id = 0;
this.transaction_type = transaction_type.transaction_type;
this.created_by = transaction_type.created_by;
this.creation_date = transaction_type.creation_date;
this.last_updated_by = transaction_type.last_updated_by;
this.last_update_date = transaction_type.last_update_date;
};
Transaction_Type.create = function (req,newTransaction_Type, result) {    
        sql.query("INSERT INTO transaction_type set ?",newTransaction_Type, function (err, res) {
                
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
Transaction_Type.getById = function (req,id, result) {
        sql.query("Select * from transaction_type where transaction_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction_Type.getAll = function (req,result) {
        sql.query("Select * from transaction_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_type : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Type.updateById = function(req,id, transaction_type, result){
  sql.query("UPDATE transaction_type SET transaction_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_type_id= ?",[ transaction_type.transaction_type, transaction_type.created_by, transaction_type.creation_date, transaction_type.last_updated_by, transaction_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction_Type.remove = function(req,id, result){
     sql.query("DELETE FROM transaction_type WHERE transaction_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction_Type;

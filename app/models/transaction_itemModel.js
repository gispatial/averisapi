'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction_Item object constructor
var Transaction_Item = function(req,transaction_item){
    
this.transaction_item_id = 0;
this.transaction_id = transaction_item.transaction_id;
this.item_id = transaction_item.item_id;
this.created_by = transaction_item.created_by;
this.creation_date = transaction_item.creation_date;
this.last_updated_by = transaction_item.last_updated_by;
this.last_update_date = transaction_item.last_update_date;
};
Transaction_Item.create = function (req,newTransaction_Item, result) {    
        sql.query("INSERT INTO transaction_item set ?",newTransaction_Item, function (err, res) {
                
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
Transaction_Item.getById = function (req,id, result) {
        sql.query("Select * from transaction_item where transaction_item_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction_Item.getAll = function (req,result) {
        sql.query("Select * from transaction_item", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_item : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Item.updateById = function(req,id, transaction_item, result){
  sql.query("UPDATE transaction_item SET transaction_id = ?,item_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_item_id= ?",[ transaction_item.transaction_id, transaction_item.item_id, transaction_item.created_by, transaction_item.creation_date, transaction_item.last_updated_by, transaction_item.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction_Item.remove = function(req,id, result){
     sql.query("DELETE FROM transaction_item WHERE transaction_item_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction_Item;

'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Price object constructor
var Price = function(req,price){
    
this.price_id = 0;
this.item_id = price.item_id;
this.price_type = price.price_type;
this.active_flag = price.active_flag;
this.start_date = price.start_date;
this.end_date = price.end_date;
this.amount = price.amount;
this.created_by = price.created_by;
this.creation_date = price.creation_date;
this.last_updated_by = price.last_updated_by;
this.last_update_date = price.last_update_date;
};
Price.create = function (req,newPrice, result) {    
        sql.query("INSERT INTO price set ?",newPrice, function (err, res) {
                
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
Price.getById = function (req,id, result) {
        sql.query("Select * from price where price_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Price.getAll = function (req,result) {
        sql.query("Select * from price", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('price : ', res);  

                 result(null, res);
                }
            });   
};
Price.updateById = function(req,id, price, result){
  sql.query("UPDATE price SET item_id = ?,price_type = ?,active_flag = ?,start_date = ?,end_date = ?,amount = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE price_id= ?",[ price.item_id, price.price_type, price.active_flag, price.start_date, price.end_date, price.amount, price.created_by, price.creation_date, price.last_updated_by, price.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Price.remove = function(req,id, result){
     sql.query("DELETE FROM price WHERE price_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Price;

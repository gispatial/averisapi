'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Price_Type object constructor
var Price_Type = function(req,price_type){
    
this.price_type_id = 0;
this.price_type = price_type.price_type;
this.created_by = price_type.created_by;
this.creation_date = price_type.creation_date;
this.last_updated_by = price_type.last_updated_by;
this.last_update_date = price_type.last_update_date;
};
Price_Type.create = function (req,newPrice_Type, result) {    
        sql.query("INSERT INTO price_type set ?",newPrice_Type, function (err, res) {
                
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
Price_Type.getById = function (req,id, result) {
        sql.query("Select * from price_type where price_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Price_Type.getAll = function (req,result) {
        sql.query("Select * from price_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('price_type : ', res);  

                 result(null, res);
                }
            });   
};
Price_Type.updateById = function(req,id, price_type, result){
  sql.query("UPDATE price_type SET price_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE price_type_id= ?",[ price_type.price_type, price_type.created_by, price_type.creation_date, price_type.last_updated_by, price_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Price_Type.remove = function(req,id, result){
     sql.query("DELETE FROM price_type WHERE price_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Price_Type;

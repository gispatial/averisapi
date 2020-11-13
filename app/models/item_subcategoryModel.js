'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Item_Subcategory object constructor
var Item_Subcategory = function(req,item_subcategory){
    
this.item_subcategory_id = 0;
this.category_id = item_subcategory.category_id;
this.item_subcategory = item_subcategory.item_subcategory;
this.created_by = item_subcategory.created_by;
this.creation_date = item_subcategory.creation_date;
this.last_updated_by = item_subcategory.last_updated_by;
this.last_update_date = item_subcategory.last_update_date;
};
Item_Subcategory.create = function (req,newItem_Subcategory, result) {    
        sql.query("INSERT INTO item_subcategory set ?",newItem_Subcategory, function (err, res) {
                
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
Item_Subcategory.getById = function (req,id, result) {
        sql.query("Select * from item_subcategory where item_subcategory_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Item_Subcategory.getAll = function (req,result) {
        sql.query("Select * from item_subcategory", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item_subcategory : ', res);  

                 result(null, res);
                }
            });   
};
Item_Subcategory.updateById = function(req,id, item_subcategory, result){
  sql.query("UPDATE item_subcategory SET category_id = ?,item_subcategory = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE item_subcategory_id= ?",[ item_subcategory.category_id, item_subcategory.item_subcategory, item_subcategory.created_by, item_subcategory.creation_date, item_subcategory.last_updated_by, item_subcategory.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Item_Subcategory.remove = function(req,id, result){
     sql.query("DELETE FROM item_subcategory WHERE item_subcategory_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Item_Subcategory;

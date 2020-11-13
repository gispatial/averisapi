'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Item_Category object constructor
var Item_Category = function(req,item_category){
    
this.item_category_id = 0;
this.item_category = item_category.item_category;
this.created_by = item_category.created_by;
this.creation_date = item_category.creation_date;
this.last_updated_by = item_category.last_updated_by;
this.last_update_date = item_category.last_update_date;
};
Item_Category.create = function (req,newItem_Category, result) {    
        sql.query("INSERT INTO item_category set ?",newItem_Category, function (err, res) {
                
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
Item_Category.getById = function (req,id, result) {
        sql.query("Select * from item_category where item_category_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Item_Category.getAll = function (req,result) {
        sql.query("Select * from item_category", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item_category : ', res);  

                 result(null, res);
                }
            });   
};
Item_Category.updateById = function(req,id, item_category, result){
  sql.query("UPDATE item_category SET item_category = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE item_category_id= ?",[ item_category.item_category, item_category.created_by, item_category.creation_date, item_category.last_updated_by, item_category.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Item_Category.remove = function(req,id, result){
     sql.query("DELETE FROM item_category WHERE item_category_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Item_Category;

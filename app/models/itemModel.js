'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Item object constructor
var Item = function(req,item){
    
this.item_id = 0;
this.item_title = item.item_title;
this.item_subtitle = item.item_subtitle;
this.item_category_id = item.item_category_id;
this.item_subcategory_id = item.item_subcategory_id;
this.created_by = item.created_by;
this.creation_date = item.creation_date;
this.last_updated_by = item.last_updated_by;
this.last_update_date = item.last_update_date;
};
Item.create = function (req,newItem, result) {    
        sql.query("INSERT INTO item set ?",newItem, function (err, res) {
                
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
Item.getById = function (req,id, result) {
        sql.query("Select * from item where item_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Item.getAll = function (req,result) {
        sql.query("Select * from item", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item : ', res);  

                 result(null, res);
                }
            });   
};
Item.updateById = function(req,id, item, result){
  sql.query("UPDATE item SET item_title = ?,item_subtitle = ?,item_category_id = ?,item_subcategory_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE item_id= ?",[ item.item_title, item.item_subtitle, item.item_category_id, item.item_subcategory_id, item.created_by, item.creation_date, item.last_updated_by, item.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Item.remove = function(req,id, result){
     sql.query("DELETE FROM item WHERE item_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Item;

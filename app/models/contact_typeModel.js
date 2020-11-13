'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Contact_Type object constructor
var Contact_Type = function(req,contact_type){
    
this.contact_type_id = 0;
this.contact_type = contact_type.contact_type;
this.created_by = contact_type.created_by;
this.creation_date = contact_type.creation_date;
this.last_updated_by = contact_type.last_updated_by;
this.last_update_date = contact_type.last_update_date;
};
Contact_Type.create = function (req,newContact_Type, result) {    
        sql.query("INSERT INTO contact_type set ?",newContact_Type, function (err, res) {
                
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
Contact_Type.getById = function (req,id, result) {
        sql.query("Select * from contact_type where contact_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact_Type.getAll = function (req,result) {
        sql.query("Select * from contact_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact_type : ', res);  

                 result(null, res);
                }
            });   
};
Contact_Type.updateById = function(req,id, contact_type, result){
  sql.query("UPDATE contact_type SET contact_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE contact_type_id= ?",[ contact_type.contact_type, contact_type.created_by, contact_type.creation_date, contact_type.last_updated_by, contact_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact_Type.remove = function(req,id, result){
     sql.query("DELETE FROM contact_type WHERE contact_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Contact_Type;

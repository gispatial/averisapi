'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Contact object constructor
var Contact = function(req,contact){
    
this.contact_id = 0;
this.account_id = contact.account_id;
this.contact_type = contact.contact_type;
this.email = contact.email;
this.first_name = contact.first_name;
this.middle_name = contact.middle_name;
this.last_name = contact.last_name;
this.created_by = contact.created_by;
this.creation_date = contact.creation_date;
this.last_updated_by = contact.last_updated_by;
this.last_update_date = contact.last_update_date;
};
Contact.create = function (req,newContact, result) {    
        sql.query("INSERT INTO contact set ?",newContact, function (err, res) {
                
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
Contact.getById = function (req,id, result) {
        sql.query("Select * from contact where contact_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact.getAll = function (req,result) {
        sql.query("Select * from contact", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact : ', res);  

                 result(null, res);
                }
            });   
};
Contact.updateById = function(req,id, contact, result){
  sql.query("UPDATE contact SET account_id = ?,contact_type = ?,email = ?,first_name = ?,middle_name = ?,last_name = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE contact_id= ?",[ contact.account_id, contact.contact_type, contact.email, contact.first_name, contact.middle_name, contact.last_name, contact.created_by, contact.creation_date, contact.last_updated_by, contact.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact.remove = function(req,id, result){
     sql.query("DELETE FROM contact WHERE contact_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Contact;

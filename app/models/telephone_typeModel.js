'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Telephone_Type object constructor
var Telephone_Type = function(req,telephone_type){
    
this.telephone_type_id = 0;
this.telephone_type = telephone_type.telephone_type;
this.created_by = telephone_type.created_by;
this.creation_date = telephone_type.creation_date;
this.last_updated_by = telephone_type.last_updated_by;
this.last_update_date = telephone_type.last_update_date;
};
Telephone_Type.create = function (req,newTelephone_Type, result) {    
        sql.query("INSERT INTO telephone_type set ?",newTelephone_Type, function (err, res) {
                
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
Telephone_Type.getById = function (req,id, result) {
        sql.query("Select * from telephone_type where telephone_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Telephone_Type.getAll = function (req,result) {
        sql.query("Select * from telephone_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone_type : ', res);  

                 result(null, res);
                }
            });   
};
Telephone_Type.updateById = function(req,id, telephone_type, result){
  sql.query("UPDATE telephone_type SET telephone_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE telephone_type_id= ?",[ telephone_type.telephone_type, telephone_type.created_by, telephone_type.creation_date, telephone_type.last_updated_by, telephone_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Telephone_Type.remove = function(req,id, result){
     sql.query("DELETE FROM telephone_type WHERE telephone_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Telephone_Type;

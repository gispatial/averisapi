'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Address_Type object constructor
var Address_Type = function(req,address_type){
    
this.address_type_id = 0;
this.address_type = address_type.address_type;
this.created_by = address_type.created_by;
this.creation_date = address_type.creation_date;
this.last_updated_by = address_type.last_updated_by;
this.last_update_date = address_type.last_update_date;
};
Address_Type.create = function (req,newAddress_Type, result) {    
        sql.query("INSERT INTO address_type set ?",newAddress_Type, function (err, res) {
                
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
Address_Type.getById = function (req,id, result) {
        sql.query("Select * from address_type where address_type_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Address_Type.getAll = function (req,result) {
        sql.query("Select * from address_type", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('address_type : ', res);  

                 result(null, res);
                }
            });   
};
Address_Type.updateById = function(req,id, address_type, result){
  sql.query("UPDATE address_type SET address_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE address_type_id= ?",[ address_type.address_type, address_type.created_by, address_type.creation_date, address_type.last_updated_by, address_type.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Address_Type.remove = function(req,id, result){
     sql.query("DELETE FROM address_type WHERE address_type_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Address_Type;

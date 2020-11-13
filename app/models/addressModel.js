'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Address object constructor
var Address = function(req,address){
    
this.address_id = 0;
this.address_type = address.address_type;
this.account_id = address.account_id;
this.street_address = address.street_address;
this.city_state_id = address.city_state_id;
this.postal_code_id = address.postal_code_id;
this.created_by = address.created_by;
this.creation_date = address.creation_date;
this.last_updated_by = address.last_updated_by;
this.last_update_date = address.last_update_date;
};
Address.create = function (req,newAddress, result) {    
        sql.query("INSERT INTO address set ?",newAddress, function (err, res) {
                
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
Address.getById = function (req,id, result) {
        sql.query("Select * from address where address_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Address.getAll = function (req,result) {
        sql.query("Select * from address", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('address : ', res);  

                 result(null, res);
                }
            });   
};
Address.updateById = function(req,id, address, result){
  sql.query("UPDATE address SET address_type = ?,account_id = ?,street_address = ?,city_state_id = ?,postal_code_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE address_id= ?",[ address.address_type, address.account_id, address.street_address, address.city_state_id, address.postal_code_id, address.created_by, address.creation_date, address.last_updated_by, address.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Address.remove = function(req,id, result){
     sql.query("DELETE FROM address WHERE address_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Address;

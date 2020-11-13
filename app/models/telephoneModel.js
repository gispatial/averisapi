'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Telephone object constructor
var Telephone = function(req,telephone){
    
this.telephone_id = 0;
this.contact_id = telephone.contact_id;
this.area_code = telephone.area_code;
this.telephone_number = telephone.telephone_number;
this.telephone_type = telephone.telephone_type;
this.created_by = telephone.created_by;
this.creation_date = telephone.creation_date;
this.last_updated_by = telephone.last_updated_by;
this.last_update_date = telephone.last_update_date;
};
Telephone.create = function (req,newTelephone, result) {    
        sql.query("INSERT INTO telephone set ?",newTelephone, function (err, res) {
                
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
Telephone.getById = function (req,id, result) {
        sql.query("Select * from telephone where telephone_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Telephone.getAll = function (req,result) {
        sql.query("Select * from telephone", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone : ', res);  

                 result(null, res);
                }
            });   
};
Telephone.updateById = function(req,id, telephone, result){
  sql.query("UPDATE telephone SET contact_id = ?,area_code = ?,telephone_number = ?,telephone_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE telephone_id= ?",[ telephone.contact_id, telephone.area_code, telephone.telephone_number, telephone.telephone_type, telephone.created_by, telephone.creation_date, telephone.last_updated_by, telephone.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Telephone.remove = function(req,id, result){
     sql.query("DELETE FROM telephone WHERE telephone_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Telephone;

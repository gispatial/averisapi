'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//City object constructor
var City = function(req,city){
    
this.city_id = 0;
this.city = city.city;
this.created_by = city.created_by;
this.creation_date = city.creation_date;
this.last_updated_by = city.last_updated_by;
this.last_update_date = city.last_update_date;
};
City.create = function (req,newCity, result) {    
        sql.query("INSERT INTO city set ?",newCity, function (err, res) {
                
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
City.getById = function (req,id, result) {
        sql.query("Select * from city where city_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
City.getAll = function (req,result) {
        sql.query("Select * from city", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('city : ', res);  

                 result(null, res);
                }
            });   
};
City.updateById = function(req,id, city, result){
  sql.query("UPDATE city SET city = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE city_id= ?",[ city.city, city.created_by, city.creation_date, city.last_updated_by, city.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
City.remove = function(req,id, result){
     sql.query("DELETE FROM city WHERE city_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= City;

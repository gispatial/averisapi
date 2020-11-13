'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//City_State object constructor
var City_State = function(req,city_state){
    
this.city_state_id = 0;
this.city_id = city_state.city_id;
this.state_id = city_state.state_id;
this.created_by = city_state.created_by;
this.creation_date = city_state.creation_date;
this.last_updated_by = city_state.last_updated_by;
this.last_update_date = city_state.last_update_date;
};
City_State.create = function (req,newCity_State, result) {    
        sql.query("INSERT INTO city_state set ?",newCity_State, function (err, res) {
                
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
City_State.getById = function (req,id, result) {
        sql.query("Select * from city_state where city_state_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
City_State.getAll = function (req,result) {
        sql.query("Select * from city_state", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('city_state : ', res);  

                 result(null, res);
                }
            });   
};
City_State.updateById = function(req,id, city_state, result){
  sql.query("UPDATE city_state SET city_id = ?,state_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE city_state_id= ?",[ city_state.city_id, city_state.state_id, city_state.created_by, city_state.creation_date, city_state.last_updated_by, city_state.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
City_State.remove = function(req,id, result){
     sql.query("DELETE FROM city_state WHERE city_state_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= City_State;

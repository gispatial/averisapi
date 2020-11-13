'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//State object constructor
var State = function(req,state){
    
this.state_id = 0;
this.state = state.state;
this.created_by = state.created_by;
this.creation_date = state.creation_date;
this.last_updated_by = state.last_updated_by;
this.last_update_date = state.last_update_date;
};
State.create = function (req,newState, result) {    
        sql.query("INSERT INTO state set ?",newState, function (err, res) {
                
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
State.getById = function (req,id, result) {
        sql.query("Select * from state where state_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
State.getAll = function (req,result) {
        sql.query("Select * from state", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('state : ', res);  

                 result(null, res);
                }
            });   
};
State.updateById = function(req,id, state, result){
  sql.query("UPDATE state SET state = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE state_id= ?",[ state.state, state.created_by, state.creation_date, state.last_updated_by, state.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
State.remove = function(req,id, result){
     sql.query("DELETE FROM state WHERE state_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= State;

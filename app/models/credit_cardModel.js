'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Credit_Card object constructor
var Credit_Card = function(req,credit_card){
    
this.credit_card_id = 0;
this.account_id = credit_card.account_id;
this.credit_card_number = credit_card.credit_card_number;
this.credit_card_type = credit_card.credit_card_type;
this.expiration_date = credit_card.expiration_date;
this.cvv = credit_card.cvv;
this.created_by = credit_card.created_by;
this.creation_date = credit_card.creation_date;
this.last_updated_by = credit_card.last_updated_by;
this.last_update_date = credit_card.last_update_date;
};
Credit_Card.create = function (req,newCredit_Card, result) {    
        sql.query("INSERT INTO credit_card set ?",newCredit_Card, function (err, res) {
                
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
Credit_Card.getById = function (req,id, result) {
        sql.query("Select * from credit_card where credit_card_id= ?", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Credit_Card.getAll = function (req,result) {
        sql.query("Select * from credit_card", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credit_card : ', res);  

                 result(null, res);
                }
            });   
};
Credit_Card.updateById = function(req,id, credit_card, result){
  sql.query("UPDATE credit_card SET account_id = ?,credit_card_number = ?,credit_card_type = ?,expiration_date = ?,cvv = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE credit_card_id= ?",[ credit_card.account_id, credit_card.credit_card_number, credit_card.credit_card_type, credit_card.expiration_date, credit_card.cvv, credit_card.created_by, credit_card.creation_date, credit_card.last_updated_by, credit_card.last_update_date, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Credit_Card.remove = function(req,id, result){
     sql.query("DELETE FROM credit_card WHERE credit_card_id= ?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Credit_Card;

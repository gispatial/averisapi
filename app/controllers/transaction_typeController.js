'use strict';
var helper = require('../models/helper.js');
var Transaction_Type = require('../models/transaction_typeModel.js');

exports.listAll = function(req, res) {
	helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
  Transaction_Type.getAll(req,function(err, transaction_type) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",transaction_type));
	}

    
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};



exports.createNew = function(req, res) {
helper.checkPermission(req,"a",function (isPermited) {
        if(isPermited){
  var reqObj = new Transaction_Type(req,req.body);
   if(!reqObj.transaction_type || !reqObj.created_by || !reqObj.creation_date || !reqObj.last_updated_by || !reqObj.last_update_date){

            res.status(400).send({ error:true, message: 'Please provide required fields' });

        }
else{
  
  Transaction_Type.create(req,reqObj, function(err, transaction_type) {
    
	  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Created",transaction_type));
	}
  });
}
} else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.readById = function(req, res) {
helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
  Transaction_Type.getById(req,req.params.id, function(err, transaction_type) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",transaction_type));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.updateById = function(req, res) {
helper.checkPermission(req,"u",function (isPermited) {
        if(isPermited){
  Transaction_Type.updateById(req,req.params.id, new Transaction_Type(req,req.body), function(err, transaction_type) {
     if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Updated",transaction_type));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.deleteById = function(req, res) {
helper.checkPermission(req,"d",function (isPermited) {
        if(isPermited){
  Transaction_Type.remove(req,req.params.id, function(err, transaction_type) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Deleted",""));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};

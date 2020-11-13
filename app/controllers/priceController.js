'use strict';
var helper = require('../models/helper.js');
var Price = require('../models/priceModel.js');

exports.listAll = function(req, res) {
	helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
  Price.getAll(req,function(err, price) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",price));
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
  var reqObj = new Price(req,req.body);
   if(!reqObj.item_id || !reqObj.active_flag || !reqObj.start_date || !reqObj.amount || !reqObj.created_by || !reqObj.creation_date || !reqObj.last_updated_by || !reqObj.last_update_date){

            res.status(400).send({ error:true, message: 'Please provide required fields' });

        }
else{
  
  Price.create(req,reqObj, function(err, price) {
    
	  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Created",price));
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
  Price.getById(req,req.params.id, function(err, price) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",price));
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
  Price.updateById(req,req.params.id, new Price(req,req.body), function(err, price) {
     if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Updated",price));
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
  Price.remove(req,req.params.id, function(err, price) {
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

'use strict';
var helper = require('../models/helper.js');
var Item_Category = require('../models/item_categoryModel.js');

exports.listAll = function(req, res) {
	helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
  Item_Category.getAll(req,function(err, item_category) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",item_category));
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
  var reqObj = new Item_Category(req,req.body);
   if(!reqObj.item_category || !reqObj.created_by || !reqObj.creation_date || !reqObj.last_updated_by || !reqObj.last_update_date){

            res.status(400).send({ error:true, message: 'Please provide required fields' });

        }
else{
  
  Item_Category.create(req,reqObj, function(err, item_category) {
    
	  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Created",item_category));
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
  Item_Category.getById(req,req.params.id, function(err, item_category) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",item_category));
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
  Item_Category.updateById(req,req.params.id, new Item_Category(req,req.body), function(err, item_category) {
     if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Updated",item_category));
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
  Item_Category.remove(req,req.params.id, function(err, item_category) {
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

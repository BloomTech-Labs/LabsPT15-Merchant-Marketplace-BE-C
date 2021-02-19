const express = require('express');
const Model = require('../globalModel');
const authRequired = require('../middleware/authRequired');

const helper = require('../helper');
const router = express.Router();

router.get('/:id', authRequired, async (req, res) => {
    const seller_profileID = req.params.id;
    const response = await Model.getFavList(seller_profileID);
    try {
      if (response) {
        res.status(200).json(response);
        console.log(seller_profileID)
      } else {
        helper.notFound('items', res);
      }
    } catch {
      helper.dbError(res);
    }
  });

  module.exports = router;
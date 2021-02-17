/* eslint-disable prettier/prettier */
const express = require('express');
const Model = require('../globalModel');
const authRequired = require('../middleware/authRequired');

const helper = require('../helper');
const router = express.Router();

router.get('/:id', authRequired, async (req, res) => {
    const seller_profileID  = req.params.id;
    const response = await Model.getShoppingCart(seller_profileID);
    try {
      if (response) {
        res.status(200).json(response);
        console.log(req.params.id)
      } else {
        helper.notFound('seller', res);
      }
    } catch {
      helper.dbError(res);
    }
  });

  module.exports = router;
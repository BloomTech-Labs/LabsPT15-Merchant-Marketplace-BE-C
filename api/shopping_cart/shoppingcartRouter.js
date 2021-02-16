const express = require('express');
const Model = require('../globalModel');

const helper = require('../helper');
const router = express.Router();

router.get('/:id/shopping_cart', async (req, res) => {
    const { itemID } = req.params;
    const response = await Model.getShoppingCart('item', itemID);
    try {
      if (response) {
        res.status(200).json(response);
      } else {
        helper.notFound('items', res);
      }
    } catch {
      helper.dbError(res);
    }
  });

  module.exports = router;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_cart').insert([
        {item_id: 1, 
        // quantity_available: 4,
        // price_in_cents: 3400000,
        seller_profile_id: "00ulthapbErVUwVJy4x6",
        photo_id: 1
      },
      {item_id: 2, 
        // quantity_available: 40,
        // price_in_cents: 500,
        seller_profile_id: "00ulthapbErVUwVJy4x6",
        photo_id: 3
      },
    ]);
};

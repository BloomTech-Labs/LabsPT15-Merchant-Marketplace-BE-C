
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_cart').insert([
        {item_id: 1, 
        seller_profile_id: "00ulthapbErVUwVJy4x6",
        photo_id: 1
      },
      {item_id: 2, 
        seller_profile_id: "00ulthapbErVUwVJy4x6",
        photo_id: 3
      },
    ]);
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_lists').insert([
        {list_name: "fav feet",
        item_id: 12, 
        seller_profile_id: "00ultx74kMUmEW8054x6",
        photo_id: 23
      },
      {list_name: "fav cancer",
        item_id: 13, 
        seller_profile_id: "00ultx74kMUmEW8054x6",
        photo_id: 25
      },
    ]);
};


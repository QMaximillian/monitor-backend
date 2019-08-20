
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex("roles").insert([
        {
          id: "01429739-0f14-4acc-a71a-72812c16a971",
          role: "MONITOR",
          user_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "d2af0c29-b344-407d-9cb4-2e7af3f95a10",
          role: "ACTOR",
          user_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "6aae714f-1e44-4c99-a301-2be71a4fbced", //BEBE
          role: "ACTOR",
          user_id: "21aa361f-af3b-4a1e-8f02-81ad1f89d073"
        },
        {
          id: "da852ad9-3510-49e8-bc96-da13ed27af13", //MARLOWE
          role: "ACTOR",
          user_id: "68b42c26-ffd0-4f6a-96c1-5a7bc5a5e599"
        }
      ]);
    });
};

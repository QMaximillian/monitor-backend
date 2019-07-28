
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auditions').del()
    .then(function () {
      // Inserts seed entries
      return knex("auditions").insert([
        {
          id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
          date: "2019-07-28",
          begin_time: "2019-07-28T08:00:00+0000",
          end_time: "2019-07-28T16:00:00+0000",
          interval: 30,
          street_num: 155,
          street_address: "1st Avenue",
          city: "New York ",
          state: "NY",
          zip_code: "10003"
        },
        {
          id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          date: "2019-07-29",
          begin_time: "2019-07-29T08:00:00+0000",
          end_time: "2019-07-29T16:00:00+0000",
          interval: 30,
          street_num: 155,
          street_address: "1st Avenue",
          city: "New York ",
          state: "NY",
          zip_code: "10003"
        }
      ]);
    });
};

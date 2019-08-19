
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { id: 'dac02f2c-0bb5-4996-a711-5197164884ff', instruction: 'Please arrive at 12am', audition_id: 'b82a1fa0-928a-42a4-979e-3a692065d31b' },
        { id: '974c2165-6fae-44f1-b160-76d72404468a',  instruction: 'Do not let actors use the bathroom on the first floor', audition_id:  'b82a1fa0-928a-42a4-979e-3a692065d31b'},
        { id: 'd189b6cf-9d54-4f53-a9a6-9a3cf30029c6', instruction: 'Practice rooms are available on the 4th floor', audition_id: 'b82a1fa0-928a-42a4-979e-3a692065d31b' }
      ]);
    });
};

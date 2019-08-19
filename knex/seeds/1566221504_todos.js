
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: "094ea5e5-8383-484f-9092-03a4de4bd473",
          task: "go to place",
          completed: false,
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1"
        },
        {
          id: 'b285fa8d-822a-413b-bd8b-277ca3905011',
          task: "do thing",
          completed: false,
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1"
        },
        {
          id: '92905400-74d2-45ed-a790-3294e414975b',
          task: "eat food",
          completed: true,
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1"
        }
      ]);
    });
};

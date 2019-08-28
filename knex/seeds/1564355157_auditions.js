
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auditions').del()
    .then(function () {
      // Inserts seed entries
      return knex("auditions").insert([
        {
          id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
          date: "2019-07-28",
          show_name: "Mita the Magnificent",
          begin_time: "2019-07-28T08:00:00+0000",
          end_time: "2019-07-28T16:00:00+0000",
          interval: 30,
          street_num: 155,
          street_address: "1st Avenue",
          city: "New York ",
          state: "NY",
          zip_code: "10003",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          date: "2019-08-28",
          show_name: "Mary Poppins",
          begin_time: "2019-07-29T08:00:00+0000",
          end_time: "2019-07-29T16:00:00+0000",
          interval: 30,
          street_num: 155,
          street_address: "1st Avenue",
          city: "New York ",
          state: "NY",
          zip_code: "10003",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "5aad8756-32f3-4953-8778-5ed3bec62ddf",
          date: "2020-03-17",
          show_name: "The Crucible",
          begin_time: "2020-03-17T10:00:00+0000",
          end_time: "2020-03-17T17:00:00+0000",
          interval: 15,
          street_num: 17698,
          street_address: "Hovde Crossing",
          city: "Connecticut",
          state: "CT",
          zip_code: "06001",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "e797bc3a-3d30-435b-b7da-aaaf33051f9e",
          date: "2020-01-20",
          show_name: "August: Osage County",
          begin_time: "2020-01-20T10:00:00+0000",
          end_time: "2020-01-20T17:00:00+0000",
          interval: 30,
          street_num: 87,
          street_address: "Mockingbird Center",
          city: "Philadelphia",
          state: "PA",
          zip_code: "19019",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "eea93fc9-856c-4fcb-9d6d-d9fbf9aa03a7",
          date: "2020-03-03",
          show_name: "Tartuffe",
          begin_time: "2020-03-03T11:00:00+0000",
          end_time: "2020-03-03T13:00:00+0000",
          interval: 30,
          street_num: 56,
          street_address: "Dexter Court",
          city: "New York",
          state: "NY",
          zip_code: "11225",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "a9db10ce-1bc0-42d8-9eb8-b9a58d3aba82",
          date: "2020-03-10",
          show_name: "All My Sons",
          begin_time: "2020-03-10T11:00:00+0000",
          end_time: "2020-03-10T13:00:00+0000",
          interval: 30,
          street_num: 67,
          street_address: "Orchard Drive",
          city: "New York",
          state: "NY",
          zip_code: "11225",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "18d8cc5c-0cb8-4aff-bca0-906b541514d4",
          date: "2019-02-08",
          show_name: "Urinetown",
          begin_time: "2020-02-08T11:00:00+0000",
          end_time: "2020-02-08T18:00:00+0000",
          interval: 30,
          street_num: 257,
          street_address: "Carpenter Trail",
          city: "New York",
          state: "NY",
          zip_code: "11233",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "39997e7d-3f40-4053-a6e4-9ec7ebbd52e5",
          date: "2020-05-23",
          show_name: "Uncle Vanya",
          begin_time: "2020-05-23T07:00:00+0000",
          end_time: "2020-05-23T12:00:00+0000",
          interval: 30,
          street_num: 195,
          street_address: "Moose Court",
          city: "Delaware",
          state: "DE",
          zip_code: "43015",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },

        {
          id: "954fead2-acb6-4915-bf8a-fec7cec44994",
          date: "2020-12-27",
          show_name: "The Liar",
          begin_time: "2020-12-27T10:00:00+0000",
          end_time: "2020-12-27T15:00:00+0000",
          interval: 30,
          street_num: 9,
          street_address: "Harper Crossing",
          city: "New York",
          state: "NY",
          zip_code: "11235",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        },
        {
          id: "b82a1fa0-928a-42a4-979e-3a692065d31b",
          date: "2019-09-29",
          show_name: "Death of a Salesman",
          begin_time: "2019-09-29T08:00:00+0000",
          end_time: "2019-09-29T15:00:00+0000",
          interval: 15,
          street_num: 191,
          street_address: "Rusk Crossing",
          city: "New York",
          state: "NY",
          zip_code: "12210",
          monitor_id: "51215840-b68f-4a4f-95f4-42aa5fde630f"
        }
      ]);
    });
};

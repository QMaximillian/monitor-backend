
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('appointments').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex("appointments").insert([
//         {
//           id: "c74f09dd-346f-41eb-a695-8a1c6aaf9ec7",
//           time: "2019-07-28T08:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "c086fdad-c2df-46c5-8e76-4a268bc947ba"
//         },
//         {
//           id: "db834136-3ebe-405f-b456-2895d73abd62",
//           time: "2019-07-28T08:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "6777d736-9366-466a-9cdf-2824e6145b64"
//         },
//         {
//           id: "081e062d-3238-4820-92e9-78a227add08a",
//           time: "2019-07-28T09:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "0e2097e8-663d-4db1-9e93-bc12f33dbcd6"
//         },
//         {
//           id: "179f6d49-8716-403d-9a00-f0b5c55698f4",
//           time: "2019-07-28T09:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "afb935f3-68ab-450d-8e7f-d331d773b405"
//         },
//         {
//           id: "e0a6befa-4c0d-421d-add9-3282e1db7d1f",
//           time: "2019-07-28T10:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "8b4e7226-d774-46b0-9c9d-456d5e5746c3"
//         },
//         {
//           id: "979d3b2c-66fb-4597-839f-1bb5efbe4496",
//           time: "2019-07-28T10:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "6dd88f58-50bd-4cf2-8bdd-24362c7defde"
//         },
//         {
//           id: "873c807b-460f-4904-8c00-997dddb544d5",
//           time: "2019-07-28T11:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "6890f989-81d0-4dfd-9445-65069d1964a6"
//         },
//         {
//           id: "f0f75039-09fe-4a75-bfdc-1d2b8ebfd3f4",
//           time: "2019-07-28T11:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "2c809b29-7f8f-4669-a80e-2bbc80820757"
//         },
//         {
//           id: "9af97743-884f-4b82-ac11-aef3b204bc23",
//           time: "2019-07-28T12:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "64eaefd5-b0d1-44e7-8abb-d6e194f21df0"
//         },
//         {
//           id: "b0845edd-8b9d-49c2-97da-ece37b39b419",
//           time: "2019-07-28T12:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "f97aefe3-d18e-404c-a21a-918ce985758e"
//         },
//         {
//           id: "8aef5767-a797-41d7-a7f1-98d8a95fc7fa",
//           time: "2019-07-28T13:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "485a6117-8ab3-4be8-85da-2e7ed5a26b1d"
//         },
//         {
//           id: "93009b83-6cac-4bc3-a281-358c04639785",
//           time: "2019-07-28T13:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "f2c4a201-73f5-42e8-8ba4-d0abc00f2b64"
//         },
//         {
//           id: "1b049d55-e785-4ee3-86f5-41c025a9c212",
//           time: "2019-07-28T14:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "36546426-29e5-41f9-8bd1-73a057051f3f"
//         },
//         {
//           id: "881cdcc6-8c6d-410d-9eca-1c640c84d3d1",
//           time: "2019-07-28T14:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "c4c0a217-20ca-496d-ae94-4d26ba6ecab5"
//         },
//         {
//           id: "6bb31516-4a1a-4dd9-a306-ce4f7bf6ae0a",
//           time: "2019-07-28T15:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "e50466fb-7b6d-4a70-881e-d2542bd6e74e"
//         },
//         {
//           id: "06d5d25a-8df0-4f73-b753-59c4e50cddee",
//           time: "2019-07-28T15:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "1ec32c99-37c5-4b1f-8fde-b6b7cb6ca2cf"
//         },
//         {
//           id: "d3fbcdfc-e383-4413-810c-79b08b0e6a77",
//           time: "2019-07-28T16:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "9b019e3a-4cf3-4e1e-8834-2dee7f9b5a50"
//         },
//         {
//           id: "3e04bc89-a3c4-4566-ba1b-c10cf9dd6c14",
//           time: "2019-07-28T16:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "e8fa4f62-95b6-4b4c-b5f2-276f94c03ced"
//         },
//         {
//           id: "4b07ec34-37c0-4bae-b69c-982fedb00813",
//           time: "2019-07-28T17:00:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "0e64ecfb-3fc2-4afd-8ac9-caea94f06625"
//         },
//         {
//           id: "d31913541-e917-4955-9580-b5c7da13d706",
//           time: "2019-07-28T17:30:00+0000",
//           audition_id: "8873c4bc-9a0a-4164-a439-e54ad0eb8b12",
//           user_id: "4467d4fd-ae92-427c-a8e9-9cf1f859678f"
//         }
//       ]);
//     });
// };



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          id: "dd10008a-40c0-4be7-b71b-b507180d60bf",
          time: "2019-08-29T16:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "0e2097e8-663d-4db1-9e93-bc12f33dbcd6"
        },
        {
          id: "08ac0418-3844-458e-b7e3-03af2f7b9030",
          time: "2019-08-29T16:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "0e64ecfb-3fc2-4afd-8ac9-caea94f06625"
        },
        {
          id: "3a70e980-a68d-4c67-bfb4-ce0f1e63580a",
          time: "2019-08-29T17:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "1ec32c99-37c5-4b1f-8fde-b6b7cb6ca2cf"
        },
        {
          id: "e7e2eba7-9b00-4ea3-8ca4-8d5cf1c26ed5",
          time: "2019-08-29T17:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "21aa361f-af3b-4a1e-8f02-81ad1f89d073"
        },
        {
          id: "0010e411-44d4-4c65-8d82-54673fb74a60",
          time: "2019-08-29T18:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "2c809b29-7f8f-4669-a80e-2bbc80820757"
        },
        {
          id: "9dfbef4d-53ef-4626-933b-c6205f581b71",
          time: "2019-08-29T18:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "36546426-29e5-41f9-8bd1-73a057051f3f"
        },
        {
          id: "92158b0e-1143-4787-9bd7-cb2ddff780b7",
          time: "2019-08-29T19:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "485a6117-8ab3-4be8-85da-2e7ed5a26b1d"
        },
        {
          id: "a1330816-6b54-4976-8089-a7bcf8c10290",
          time: "2019-08-29T19:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "4d56907c-9cff-4056-8636-d40dff382f4b"
        },
        {
          id: "adaac257-06e1-4481-8876-d563b27847d5",
          time: "2019-08-29T20:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "53ddf522-f32d-49f2-80e0-def86d6b25a2"
        },
        {
          id: "81040643-0bc9-46f5-9562-afb6af54828e",
          time: "2019-08-29T20:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "5eb78847-364d-4af3-8f18-fba63b9bdddf"
        },
        {
          id: "8f3bb8b9-9498-48aa-a183-b298e05b739a",
          time: "2019-08-29T21:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "64eaefd5-b0d1-44e7-8abb-d6e194f21df0"
        },
        {
          id: "f380ddd3-9973-4e65-9a38-a6167452a946",
          time: "2019-08-29T21:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "6777d736-9366-466a-9cdf-2824e6145b64"
        },
        {
          id: "4791d4f9-8b4e-4721-9379-2f110a43d5f4",
          time: "2019-08-29T22:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "6890f989-81d0-4dfd-9445-65069d1964a6"
        },
        {
          id: "bc15e15e-2991-43a3-bd8a-7c4fc54b0243",
          time: "2019-08-29T22:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "68b42c26-ffd0-4f6a-96c1-5a7bc5a5e599"
        },
        {
          id: "1f9c6d63-0fc6-4209-9157-fbaed26a951e",
          time: "2019-08-29T23:00:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "6dd88f58-50bd-4cf2-8bdd-24362c7defde"
        },
        {
          id: "f88bec9f-defe-49d4-84f7-5b5266500b92",
          time: "2019-08-29T23:30:00Z",
          audition_id: "f4d06d8d-f943-4346-936a-441adbb1a8b1",
          user_id: "75235e84-2312-40d9-95f3-60d3fb8f352b"
        }
      ]);
    });
};


// USED

// { id: 'dd10008a-40c0-4be7-b71b-b507180d60bf', time: '2019-07-29T8:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '0e2097e8-663d-4db1-9e93-bc12f33dbcd6'},
// { id: '08ac0418-3844-458e-b7e3-03af2f7b9030', time: '2019-07-29T8:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '0e64ecfb-3fc2-4afd-8ac9-caea94f06625'},
// { id: '3a70e980-a68d-4c67-bfb4-ce0f1e63580a', time: '2019-07-29T9:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '1ec32c99-37c5-4b1f-8fde-b6b7cb6ca2cf'},
// { id: 'e7e2eba7-9b00-4ea3-8ca4-8d5cf1c26ed5', time: '2019-07-29T9:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '21aa361f-af3b-4a1e-8f02-81ad1f89d073'},
// { id: '0010e411-44d4-4c65-8d82-54673fb74a60', time: '2019-07-29T10:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '2c809b29-7f8f-4669-a80e-2bbc80820757'},
// { id: '9dfbef4d-53ef-4626-933b-c6205f581b71', time: '2019-07-29T10:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '36546426-29e5-41f9-8bd1-73a057051f3f'},
// { id: '92158b0e-1143-4787-9bd7-cb2ddff780b7', time: '2019-07-29T11:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '485a6117-8ab3-4be8-85da-2e7ed5a26b1d'},
// { id: 'a1330816-6b54-4976-8089-a7bcf8c10290', time: '2019-07-29T11:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '4d56907c-9cff-4056-8636-d40dff382f4b'},
// { id: 'adaac257-06e1-4481-8876-d563b27847d5', time: '2019-07-29T12:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '53ddf522-f32d-49f2-80e0-def86d6b25a2'},
// { id: '81040643-0bc9-46f5-9562-afb6af54828e', time: '2019-07-29T12:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '5eb78847-364d-4af3-8f18-fba63b9bdddf'},
// { id: '8f3bb8b9-9498-48aa-a183-b298e05b739a', time: '2019-07-29T13:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '64eaefd5-b0d1-44e7-8abb-d6e194f21df0'},
// { id: 'f380ddd3-9973-4e65-9a38-a6167452a946', time: '2019-07-29T13:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '6777d736-9366-466a-9cdf-2824e6145b64'},
// { id: '4791d4f9-8b4e-4721-9379-2f110a43d5f4', time: '2019-07-29T14:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '6890f989-81d0-4dfd-9445-65069d1964a6'},
// { id: 'bc15e15e-2991-43a3-bd8a-7c4fc54b0243', time: '2019-07-29T14:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '68b42c26-ffd0-4f6a-96c1-5a7bc5a5e599'},
// { id: '1f9c6d63-0fc6-4209-9157-fbaed26a951e', time: '2019-07-29T15:00:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '6dd88f58-50bd-4cf2-8bdd-24362c7defde'},
// { id: 'f88bec9f-defe-49d4-84f7-5b5266500b92', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '75235e84-2312-40d9-95f3-60d3fb8f352b'},



// NOT USED


// { id: '65b6f646-d663-4c80-9c02-2ea379500f9f', time: '2019-07-29T10:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '4467d4fd-ae92-427c-a8e9-9cf1f859678f'},
// { id: '049ff0a2-c5b8-4330-9407-eb869fed0506', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '8b4e7226-d774-46b0-9c9d-456d5e5746c3'},
// { id: '78eb1376-e3b6-4b4c-8d0b-1266a068aaea', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: '9b019e3a-4cf3-4e1e-8834-2dee7f9b5a50'},
// { id: '36c8fc5c-51f6-47e0-bb62-cd7a3491c0a9', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'a8a7e3bc-8503-46fe-a5ce-f458dd896c0c'},
// { id: '3c59ae52-5952-4a98-82ea-1a74f3f86057', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'ab89bc40-e60c-4b93-acb7-5a9c1960730c'},
// { id: '888bb5c3-4557-401b-a412-c565f24f0e02', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'afb935f3-68ab-450d-8e7f-d331d773b405'},
// { id: '59184681-3e28-4eea-a04e-4c55e0944327', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'c086fdad-c2df-46c5-8e76-4a268bc947ba'},
// { id: '6654d330-5161-4f1e-8710-d4e8462e1dd6', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'c42d1be5-7978-4553-ae03-03af2d7648c4'},
// { id: '47e59225-329d-418a-b3f7-36db98356de9', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'c4c0a217-20ca-496d-ae94-4d26ba6ecab5'},
// { id: '3dfa3137-c373-4453-8ecf-6fa1ed1b5cab', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'd09f0830-1b19-4e47-91ac-73e377df89d2'},
// { id: 'a7c9930c-9ec1-4453-821c-36133667c19f', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'e50466fb-7b6d-4a70-881e-d2542bd6e74e'},
// { id: '0804d7fe-9da8-4fca-9f01-e314778b9bae', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'e8fa4f62-95b6-4b4c-b5f2-276f94c03ced'},
// { id: '822546c2-67ab-4178-a785-a74dda142799', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'f2c4a201-73f5-42e8-8ba4-d0abc00f2b64'},
// { id: '2c56c417-744d-4618-9502-329eec42e1c7', time: '2019-07-29T15:30:00Z', audition_id: 'f4d06d8d-f943-4346-936a-441adbb1a8b1', user_id: 'f97aefe3-d18e-404c-a21a-918ce985758e'},
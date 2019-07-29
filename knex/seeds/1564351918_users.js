// knex seed:make $(date +%s)_table_name
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        
{id: 'c086fdad-c2df-46c5-8e76-4a268bc947ba', first_name: 'Harcourt', last_name: 'Ohlsen', email: 'hohlsen0@drupal.org', gender: 'Male', phone_number: '5169400184', equity: false, age: 20, feet: 4, inches: 8, birthday: "1976-09-26"},
{id: '6777d736-9366-466a-9cdf-2824e6145b64', first_name: 'Conchita', last_name: 'Benoy', email: 'cbenoy1@xrea.com', gender: 'Female', phone_number: '6368693986', equity: false, age: 59, feet: 4, inches: 10, birthday: "1993-08-25"},
{id: '0e2097e8-663d-4db1-9e93-bc12f33dbcd6', first_name: 'Rowen', last_name: 'Stanbury', email: 'rstanbury2@businessweek.com', gender: 'Male', phone_number: '9634236809', equity: false, age: 22, feet: 4, inches: 9, birthday: "1995-04-02"},
{id: 'afb935f3-68ab-450d-8e7f-d331d773b405', first_name: 'Nanni', last_name: 'Bondar', email: 'nbondar3@csmonitor.com', gender: 'Female', phone_number: '4127771375', equity: false, age: 33, feet: 6, inches: 7, birthday: "1985-07-09"},
{id: '8b4e7226-d774-46b0-9c9d-456d5e5746c3', first_name: 'Gena', last_name: 'Meier', email: 'gmeier4@dmoz.org', gender: 'Female', phone_number: '1503597468', equity: true, age: 26, feet: 5, inches: 2, birthday: "2000-05-31"},
{id: '6dd88f58-50bd-4cf2-8bdd-24362c7defde', first_name: 'Munroe', last_name: 'Salzburger', email: 'msalzburger5@ask.com', gender: 'Male', phone_number: '8718051353', equity: true, age: 16, feet: 5, inches: 11, birthday: "1993-02-07"},
{id: '6890f989-81d0-4dfd-9445-65069d1964a6', first_name: 'Myrtie', last_name: 'O\'\'Henery', email: 'mohenery6@telegraph.co.uk', gender: 'Female', phone_number: '7575630583', equity: false, age: 16, feet: 4, inches: 3, birthday: "2000-08-13"},
{id: '2c809b29-7f8f-4669-a80e-2bbc80820757', first_name: 'Mattias', last_name: 'Beven', email: 'mbeven7@edublogs.org', gender: 'Male', phone_number: '2578686256', equity: false, age: 37, feet: 6, inches: 0, birthday: "2003-11-20"},
{id: '64eaefd5-b0d1-44e7-8abb-d6e194f21df0', first_name: 'Darrel', last_name: 'Pletts', email: 'dpletts8@home.pl', gender: 'Male', phone_number: '4716303268', equity: true, age: 34, feet: 4, inches: 10, birthday: "1989-04-28"},
{id: 'f97aefe3-d18e-404c-a21a-918ce985758e', first_name: 'Beverley', last_name: 'Cowitz', email: 'bcowitz9@bbb.org', gender: 'Female', phone_number: '6668476734', equity: true, age: 45, feet: 6, inches: 1, birthday: "1994-02-28"},
{id: '485a6117-8ab3-4be8-85da-2e7ed5a26b1d', first_name: 'Analiese', last_name: 'McUre', email: 'amcurea@drupal.org', gender: 'Female', phone_number: '8508642751', equity: false, age: 27, feet: 6, inches: 2, birthday: "1970-02-05"},
{id: 'f2c4a201-73f5-42e8-8ba4-d0abc00f2b64', first_name: 'Angy', last_name: 'Stow', email: 'astowb@gov.uk', gender: 'Female', phone_number: '3825976105', equity: false, age: 34, feet: 4, inches: 6, birthday: "2003-08-17"},
{id: '36546426-29e5-41f9-8bd1-73a057051f3f', first_name: 'Prentiss', last_name: 'Camier', email: 'pcamierc@tamu.edu', gender: 'Male', phone_number: '1396052043', equity: true, age: 40, feet: 5, inches: 11, birthday: "1986-12-20"},
{id: 'c4c0a217-20ca-496d-ae94-4d26ba6ecab5', first_name: 'Aldon', last_name: 'Hearnah', email: 'ahearnahd@tumblr.com', gender: 'Male', phone_number: '3003539295', equity: false, age: 55, feet: 6, inches: 0, birthday: "1976-10-06"},
{id: 'e50466fb-7b6d-4a70-881e-d2542bd6e74e', first_name: 'Stephi', last_name: 'Foulks', email: 'sfoulkse@harvard.edu', gender: 'Female', phone_number: '3812332765', equity: false, age: 51, feet: 4, inches: 7, birthday: "1979-06-02"},
{id: '1ec32c99-37c5-4b1f-8fde-b6b7cb6ca2cf', first_name: 'Had', last_name: 'Brimilcombe', email: 'hbrimilcombef@youtu.be', gender: 'Male', phone_number: '8025761663', equity: true, age: 39, feet: 6, inches: 10, birthday: "1985-11-27"},
{id: '9b019e3a-4cf3-4e1e-8834-2dee7f9b5a50', first_name: 'Antone', last_name: 'Bramble', email: 'abrambleg@archive.org', gender: 'Male', phone_number: '3647179472', equity: true, age: 49, feet: 6, inches: 10, birthday: "1997-06-08"},
{id: 'e8fa4f62-95b6-4b4c-b5f2-276f94c03ced', first_name: 'Dionis', last_name: 'Landreth', email: 'dlandrethh@ifeng.com', gender: 'Female', phone_number: '9133516136', equity: true, age: 35, feet: 5, inches: 4, birthday: "2003-05-22"},
{id: '0e64ecfb-3fc2-4afd-8ac9-caea94f06625', first_name: 'Killy', last_name: 'McGarvey', email: 'kmcgarveyi@ca.gov', gender: 'Male', phone_number: '9738874666', equity: false, age: 48, feet: 4, inches: 0, birthday: "1972-12-23"},
{id: '4467d4fd-ae92-427c-a8e9-9cf1f859678f', first_name: 'Binny', last_name: 'Fitzer', email: 'bfitzerj@bbc.co.uk', gender: 'Female', phone_number: '8093280260', equity: false, age: 58, feet: 5, inches: 2, birthday: "1987-05-04"},
{id: 'c42d1be5-7978-4553-ae03-03af2d7648c4', first_name: 'Duffie', last_name: 'Geratt', email: 'dgerattk@weebly.com', gender: 'Male', phone_number: '9499304768', equity: true, age: 20, feet: 5, inches: 5, birthday: "1977-08-30"},
{id: 'd09f0830-1b19-4e47-91ac-73e377df89d2', first_name: 'Brana', last_name: 'Tattersfield', email: 'btattersfieldl@chronoengine.com', gender: 'Female', phone_number: '9908028006', equity: true, age: 47, feet: 4, inches: 11, birthday: "1988-11-21"},
{id: '4d56907c-9cff-4056-8636-d40dff382f4b', first_name: 'Jsandye', last_name: 'Barff', email: 'jbarffm@github.com', gender: 'Female', phone_number: '3816062328', equity: false, age: 33, feet: 5, inches: 4, birthday: "2001-10-20"},
{id: 'a8a7e3bc-8503-46fe-a5ce-f458dd896c0c', first_name: 'Cobby', last_name: 'Breckwell', email: 'cbreckwelln@wp.com', gender: 'Male', phone_number: '8373346844', equity: false, age: 21, feet: 4, inches: 11, birthday: "1979-06-08"},
{id: 'ab89bc40-e60c-4b93-acb7-5a9c1960730c', first_name: 'Cassey', last_name: 'Tiesman', email: 'ctiesmano@furl.net', gender: 'Female', phone_number: '4749239007', equity: false, age: 24, feet: 4, inches: 7, birthday: "1980-07-18"},
{id: '53ddf522-f32d-49f2-80e0-def86d6b25a2', first_name: 'Valentin', last_name: 'Harfoot', email: 'vharfootp@plala.or.jp', gender: 'Male', phone_number: '6204987708', equity: false, age: 48, feet: 4, inches: 11, birthday: "2000-05-08"},
{id: '68b42c26-ffd0-4f6a-96c1-5a7bc5a5e599', first_name: 'Marlowe', last_name: 'Cashell', email: 'mcashellq@npr.org', gender: 'Male', phone_number: '5001509597', equity: false, age: 46, feet: 5, inches: 5, birthday: "2002-08-22"},
{id: '75235e84-2312-40d9-95f3-60d3fb8f352b', first_name: 'Margarette', last_name: 'Hagland', email: 'mhaglandr@blogger.com', gender: 'Female', phone_number: '9219927211', equity: true, age: 59, feet: 4, inches: 8, birthday: "1972-08-08"},
{id: '21aa361f-af3b-4a1e-8f02-81ad1f89d073', first_name: 'Bebe', last_name: 'Antwis', email: 'bantwiss@illinois.edu', gender: 'Female', phone_number: '6817033372', equity: false, age: 42, feet: 6, inches: 3, birthday: "1996-12-22"},
{id: '5eb78847-364d-4af3-8f18-fba63b9bdddf', first_name: 'Stanislaus', last_name: 'Bacchus', email: 'sbacchust@cargocollective.com', gender: 'Male', phone_number: '2963846050', equity: true, age: 19, feet: 6, inches: 1, birthday: "1987-08-12"},
{id: '51215840-b68f-4a4f-95f4-42aa5fde630f', first_name: 'Quinn', last_name: 'Lashinsky', email: 'quinnlashinsky@gmail.com', gender: 'Male', phone_number: '9736347866', equity: null, age: 26, feet: 6, inches: 0, birthday: "1992-12-04"}


      ]);
    });
};



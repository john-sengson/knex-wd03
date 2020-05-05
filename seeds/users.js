exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 01, name: 'Jimmi Fallen ', email: 'email@trello.com', phone: 021111111 },
    { id: 02, name: 'Mike Buble', email: 'email2@trello.org' , phone: 021111112},
    { id: 03, name: 'Leonardo Carp', email: 'email@trello.co.nz' , phone: 021111113 },
    { id: 04, name: 'Danny David', email: 'email1@trello.co.org', phone: 021111114 },
    { id: 05, name: 'Tom Ship', email: 'trello@teamil.com', phone: 021111115 },
    { id: 06, name: 'Brad Swamp', email: 'example@trello.co.nz' , phone: 021111116 },
    { id: 07, name: 'Angelina Angry', email: 'trello@example.com' , phone: 021111117 },
    { id: 08, name: 'Mike Jordan', email: 'email@trello.co.ph', phone: 021111311 },
    { id: 09, name: 'Tom Ross', email: 'realbobross@trello.com' , phone: 021111216 },
    { id: 10, name: 'Don Energy', email: 'realDonEnergy@trello.co.nz', phone: 021111110 }
  ])
}
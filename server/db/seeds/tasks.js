exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, name: 'Record song', category: 'Track', timeline: '6' },
        { id: 2, name: 'Get song Mixed', category: 'Track', timeline: '6' },
        { id: 3, name: 'Get song Mastered', category: 'Track', timeline: '6' },
      ])
    })
}

db.movies.createIndex(
  {
    title: 'text',
    plot: 'text',
    fullplot: 'text',
  },
  {
    weights: {
      title: 10,
      plot: 5,
    },
    name: 'EthanTheBoss',
  }
);

//find with text in mongo
db.movies
  .find({ $text: { $search: 'world' } }, { score: { $meta: 'textScore' } })
  .sort({ score: { $meta: 'textScore' } })
  .limit(5)
  .pretty();

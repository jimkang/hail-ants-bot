module.exports = {
  modulePaths: {
    transformHeadlines: './antify-headlines',
    rateHeadlines: './rate-ant-headlines',
    createTopicGetter: './topic-getter'
  },
  usedHeadlinesDbName: 'hail-ants.db',
  headlineSources: require('./filtered-fetch-headlines')
};

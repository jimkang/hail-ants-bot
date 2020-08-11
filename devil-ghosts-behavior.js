module.exports = {
  modulePaths: {
    transformHeadlines: './devil-ghosts/devil-ghostify-headlines',
    rateHeadlines: './devil-ghosts/rate-devil-ghosts-headlines',
    createTopicGetter: './devil-ghosts/devil-ghosts-topic-getter'
  },
  usedHeadlinesDbName: 'devil-ghosts.db',
  headlineSources: require('./filtered-fetch-headlines')
};

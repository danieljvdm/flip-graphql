import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import fetch from 'node-fetch';

import ListingType from './listing';

const BASE_URL = 'https://api-v2.flip.lease/api/v2';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchListings() {
  return fetchResponseByURL('/search/').then(json => json.objects);
}

function fetchListingByURL(relativeURL) {
  return fetchResponseByURL(relativeURL);
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    allListings: {
      type: new GraphQLList(ListingType),
      resolve: fetchListings,
    },
    listing: {
      type: ListingType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => fetchListingByURL(`/search/${args.id}`),
    },
  }),
});


export default new GraphQLSchema({
  query: QueryType,
});

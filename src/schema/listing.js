import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

const ListingType = new GraphQLObjectType({
  name: 'Listing',
  description: 'A listing in the Flip platform',
  fields: () => ({
    areaCode: { type: GraphQLInt },
    bathrooms: { type: GraphQLFloat },
    bedrooms: { type: GraphQLInt },
    bountyInCents: { type: GraphQLInt },
    brokerFee: { type: GraphQLInt },
    city: { type: GraphQLString },
    depositInCents: { type: GraphQLInt },
    depositInDollars: { type: GraphQLInt },
    description: { type: GraphQLString },
    discountRentInCents: { type: GraphQLInt },
    discountRentInDollars: { type: GraphQLInt },
    uuid: { type: GraphQLString },
  }),
});

export default ListingType;

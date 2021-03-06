import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

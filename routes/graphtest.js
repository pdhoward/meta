var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };


const graph = (router) => {    

    router.use(function (req, res, next) {

        graphql(schema, '{ hello }', root).then((response) => {
        console.log(response);
        });

    })
}

modules.export = graph
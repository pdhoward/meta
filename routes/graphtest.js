var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };


const graphtest = (router) => {    

    router.use(function (req, res, next) {

        graphql(schema, '{ hello }', root).then((response) => {
        console.log(response);
        });

        res.json({"msg": "success"})

    })
}

module.exports = graphtest
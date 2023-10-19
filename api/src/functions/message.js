const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        console.log('Tests')
        const name = request.query.get('name') || await request.text() || 'Does not exist';

        return { body: `Hello, Tumii` };
    }
});

// module.exports = async function (context, req) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// };
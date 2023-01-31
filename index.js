import functions from '@google-cloud/functions-framework'

functions.http('helloHttp', (req, res) => {
  res.send('Hello World!');
})

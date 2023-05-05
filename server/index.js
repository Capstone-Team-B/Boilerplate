const port = process.env.PORT || 19006;
const app = require('./app');

app.listen(port, () => console.log(`listening on port ${port}`));
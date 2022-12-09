const app = require('./index');
require('./src/DB/connect-mongo');

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));

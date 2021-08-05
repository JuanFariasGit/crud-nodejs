const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

app.set('port', process.env.PORT);

app.listen(app.get('port'));

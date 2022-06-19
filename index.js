require('dotenv').config();

const app = require('./app');

const main = async () => {
    await app.listen(app.get('port'));
    console.log(`API running on port ${app.get('port')}`);
}

main()
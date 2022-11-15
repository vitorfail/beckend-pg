(async () => {
    const database = require('./db');
    const tabelas = require('./tabelas');
    await database.sync();
})
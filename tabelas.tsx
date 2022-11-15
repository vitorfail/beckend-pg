const database = require('./db')

const Accounts = database.define('Accounts', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    balance:{
        type: Sequelize.DECIMAL,
        allowNull:false,
    },
})
const Users = database.define('Users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    accountId :{
        type: Sequelize.INTEGER,
        model: 'accounts',
        key: 'id' 
    }
})
Accounts.hasMany(Users);
const Transactions = database.define('Transactions', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    debitedAccountId :{
        type: Sequelize.INTEGER,
        model: 'accounts',
        key: 'id'
    },
    creditedAccountId :{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    value:{
        type: Sequelize.DECIMAL,
        allowNull:false,
    },
    createdAt:{
        type: Sequelize.STRING,
        allowNull:false,
    }
})
Accounts.hasMany(Transactions)

module.exports = {
    tabela_user:Users,
    tabela_contas:Accounts,
    tabela_trf: Transactions
}
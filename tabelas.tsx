const database = require('./db.tsx')
const Sequelize1 = require('sequelize')
const Accounts = database.define('Accounts', {
    id:{
        type: Sequelize1.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    balance:{
        type: Sequelize1.DECIMAL,
        allowNull:false,
    },
})
const Users = database.define('Users', {
    id:{
        type: Sequelize1.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type: Sequelize1.STRING,
        allowNull:false,
    },
    password:{
        type: Sequelize1.STRING,
        allowNull:false,
    },
    accountId :{
        type: Sequelize1.INTEGER,
        model: Accounts,
        key: 'id'     
    }
})
Accounts.hasMany(Users);
Users.belongsTo(Accounts)
const Transactions = database.define('Transactions', {
    id:{
        type: Sequelize1.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    debitedAccountId :{
        type: Sequelize1.INTEGER,
        references:{
            model: Accounts,
            key: 'id'     
        }
    },
    creditedAccountId :{
        type: Sequelize1.INTEGER,
        allowNull:false,
    },
    value:{
        type: Sequelize1.DECIMAL,
        allowNull:false,
    },
    createdAt:{
        type: Sequelize1.STRING
    }
})
Accounts.hasMany(Transactions)

module.exports = {
    tabela_user:Users,
    tabela_contas:Accounts,
    tabela_trf: Transactions
}
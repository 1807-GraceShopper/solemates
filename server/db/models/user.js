const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('users', {
	sessionId: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = User

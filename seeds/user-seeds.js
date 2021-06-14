const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'headhmbrgr',
        email: 'owner@hmbrgr.com',
        password: 'password123'
    },
    {
        id: 2,
        username: 'Manager1',
        email: 'manager@hmbrgr.com',
        password: 'password123'
    },
    {
        id: 3,
        username: 'TeamLead',
        email: 'Teamlead@hmbrgr.com',
        password: 'password123'
    },
    {
        id: 4,
        username: 'SocialMedia',
        email: 'socialmedia@hmbrgr.com',
        password: 'password123'
    }
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;



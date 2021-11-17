const { Resource } = require('../models');

const resourceData = [
    {
        name: 'hello',
        description: 'testing',
        link: 'google.com'
    },
    {
        name: 'test 2',
        description: "testing 2",
        link: 'facebook.com'
    },
    {
        name: 'test 3',
        description: 'test 3',
        link: "amazon.com"
    },
    {
        name: 'test 4',
        link: "netflix.com"
    }
]
const seedResource = () => Resource.bulkCreate(resourceData);
module.exports = seedResource;
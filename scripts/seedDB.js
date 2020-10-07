module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkCreate([
            {
                species: "Black Rockfish",
                length: "15",
                dateCaught: new Date(Date.now()),
                locationCaught: "Patrick's Point"
            },
            {
                species: "Black Rockfish",
                length: "12",
                dateCaught: new Date(Date.now()),
                locationCaught: "Patrick's Point"
            },
            {
                species: "Black Rockfish",
                length: "17",
                dateCaught: new Date(Date.now()),
                locationCaught: "Patrick's Point"
            },
            {
                species: "Black Rockfish",
                length: "9",
                dateCaught: new Date(Date.now()),
                locationCaught: "Patrick's Point"
            },
            {
                species: "China Rockfish",
                length: "10",
                dateCaught: new Date(Date.now()),
                locationCaught: "Patrick's Point"
            },
            {
                species: "Blue Rockfish",
                length: "13",
                dateCaught: new Date(Date.now()),
                locationCaught: "Trinidad Pier"
            },
            {
                species: "Gopher Rockfish",
                length: "11",
                dateCaught: new Date(Date.now()),
                locationCaught: "Trinidad Pier"
            },
            {
                species: "Canary Rockfish",
                length: "20",
                dateCaught: new Date(Date.now()),
                locationCaught: "Long Beach"
            },
            {
                species: "Olive Rockfish",
                length: "18",
                dateCaught: new Date(Date.now()),
                locationCaught: "Long Beach"
            },
            {
                species: "Olive Rockfish",
                length: "15",
                dateCaught: new Date(Date.now()),
                locationCaught: "Long Beach"
            },
            {
                species: "Flag Rockfish",
                length: "13",
                dateCaught: new Date(Date.now()),
                locationCaught: "Long Beach"
            },
            {
                species: "Flag Rockfish",
                length: "12",
                dateCaught: new Date(Date.now()),
                locationCaught: "Fisherman's Warf"
            },
            {
                species: "Vermilion Rockfish",
                length: "18",
                dateCaught: new Date(Date.now()),
                locationCaught: "Fisherman's Warf"
            },
            {
                species: "Black Rockfish",
                length: "16",
                dateCaught: new Date(Date.now()),
                locationCaught: "Fisherman's Warf"
            },
            {
                species: "Black Rockfish",
                length: "10",
                dateCaught: new Date(Date.now()),
                locationCaught: "Fisherman's Warf"
            },
            {
                species: "Copper Rockfish",
                length: "11",
                dateCaught: new Date(Date.now()),
                locationCaught: "Fisherman's Warf"
            }
        ], {});
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Creel", [{}])
    }
};

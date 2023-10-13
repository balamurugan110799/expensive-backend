const mongoose = require("mongoose")

const expensiveDB = new mongoose.Schema({
    timestamp: {
        type: Number,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    income: [
        {
            amount: {
                type: Number,
                require: true,
            },
            total_amount: {
                type: Number,
                require: false,
            },
            year: {
                type: Number,
                require: false,
            },
            monthof: {
                type: String,
                require: false,
            },
        }
    ],
    duration: [{
        year: {
            type: Number,
            require: true
        },
        month: {
            type: Number,
            require: true,
        },
        day: {
            type: String,
            require: true,
        },
        hour: {
            type: Number,
            require: true,
        },
        minute: {
            type: Number,
            require: true,
        },
        second: {
            type: Number,
            require: true,
        },
        monthof: {
            type: String,
            require: true,
        },
        localstring: {
            type: String,
            require: true,
        },
        localtimestring: {
            type: String,
            require: true,
        },
        dateString: {
            type: String,
            require: true,
        }
    }],

})

module.exports = mongoose.model("expensiveDB", expensiveDB)
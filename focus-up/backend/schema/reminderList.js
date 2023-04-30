const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
title: {type: String, required: true},
description: {type: String, required: true},
reminderDate: {type: String, required: true},
reminderTime: {type: String, required: true}
})

module.exports = mongoose.model("reminder",reminderSchema)
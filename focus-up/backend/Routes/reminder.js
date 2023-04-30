const express = require("express");
const router = express.Router();

const Remind = require("../schema/reminderList");

router.post("/add", async (req,res) => {
    const reminder = new Remind ({
        title:req.body.title,
        description:req.body.description,
        reminderDate:req.body.reminderDate,
        reminderTime:req.body.reminderTime
    })

    try{
        const newReminder = await reminder.save
    }
    catch{

    }
})

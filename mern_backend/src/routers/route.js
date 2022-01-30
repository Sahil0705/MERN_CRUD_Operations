const express = require("express");

const router = new express.Router();

const userData = require("../models/model.js");

router.get("/",(req,res)=>
{
    res.send("<h2 align='center'><br>Hello</h2>");
});

router.get("/getUser",async(req,res)=>
{
    try
    {
        const getUsers = await userData.find().sort({"ranking":1});
        res.send(getUsers);
        // console.log(getUsers);
        return(getUsers);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/get_user",async(req,res)=>
{
    try
    {
        const _id = req.query._id;
        console.log(_id);
        const getUser = await userData.find({_id});
        console.log(getUser);
        res.send(getUser);
        return(getUser);
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send(err);
    }
});

router.post("/user",async(req,res)=>
{
    try
    {
        const addingUser = new userData(req.body);
        console.log(req.body);
        const insertUser = await addingUser.save();
        res.status(201).send(insertUser);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
})

router.put("/edit_user",async(req,res)=>
{
    try
    {
        const _id = req.query._id;
        console.log("ID"+_id);
        const getUser = await userData.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(getUser);
        res.send(getUser);
        return(getUser);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.delete("/delete_user",async(req,res)=>
{
    try
    {
        // console.log(_id);
        const _id = req.query._id;
        const getUser = await userData.findByIdAndDelete(_id);
        console.log(getUser);
        // res.send(getUser);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});


// router.post("/mens",async(req,res)=>
// {
//     try
//     {
//         const addingMensRecord = new userData(req.body);
//         console.log(req.body);
//         const insertMens = await addingMensRecord.save();
//         res.status(201).send(insertMens);
//     }
//     catch(error)
//     {
//         console.log(error);
//         res.status(400).send(error);
//     }
// });



// router.get("/mens/:_id",async(req,res)=>
// {
//     try
//     {
//         const _id = req.params;
//         const getMen = await userData.find(_id);
//         console.log(getMen);
//         res.send(getMen);
//     }
//     catch(err)
//     {
//         res.status(400).send(err);
//     }
// });

// router.patch("/mens/:_id",async(req,res)=>
// {
//     try
//     {
//         const _id = req.params;
//         const getMen = await userData.findByIdAndUpdate(_id,req.body,{new:true});
//         console.log(getMen);
//         res.send(getMen);
//     }
//     catch(err)
//     {
//         res.status(500).send(err);
//     }
// });



// router.get("/*",(req,res)=>
// {
//     res.render("404_error",
//     {
//         errorMsg:"Oops 😖 !! Page not found ❌"
//     });
// });

// router.get("/mens/*",(req,res)=>
// {
//     res.render("404_error",
//     {
//         errorMsg:"Oops 😖 !! Page not found ❌"
//     });
// });

module.exports = router;
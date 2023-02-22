const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;
const { connection,
    newUsersModel,
    allItemsModel } = require("./db");

app.use(express.json({ limit: '50mb' }))
app.use(cors())


app.get("/", async (req, res) => {
    res.send("Welcome Bhai")
});
// users EndPoint

app.get("/users", async (req, res) => {
    try {
        const data = await newUsersModel.find();
        console.log(data)
        res.send(data);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await newUsersModel.findById(id);
        if (!data) {
            res.status(404).send("Object not found");
        } else {
            res.send(data);
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.post("/users", async (req, res) => {
    const data = req.body;
    try {
        const member = new newUsersModel(data);
        await member.save();
        res.send(data);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.patch("/users/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(id)
    const updatedObject = await newUsersModel.findOneAndUpdate({_id:id}, data);
    res.send(`Object with ID:${id} has been deleted`);
})
app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedObject = await newUsersModel.findByIdAndDelete(id);
        if (!deletedObject) {
            res.status(404).send("Object not found");
        } else {
            res.send(`Object with ID:${id} has been deleted`);
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

//***************************************************************************************************************************** */

// allItems EndPoint

app.get("/allItems", async (req, res) => {
    const query = req.query;
    const data = await allItemsModel.find(query)
    res.send(data)
})
app.get("/allItems/:id", async (req, res) => {
    const id = req.params.id;
    const data = await allItemsModel.findById(id);
    res.send(data);
})
app.post("/allItems", async (req, res) => {
    const data = req.body;
    const testimonials = new allItemsModel(data);
    await testimonials.save()
    res.send(data)
})
app.delete("/allItems/:id", async (req, res) => {
    const id = req.params.id;
    const deletedObject = await allItemsModel.findByIdAndDelete(id);
    res.send(`Object with ID:${id} has been deleted`);
})
app.patch("/allItems/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const updatedObject = await allItemsModel.findOneAndUpdate({_id:id}, data);
    res.send(`Object with ID:${id} has been deleted`);
})

    //***************************************************************************************************************************** */










app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log("Server Started at PORT", port)
})
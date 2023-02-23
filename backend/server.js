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
    const {page,limit} = req.query;
    let temp = await allItemsModel.find()
    let skip=(page-1)*limit
    let data = await allItemsModel.find().skip(skip).limit(limit)
    res.send({data,count:temp.length})
})
app.get("/allItems/filter", async (req, res) => {
    const {category,page,limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find({category:category}).skip(skip).limit(limit)
    let temp = await allItemsModel.find({category:category})
   res.send({data,count:temp.length})
})
app.get("/allItems/sort", async (req, res) => {
    const {sort,page,limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find().sort({price:sort}).skip(skip).limit(limit)
    let temp = await allItemsModel.find().sort({price:sort})
   res.send({data,count:temp.length})
})
app.get("/allItems/range", async (req, res) => {
    const {min,max,page,limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find({price:{$gte:min, $lte:max}}).skip(skip).limit(limit)
    let temp = await allItemsModel.find({price:{$gte:min, $lte:max}})
   res.send({data,count:temp.length})
})

app.get("/allItems/categorySort", async (req,res)=>{
    const {category, sort, page, limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find({category:category}).sort({price:sort}).skip(skip).limit(limit)
    let temp = await allItemsModel.find({category:category}).sort({price:sort})

    res.send({data,count:temp.length})

})
app.get("/allItems/categoryRange", async (req,res)=>{
    const {category, min,max, page, limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find({category:category,price:{$gte:min, $lte:max}}).skip(skip).limit(limit)
    let temp = await allItemsModel.find({category:category,price:{$gte:min, $lte:max}})

    res.send({data,count:temp.length})
})
app.get("/allItems/search", async (req,res)=>{
    const {query, page, limit} = req.query;
    let skip=(page-1)*limit
    let data = await allItemsModel.find({ name: { $regex: query, $options: "i" } }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ name: { $regex: query, $options: "i" } })

    res.send({data,count:temp.length})
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
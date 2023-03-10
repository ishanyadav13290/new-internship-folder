const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;
const { connection,
    newUsersModel,
    newAdminsModel,
    allItemsModel,
    verifyItemsModel } = require("./db");

app.use(express.json({ limit: '50mb' }))
app.use(cors())
const accountSid = 'ACa1c52fac29bd069f21b8f8348dfe50a6';
const authToken = '2bbaf56f15aa921739b1d28ea2255ddb';
const client = require('twilio')(accountSid, authToken);
const Razorpay = require("razorpay");





// Payment Gateway Integration Starts Here

var instance = new Razorpay({
    key_id: 'rzp_test_nSahl5FThvw7uJ',
    key_secret: 'd4p6ON5LLXwJXM8gg9mB93qo'
})

app.post("/create/orderId", async (req, res) => {
    const data = req.body;

    const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: "rcp1"
    }
    console.log(data)
    instance.orders.create(options, (err, order) => {
        console.log(order);
        res.send({
            orderId: order.id
        })
    })
});




















app.get("/", async (req, res) => {
    res.send("Welcome Bhai")
});
// users EndPoint

app.get("/users", async (req, res) => {
    try {
        const data = await newUsersModel.find();
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
app.get("/users", async (req, res) => {
    let isSeller = req.params.isSeller
    try {
        const data = await newUsersModel.find({isSeller:isSeller});
        res.send(data);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }

})

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
    const updatedObject = await newUsersModel.findOneAndUpdate({ _id: id }, data);
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
    const { page, limit } = req.query;
    let temp = await allItemsModel.find()
    let skip = (page - 1) * limit
    let data = await allItemsModel.find().skip(skip).limit(limit)
    res.send({ data, count: temp.length })
})
app.get("/allItems/filter", async (req, res) => {
    const { category, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ category: category }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ category: category })
    res.send({ data, count: temp.length })
})

app.get("/allItems/filterBrand", async (req, res) => {
    const { brand, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ brand: brand }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ brand: brand })
    res.send({ data, count: temp.length })
})
app.get("/allItems/filterCategoryBrand", async (req, res) => {
    const { brand, category, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ brand: brand, category: category }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ brand: brand, category: category })
    res.send({ data, count: temp.length })
})

app.get("/allItems/sort", async (req, res) => {
    const { sort, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find().sort({ price: sort }).skip(skip).limit(limit)
    let temp = await allItemsModel.find().sort({ price: sort })
    res.send({ data, count: temp.length })
})
app.get("/allItems/range", async (req, res) => {
    const { min, max, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ price: { $gte: min, $lte: max } }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ price: { $gte: min, $lte: max } })
    res.send({ data, count: temp.length })
})

app.get("/allItems/categorySort", async (req, res) => {
    const { category, sort, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ category: category }).sort({ price: sort }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ category: category }).sort({ price: sort })

    res.send({ data, count: temp.length })

})
app.get("/allItems/categoryRange", async (req, res) => {
    const { category, min, max, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ category: category, price: { $gte: min, $lte: max } }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ category: category, price: { $gte: min, $lte: max } })

    res.send({ data, count: temp.length })
})
app.get("/allItems/search", async (req, res) => {
    const { query, page, limit } = req.query;
    let skip = (page - 1) * limit
    let data = await allItemsModel.find({ name: { $regex: query, $options: "i" } }).skip(skip).limit(limit)
    let temp = await allItemsModel.find({ name: { $regex: query, $options: "i" } })

    res.send({ data, count: temp.length })
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
    const updatedObject = await allItemsModel.findOneAndUpdate({ _id: id }, data);
    res.send(`Object with ID:${id} has been deleted`);
})

//***************************************************************************************************************************** */

app.post("/sendOtp", (req, res) => {
    const { otp, mobileNumber } = req.body;
    const message = `Your OTP is: ${otp}`;
    console.log(message)
    client.messages
        .create({
            body: message,
            from: '+15672352582',
            to: "+91" + mobileNumber
        })
        .then(message => console.log(`OTP sent to ${message.to}`))
        .catch(error => console.error(error));
    res.send(message)
})

// verify Items Endpoint
app.get("/verifyItems", async (req, res) => {
    const { page, limit } = req.query;
    let temp = await verifyItemsModel.find()
    let skip = (page - 1) * limit
    let data = await verifyItemsModel.find().skip(skip).limit(limit)
    res.send({ data, count: temp.length })
})

app.post("/verifyItems", async (req, res) => {
    const data = req.body;
    const testimonials = new verifyItemsModel(data);
    await testimonials.save()
    res.send(data)
})
app.delete("/verifyItems/:id", async (req, res) => {
    const id = req.params.id;
    const deletedObject = await verifyItemsModel.findByIdAndDelete(id);
    res.send(`Object with ID:${id} has been deleted`);
})


// admins endpoint
app.get("/admins", async (req, res) => {
    let data = await newAdminsModel.find()
    res.send(data)
})

app.get("/admins/:id", async (req, res) => {
    const _id = req.params.id;
    const data = await newAdminsModel.findById({ _id });
    console.log(data)
    res.send(data);
});

app.post("/admins", async (req, res) => {
    const data = req.body;
    try {
        const member = new newAdminsModel(data);
        await member.save();
        res.send(data);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

app.patch("/admins/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(id)
    const updatedObject = await newAdminsModel.findOneAndUpdate({ _id: id }, data);
    res.send(`Object with ID:${id} has been deleted`);
})
app.delete("/admins/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedObject = await newAdminsModel.findByIdAndDelete(id);
        if (!deletedObject) {
            res.status(404).send("Object not found");
        } else {
            res.send(`Object with ID:${id} has been deleted`);
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});








app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log("Server Started at PORT", port)
})
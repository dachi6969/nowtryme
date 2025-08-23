import express from "express";
import { products } from "./data.js";

const server = express();
server.use(express.json());

server.get("/products/:category", (req,res) => {
    const { category } = req.params;
    res.send(products[category]);
    if (!data) {
        return res.status(404).send({ message: "Category not found" });
    }
})

server.listen(4000,() => {
    console.log('server 4000 is running!')
})
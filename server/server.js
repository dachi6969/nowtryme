import express from "express";
import { products } from "./data.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/products/:category", (req, res) => {
    const { category } = req.params;
    const data = products[category];

    if (!data) {
        return res.status(404).send({ message: "Category not found" });
    }

    res.send(data);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

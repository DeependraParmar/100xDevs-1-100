import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());
const client = createClient();

async function startServers(){
    try{
        await client.connect();
        console.log("Connected to Redis");

        app.listen(4000, () => {
            console.log(`Server running at http://localhost:4000`);
        });
    }
    catch(error){
        console.log("Failed to connect servers", error);
    }
}
startServers();

app.post('/submit', async(req, res) => {
    try{
        const { problemID, userID, code, language } = req.body;
        // push it to database prisma.create..........
        await client.lPush("submissions", JSON.stringify({ problemID, userID, code, language }));

        res.status(200).json({
            success: true,
            message: "Submission Queued"
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error,
        })
    }
})


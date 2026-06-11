import app from "./app.js";
import {connectDB} from "./config/database.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, async() => {
    await connectDB()
    console.log(`Server running on port ${PORT}`);
});
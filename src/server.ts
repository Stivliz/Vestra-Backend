import "dotenv/config";
import app from "./app";
import connectDB from "./database";
const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

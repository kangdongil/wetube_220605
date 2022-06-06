import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
	return res.send("home");
}

app.use(logger);
app.get("/", home);

const handleListening = () => () => console.log(`Listening to PORT ${PORT}: https://wetube--uazwy.run.goorm.io`);
app.listen(4000, handleListening);

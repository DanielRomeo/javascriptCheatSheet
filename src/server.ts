import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
import "./generics.ts";


app.get("/", (req: Request, res: Response, next: NextFunction) => {
	
	res.send("hello");
});

app.listen(6012, () => console.log("server started"));

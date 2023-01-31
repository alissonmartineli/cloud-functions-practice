import { HttpFunction, Request, Response } from "@google-cloud/functions-framework/build/src/functions";

export const validateTemperature: HttpFunction = async (req: Request, res: Response) => {
  try {
    if (req.body.temp < 100) {
      res.status(200).send("Temperature OK");
    } else {
      res.status(200).send("Too hot");
    }
  } catch (error) {
    console.log("got error: ", error);
    res.status(500).send(error);
  }
};

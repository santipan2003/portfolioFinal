import { NextApiRequest, NextApiResponse } from "next";
import { InterestData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(InterestData)) {
      throw new Error("Cannot find Interests data");
    }

    res.status(200).json(InterestData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;

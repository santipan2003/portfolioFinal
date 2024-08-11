import { NextApiRequest, NextApiResponse } from "next";
import { EducationData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(EducationData)) {
      throw new Error("Cannot find Interests data");
    }

    res.status(200).json(EducationData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;

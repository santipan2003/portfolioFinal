import { NextApiRequest, NextApiResponse } from "next";
import { ProjectData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(ProjectData)) {
      throw new Error("Cannot find ProjectData data");
    }

    res.status(200).json(ProjectData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;

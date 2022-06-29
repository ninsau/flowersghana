import { NextApiRequest, NextApiResponse } from "next";
import { sendAdminAlert } from "../../lib/sendmail";

const AlertAdminsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { body } = req;
    const result = await sendAdminAlert(
      body.toEmail,
      body.fromEmail,
      body.delivery
    );

    res.status(200).json(result);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default AlertAdminsApi;

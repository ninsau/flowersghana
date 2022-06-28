import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../lib/sendmail";

const SendOrderSuccessMailApi = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const { body } = req;
    const result = await sendMail(body.toEmail, body.fromEmail, body.tracking);

    res.status(200).json(result);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default SendOrderSuccessMailApi;

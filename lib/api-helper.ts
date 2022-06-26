export const orderUpdateMail = async (to: string, tracking: string) => {
  try {
    const response = await fetch(`/api/sendDeliveryMail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fromEmail: "yourorder@flowersghana.com",
        toEmail: to,
        tracking: tracking,
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

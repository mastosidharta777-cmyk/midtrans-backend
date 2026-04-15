import Midtrans from 'midtrans-client';

export default async function handler(req, res) {
  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  });

  const parameter = {
    transaction_details: {
      order_id: "ORDER-" + Date.now(),
      gross_amount: 50000
    }
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.status(200).json({ token: transaction.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default async function handler(req, res) {
  console.log("Webhook masuk:", req.body);
  res.status(200).json({ message: "ok" });
}

import { MongoClient, ServerApiVersion } from "mongodb";

const handler = async () => {
  try {
      const uri = process.env.DB;
      const client = new MongoClient(uri!, {
        serverApi: ServerApiVersion.v1,
      });
      client.connect(async (err) => {
        const collection = client.db("website").collection("photos");
        await client.close();
        return collection;
      });
    } catch (err) {
    console.log(err);
  }
};

export default handler;

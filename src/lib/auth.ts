import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const uri: string | undefined = process.env.MONGO_URI;
if (!uri) {
    throw new Error("MONGO_URI is not defined");
}
const client = new MongoClient(uri);
await client.connect();
const db = client.db("skill-Hub");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue: "user",
                input: false,
            }
        }
    }

});
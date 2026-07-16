import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error("MONGO_URI is not defined");
}

if (!process.env.BETTER_AUTH_URL) {
    throw new Error("BETTER_AUTH_URL is not defined");
}

const client = new MongoClient(uri);

await client.connect();

const db = client.db("skill-Hub");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),

    baseURL: process.env.BETTER_AUTH_URL, // your backend's deployed URL
    secret: process.env.BETTER_AUTH_SECRET, // make sure this exists too

    trustedOrigins: [
        "http://localhost:3000",
        "https://skill-hub-git-main-shihab-bhuiyas-projects.vercel.app",
    ],

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
            },
        },
    },
});
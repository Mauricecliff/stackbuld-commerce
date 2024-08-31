import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";
import { defineConfig } from 'drizzle-kit'

// all fields from env local will be loaded to this file
loadEnvConfig(cwd())

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    }
})


//setups
// before setting up this file ensure you run this cmd to enable pg types and next environment as dev dependencies for both package
// npm i pg -D @types/pg 
// npm i -D next/env

//this create a new table on the postgress data base
// npx drizzle-kit push
//this will initiate the drizzle GUI for your PG DB table
// npx drizzle-kit studio
import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from '../db/schema'
import { Client } from "pg";
import sampleData from "@/lib/sample-product";

loadEnvConfig(cwd())

const main = async() => {
   try{
    //  first connect to PG db 
     const client = new Client({connectionString: process.env.POSTGRES_URL})
     await client.connect()

    // get an instance of db and delete all previous db data
     const db = drizzle(client)
     //add new data
     await db.delete(schema.products)
     const dbRes = await db.insert(schema.products).values(sampleData.products).returning()
     console.log('db res from the server>>', dbRes)
     await new Client().end()
     
   }catch(error){
     console.log(error)
     throw new Error('Failed  to seed data>>')
   }

}



main()

// run seeding cmd depends on the seed.ts file location
// npx tsx './src/db/seed'
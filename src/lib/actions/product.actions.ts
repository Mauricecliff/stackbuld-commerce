// marking this file as serverside code only
"use server"

import db from "@/db/drizzle"
import { products } from "@/db/schema"
import { desc } from "drizzle-orm"


//fetching all product in desc manner by latest uploaded in db
export async function getLatestProducts() {
    const data = await db.query.products.findMany({
      orderBy: [desc(products.createdAt)],
      limit: 4
    })

    return data
}

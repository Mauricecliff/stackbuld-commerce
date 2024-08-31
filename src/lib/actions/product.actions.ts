// marking this file as serverside code only
"use server"

import db from "@/db/drizzle"
import { products } from "@/db/schema"
import { desc, eq } from "drizzle-orm/sql"


//fetching all product in desc manner by latest uploaded in db
export async function getLatestProducts() {
    const data = await db.query.products.findMany({
      orderBy: [desc(products.createdAt)],
      limit: 4
    })

    return data
}


//fetching product details from db
export async function getProductDetails(slug: string) {
    const data = await db.query.products.findFirst({
        where: eq(products.slug, slug)
    })

    return data
}

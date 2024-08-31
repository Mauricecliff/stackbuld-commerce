import { boolean, integer, numeric, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const products = pgTable(
    'product',
    {
        id: uuid('id').defaultRandom().primaryKey().notNull(),
        name: text('name').notNull(),
        slug: text('slug').notNull(),
        category: text('category').notNull(),
        images: text('images').array().notNull(),
        price: numeric('price', {precision: 12, scale:2}).notNull().default('0'),
        brand: text('brand').notNull(),
        rating: numeric('rating', {precision: 12, scale: 2}).notNull().default('0'),
        numReviews: integer('numReviews').notNull().default(0),
        stock: integer('stock').notNull(),
        description: text('description').notNull(),
        isFeatured: boolean('isFeatured').default(false).notNull(),
        banner: text('banner'), 
        createdAt: timestamp('createdAt').defaultNow().notNull()
    },
    (table) => {
        return {
           slugUniqueIndex: uniqueIndex('product_slug_index').on(table.slug)
        }
    }
)


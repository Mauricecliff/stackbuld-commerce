import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

//Product Type
export type Product = InferSelectModel<typeof products>
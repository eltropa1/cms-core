import { Category } from "./Category.js";
import { Slug } from "../value-objects/Slug.js";

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  findById(id: string): Promise<Category | null>;
  findBySlug(slug: Slug): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  delete(id: string): Promise<void>;
}
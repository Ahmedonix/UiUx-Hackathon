import { type SchemaTypeDefinition } from 'sanity'
import { categorySchema } from './categories'
import { productSchema } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
}

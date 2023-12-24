import data from '../data.json'
import { z } from 'zod'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)
  const product = data.products.filter((product) => product.slug === slug)

  console.log('encontrou esse produto ', product)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 404 })
  }

  return Response.json(product[0])
}

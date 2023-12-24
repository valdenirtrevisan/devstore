import type { NextRequest } from 'next/server'
import data from '../data.json'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const product = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  return Response.json(product)
}

import Image from 'next/image'
import Link from 'next/link'

export default async function SearchPage() {
  const product = {
    id: 1,
    title: 'Moletom Never Stop Learning',
    slug: 'moletom-never-stop-learning',
    price: 129,
    image: '/moletom-never-stop-learning.png',
    description: 'Moletom fabricado com 88% de algodão e 12% de poliéster.',
    featured: true,
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-4">
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={920}
            height={920}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

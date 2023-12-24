'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log('formData ', formData)

    const data = Object.fromEntries(formData)
    console.log('data ', data)

    const query = data.q

    if (query) {
      router.push(`/search?q=${query}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        defaultValue={query || ''}
        placeholder="Buscar produtos..."
        className="w-full bg-transparent text-sm text-zinc-500 outline-none placeholder:text-zinc-400"
      />
    </form>
  )
}
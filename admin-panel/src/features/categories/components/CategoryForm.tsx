import { useState } from "react"
import type { Category } from "../types"

type Props = {
  defaultValues?: Category
  onSubmit: (data: { name: string; slug: string }) => void
}

export function CategoryForm({
  defaultValues,
  onSubmit
}: Props) {

  const [name, setName] = useState(defaultValues?.name ?? "")
  const [slug, setSlug] = useState(defaultValues?.slug ?? "")

  return (

    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ name, slug })
      }}
      className="flex flex-col gap-3"
    >

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="border p-2"
      />

      <button
        type="submit"
        className="bg-black text-white p-2"
      >
        Save
      </button>

    </form>

  )
}
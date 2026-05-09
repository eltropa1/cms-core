import type { Category } from "../types"
import { CategoryForm } from "./CategoryForm"

type Props = {
  category?: Category
  onSubmit: (data: { name: string; slug: string }) => void
  onClose: () => void
}

export function CategoryDialog({
  category,
  onSubmit,
  onClose
}: Props) {

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 w-[400px]">

        <h2 className="text-lg mb-4">
          {category ? "Edit Category" : "New Category"}
        </h2>

        <CategoryForm
          defaultValues={category}
          onSubmit={(data) => {
            onSubmit(data)
            onClose()
          }}
        />

      </div>

    </div>

  )
}
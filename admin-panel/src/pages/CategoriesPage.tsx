import { useState } from "react"
import { useCategories } from "@/features/categories/hooks/useCategories"
import { useCreateCategory } from "@/features/categories/hooks/useCreateCategory"
import { useUpdateCategory } from "@/features/categories/hooks/useUpdateCategory"
import { useDeleteCategory } from "@/features/categories/hooks/useDeleteCategory"

import { CategoriesTable } from "@/features/categories/components/CategoriesTable"
import { CategoryDialog } from "@/features/categories/components/CategoryDialog"
import type { Category } from "@/features/categories/types"

export default function CategoriesPage() {

  const { data, isLoading } = useCategories()

  const createCategory = useCreateCategory()
  const updateCategory = useUpdateCategory()
  const deleteCategory = useDeleteCategory()

  const [editing, setEditing] = useState<Category | undefined>()
  const [creating, setCreating] = useState(false)

  if (isLoading) return <div>Loading...</div>

  return (

    <div className="p-6">

      <div className="flex justify-between mb-4">

        <h1 className="text-xl">Categories</h1>

        <button
          onClick={() => setCreating(true)}
          className="bg-black text-white px-3 py-2"
        >
          New Category
        </button>

      </div>

      <CategoriesTable
        categories={data ?? []}
        onEdit={(cat) => setEditing(cat)}
        onDelete={(cat) => deleteCategory.mutate(cat.id)}
      />

      {creating && (

        <CategoryDialog
          onClose={() => setCreating(false)}
          onSubmit={(data) =>
            createCategory.mutate(data)
          }
        />

      )}

      {editing && (

        <CategoryDialog
          category={editing}
          onClose={() => setEditing(undefined)}
          onSubmit={(data) =>
            updateCategory.mutate({
              id: editing.id,
              ...data
            })
          }
        />

      )}

    </div>

  )
}
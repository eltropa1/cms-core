import type { Category } from "../types"

type Props = {
  categories: Category[]
  onEdit: (category: Category) => void
  onDelete: (category: Category) => void
}

export function CategoriesTable({
  categories,
  onEdit,
  onDelete
}: Props) {

  return (

    <table className="w-full border">

      <thead>
        <tr className="border-b">
          <th className="text-left p-2">Name</th>
          <th className="text-left p-2">Slug</th>
          <th className="text-left p-2">Actions</th>
        </tr>
      </thead>

      <tbody>

        {categories.map(category => (

          <tr key={category.id} className="border-b">

            <td className="p-2">{category.name}</td>

            <td className="p-2">{category.slug}</td>

            <td className="p-2 flex gap-2">

              <button
                onClick={() => onEdit(category)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(category)}
                className="text-red-600"
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}
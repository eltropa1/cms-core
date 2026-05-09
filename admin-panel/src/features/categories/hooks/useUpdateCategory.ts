import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCategory } from "../api/categoriesApi"

export function useUpdateCategory() {

  const queryClient = useQueryClient()

  return useMutation({

    mutationFn: ({
      id,
      name,
      slug
    }: {
      id: string
      name: string
      slug: string
    }) => updateCategory(id, { name, slug }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"]
      })
    }

  })
}
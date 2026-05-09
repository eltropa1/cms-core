import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "../api/postsApi"

export function useUpdatePost() {

  const queryClient = useQueryClient()

  return useMutation({

    mutationFn: ({
      id,
      title,
      slug
    }: {
      id: string
      title: string
      slug: string
    }) => updatePost(id, { title, slug }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      })
    }

  })
}
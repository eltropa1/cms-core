import { useMutation, useQueryClient } from "@tanstack/react-query"
import { archivePost } from "../api/postsApi"

export function useArchivePost() {

  const queryClient = useQueryClient()

  return useMutation({

    mutationFn: archivePost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      })
    }

  })
}
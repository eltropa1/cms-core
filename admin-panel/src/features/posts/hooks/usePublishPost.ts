import { useMutation, useQueryClient } from "@tanstack/react-query"
import { publishPost } from "../api/postsApi"

export function usePublishPost() {

  const queryClient = useQueryClient()

  return useMutation({

    mutationFn: publishPost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      })
    }

  })
}
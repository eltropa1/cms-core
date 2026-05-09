import { useQuery } from "@tanstack/react-query"
import { getPost } from "../api/postsApi"

export function usePost(id: string) {

  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id
  })

}
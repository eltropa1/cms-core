const API_BASE_URL = "http://localhost:4000"

export async function httpClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message)
  }

  return response.json()
}
export default async function getUserProfile(token: string) {
  const response = await fetch("http://localhost:5000/api/v1/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Get user profile failed");
  return await response.json();
}

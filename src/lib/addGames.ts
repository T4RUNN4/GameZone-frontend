export async function addGames(data: object) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/add-games`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
}

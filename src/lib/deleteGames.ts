export async function deleteGames(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/games/delete/${id}`,
    { 
        method: "DELETE" 
    },
  );
  return res.json();
}

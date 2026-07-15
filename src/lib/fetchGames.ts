export async function fetchGames(id? :string ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games/${id? id : ""}`);
  return res.json();
};

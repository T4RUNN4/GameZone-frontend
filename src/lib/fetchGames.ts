export interface Game {
  _id: string;
  gameName: string;
  gameCategory: string;
  gameShortDescription: string;
  gameDescription: string;
  gameImageURL: string;
  hourlyRate: number;
}

export async function fetchGames(id?: string): Promise<Game[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/games/${id ? id : ""}`,
  );
  return res.json();
}

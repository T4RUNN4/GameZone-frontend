export interface Game {
  _id: string;
  gameName: string;
  gameCategory: string;
  gameShortDescription: string;
  gameDescription: string;
  gameImageURL: string;
  hourlyRate: number;
}

export async function fetchGames(): Promise<Game[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games`);
  return res.json();
};

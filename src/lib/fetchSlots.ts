export interface Slots {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  userId: string;
  userName: string;
  status: string;
}

export async function fetchSlots(id?: string): Promise<Slots[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/slot/${id ? id : ""}`,
  );
  return res.json();
}

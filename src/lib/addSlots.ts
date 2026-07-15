export async function addSlots(slot: object) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/slot/book`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slot),
    },
  );
  return response.json();
}

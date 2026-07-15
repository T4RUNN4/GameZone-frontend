export async function updateSlot(id: string, status: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/slot/update-status/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      },
    );
  return response.json();
}
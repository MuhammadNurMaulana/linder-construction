export async function getData(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to data fetch");
  }

  return res.json();
}

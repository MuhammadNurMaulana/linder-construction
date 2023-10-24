export const GetData = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to data fetch");
  }

  return response.json();
};

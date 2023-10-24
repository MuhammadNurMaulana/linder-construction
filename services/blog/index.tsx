export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to data fetch");
  }

  return res.json();
};

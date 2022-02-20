export const getCharacter = async () => {
  const response = await fetch(
    "https://imdb8.p.rapidapi.com/actors/get-awards?nconst=nm0001667",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const character = await response.json();
  return character;
};

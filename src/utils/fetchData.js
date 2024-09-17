export const excersciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3130ab5aadmsh8352205261919eep1acb1fjsne7763a699662",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

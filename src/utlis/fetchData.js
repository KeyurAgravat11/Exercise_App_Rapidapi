export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": 'b09584228fmsh72e6de892eb4fb1p1bec35jsnb5d1ee269c1f',
  },
};

export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": 'b09584228fmsh72e6de892eb4fb1p1bec35jsnb5d1ee269c1f',
  }, 
};
export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data);
  return data;
};

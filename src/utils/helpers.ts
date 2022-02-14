export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const setFavoriteToLocalStorage = (id: string) => {
  let newFavorites = [];
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites) newFavorites = favorites;

  const index = newFavorites.indexOf(id);
  if (index > -1) {
    newFavorites.splice(index, 1);
  } else newFavorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

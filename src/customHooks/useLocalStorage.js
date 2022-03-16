
const useLocalStorage = () => {
  const inLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key)) || null;

  const setLocalStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));
    
  return [inLocalStorage, setLocalStorage];
};

export default useLocalStorage;
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Luam valoarea din localStorage daca exista, altfel folosim valoarea initial
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Modificam localStorage cand valoarea se schimba
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

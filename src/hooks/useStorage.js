import { useState, useEffect } from "react";
import localForage from "localforage";

export default function useStorage(key) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Retrieve data
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await localForage.getItem(key);
        setData(fetchedData);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    }
    fetchData();
  }, [key]);

  // Set data
  useEffect(() => {
    async function setData() {
      if (data !== null) {
        try {
          await localForage.setItem(key, data);
        } catch (e) {
          setError(e);
        }
      }
    }
    setData();
  }, [key, data]);

  return [{ data, isLoading, error }, setData];
}

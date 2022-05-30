import axios from "axios";
import { useEffect, useState } from "react";

const Api = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      })
  }, [url]) //solo cuando esto cambia [] esto solo lo ejecuta una solo vez
  
  return {data, loading, error};
};

export default Api;

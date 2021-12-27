import axios from 'axios';
import { useEffect, useState } from 'react';
axios.defaults.baseURL = 'http://localhost:8080';

const useTaxSummaryList = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
 const fetchData  = async () => {

  setLoading(true);
  try {
    const res = await axios.get('/taxSummaryList');
    setResponse(res.data);
    setError(null);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }

}
   useEffect(() => {      
        
        fetchData ();

    }, []);
    return { response, error, loading };

};


export default useTaxSummaryList;

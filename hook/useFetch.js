import { useState, useEffect } from "react";
import axios from 'axios';
//import {RAPID_API_KEY} from '@env';

//const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
        ...query
    },
    headers: {
      'X-RapidAPI-Key': '480d5f6e22msh1ba1271bd7e2cc9p1293fdjsn919cf3c82f4d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  console.log(`https://jsearch.p.rapidapi.com/${endpoint}`)

  const fetchData = async () => {
    setIsLoading(true);
    try{
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    } catch(error){
        setError(error)
        alert('There is an error' + error)
    } finally {
        setIsLoading(false);
    }
  }

    useEffect(() => {

    fetchData();

    },[]);

    const refetch  = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error,refetch};

}
export default useFetch
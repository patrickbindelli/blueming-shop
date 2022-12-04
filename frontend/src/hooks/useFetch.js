import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useFetch = (url, config) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get(url, config)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    }

    return { data, error, loading, refetch };
};

export default useFetch
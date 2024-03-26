
'use client'
import axios from 'axios';
import { useState } from 'react';

function SearchComponent() {
  const [searchParams, setSearchParams] = useState({
    q: '', // Query
    gl: 'bd', // Country
    hl: 'bn', // Language
    num: 10, // Number of results
  });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const requestData = JSON.stringify(searchParams);

    const config = {
      method: 'post',
      url: 'https://google.serper.dev/search',
      headers: { 
        'X-API-KEY': 'f5770be02acf9ff9a5da0c239f7fc46feaf73c80',
        'Content-Type': 'application/json'
      },
      data: requestData
    };

    try {
      const response = await axios(config);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: name === 'num' ? parseInt(value, 10) : value
    }));
  };

  return (
    <div>

      <form className='pb-8 mx-auto px-16' onSubmit={fetchData}>
      <h2 className="text-xl mb-2">Find Latest News</h2>

        <div className='mb-2'>
          <input
            type="text"
            name="q"
            className='px-4 py-2 border'
            value={searchParams.q}
            onChange={handleChange}
            placeholder="Enter search query"
            required
          />
        </div>
        <div className="grid grid-cols-2 mb-2 items-center gap-2">
          <input
            type="text"
            name="gl"
            className='px-4 py-2 border'
            value={searchParams.gl}
            onChange={handleChange}
            placeholder="Country"
          />
  
          <input
            type="text"
            name="hl"
            className='px-4 py-2 border'
            value={searchParams.hl}
            onChange={handleChange}
            placeholder="Language"
          />      </div>
        <div className="grid grid-cols-2 mb-2 items-center gap-2">
          <input
            type="number"
            name="num"
            className='px-4 py-2 border'
            value={searchParams.num}
            onChange={handleChange}
            placeholder="Number of results"
            min="1"
            max="100"
          />
          <div className="">
          <button type="submit" disabled={loading}               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
>
          {loading ? 'Searching...' : 'Search'}
        </button>
              </div>
        </div>
   
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default SearchComponent;

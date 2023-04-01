import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Quotes() {
  const [quotes, setQuotes] = React.useState([]);
  const [error, setError] = React.useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY },
      contentType: 'application/json',
    }).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setQuotes(data);
      }
      setError('Data not loaded');
    });
  }, []);

  return (
    <motion.div
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="bg-orange-500 h-[300px] w-[300px] md:w-[400px] items-center flex justify-center rounded-xl px-10 font-montserrat"
    >
      { quotes
        ? quotes.map((quote) => (
          <div key={quote.quote} className="flex flex-col gap-2">
            <p className="bg-orange-200 rounded-xl text-black p-4 text-lg font-thin">
              {quote.quote}
              <br />
              <span className="text-sm bg-slate-600 text-white mt-1 rounded-lg p-1">{` - ${quote.author}`}</span>
            </p>
          </div>
        ))
        : error }
    </motion.div>
  );
}

import React,{useEffect, useState} from 'react';
import { Quote } from './components/Quote';
import { Spinner } from './components/Spinner';

const initialQuote = {

   quote : 'Quote',
   author : 'prostitute'

}

function App() {
  
  const [ frase, setFrase] = useState(initialQuote);

  const [loading, setLoading] = useState(false);

  
  const updateQuote = async()=>{

    setLoading(true);

    const url = 'https://breakingbadapi.com/api/quote/random'; 
    const res = await fetch(url);
    const [newQuote] = await res.json();
    console.log(newQuote);

    const { quote , author } = newQuote;
    
    setFrase({
      quote,
      author

    })

    setLoading(false);
  }

  useEffect( () => {
    updateQuote()
  },[])



  return (

    <div className='app'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />

      <button onClick={ () => updateQuote()  }>Get Another</button>

      {loading ? <Spinner />  : <Quote quote={ frase } />}

     

    </div>
  );
}

export default App;

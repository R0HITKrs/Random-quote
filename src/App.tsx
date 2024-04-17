import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft, FaTumblr} from 'react-icons/fa';
import './App.css'

interface Quote{
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function getRandomColor(): string {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 2s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor);
  };
  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
       <div id="quote-box">
          <div className="quote-content" style={{color: randomColor, transition}}>
              <h2 id="text" style={{transition}}> 
                <FaQuoteLeft size="30"/>
                {quote.quote}
              </h2>
            <h4 id="author">- {quote.author}</h4>
          </div>
          <div className="buttons">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{backgroundColor: randomColor, transition, 
              marginRight: "10px",
            }}
            >
              <FaTwitter color="white" />
            </a>
            <a href={'https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DChinese%2BProverb%26content%3DThe%2Bperson%2Bwho%2Bsays%2Bit%2Bcannot%2Bbe%2Bdone%2Bshould%2Bnot%2Binterrupt%2Bthe%2Bperson%2Bwho%2Bis%2Bdoing%2Bit.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button'}
            id="tweet"
            style={{backgroundColor: randomColor, transition, 
              marginRight: "10px",
            }}
            >
              <FaTumblr color="white" />
            </a>
            <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
          </div>
      </div>
    </div>
  )
}

export default App

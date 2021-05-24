import { useEffect, useState } from 'react';
import Color from './Color/Color';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const ammount = 10;
  useEffect(() => {
    fetch(`https://www.colr.org/json/colors/random/${ammount}`)
      .then((res) => res.json())
      .then((data) => setColors(data.colors));
  }, []);

  if (colors.length === 0) return <h2>Loading....</h2>;

  return (
    <div className='container'>
      <div className='fromJSON'>
        <h2>Originales</h2>
        {colors.map((c, i) => {
          console.log(c.hex);
          return <Color key={c.id} color={`#${c.hex}`} readOnly={true} />;
        })}
      </div>
      <div className='newSet'>
        <h2>Nuevos</h2>
        {colors.map((x) => (
          <Color key={x.name} color={'#000'} readOnly={false} />
        ))}
      </div>
      <button>Export to JSON</button>
    </div>
  );
}

export default App;

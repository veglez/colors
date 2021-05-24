import { useEffect, useState } from 'react';
import Color from './Color/Color';
import './App.css';
import ExportButton from './ExportButton/ExportButton';

function App() {
  const [colors, setColors] = useState([]);
  const [newColors, setNewColors] = useState({});
  const ammount = 20;
  useEffect(() => {
    fetch(`https://www.colr.org/json/colors/random/${ammount}`)
      .then((res) => res.json())
      .then((data) => setColors(data.colors));
  }, []);

  if (colors.length === 0) return <h2>Loading....</h2>;

  console.log(newColors);
  return (
    <div className='container'>
      <div className='fromJSON'>
        <h2>Originales</h2>
        {colors.map((c) => {
          return (
            <Color
              key={c.id}
              id={c.id}
              newColors={setNewColors}
              color={`#${c.hex}`}
              readOnly={true}
            />
          );
        })}
      </div>
      <div className='newSet'>
        <h2>Nuevos</h2>
        {colors.map((x, i) => (
          <Color
            key={x.name}
            id={i}
            newColors={setNewColors}
            color={'#000'}
            readOnly={false}
          />
        ))}
      </div>
      <ExportButton oldColors={colors} newColors={newColors} />
    </div>
  );
}

export default App;

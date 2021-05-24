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
      .then((data) => {
        console.log(data);
        setColors(data.colors);
      });
  }, []);

  console.log('colors', colors);
  function getMetadataForFileList(fileList) {
    for (const file of fileList) {
      // Not supported in Safari for iOS.
      const name = file.name ? file.name : 'NOT SUPPORTED';
      // Not supported in Firefox for Android or Opera for Android.
      const type = file.type ? file.type : 'NOT SUPPORTED';
      // Unknown cross-browser support.
      const size = file.size ? file.size : 'NOT SUPPORTED';
      console.log({ file, name, type, size });
    }
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      console.log(e);
    });

    // let textPromise = fileList[0].text();
    fileList[0].text().then((text) => {
      const dataFromJson = JSON.parse(text);
      console.log(dataFromJson);
      setColors(dataFromJson.colors);
    });
  }

  if (colors.length === 0) return <h2>Loading....</h2>;

  return (
    <div className='container'>
      <input
        type='file'
        accept='.json'
        onInput={(e) => getMetadataForFileList(e.target.files)}
      />
      <div className='fromJSON'>
        <h2>Originales</h2>
        {colors.map((c) => {
          if (c.id !== -1) {
            return (
              <Color
                key={c.id}
                id={c.id}
                newColors={setNewColors}
                color={`#${c.hex}`}
                readOnly={true}
              />
            );
          }
          return null;
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

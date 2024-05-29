import imagen0 from './imagenes/gohan.jpg';
import imagen1 from './imagenes/goku.jpg';
import imagen2 from './imagenes/goku2.jpg';
import imagen3 from './imagenes/gokuchico.jpg';
import imagen4 from './imagenes/gokuinstinto.jpg';
import imagen5 from './imagenes/goyve.jpg';
import imagen6 from './imagenes/picoro.jpg';
import imagen7 from './imagenes//vegeta-ultra.jpg';
import './App.css';
import './miCss.css';

function App() {
  let nombres=["gahan","goku","goku2","gukuniño","gokuinstento","goku y Vegeta","piccoro","vegeta ultra ego"];
    return(
    <div className="contenedor">
      
      <div className = "caja">
        <img src= {imagen0} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[0]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen1} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[1]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen2} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[2]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen3} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[3]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen4} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[4]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen5} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[5]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen6} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[6]}</div> 

      </div>
      <div className = "caja">
        <img src= {imagen7} alt="Descripción de la imagen"/>

        <div className = "nombre">{nombres[7]}</div> 

      </div>
    </div>
  );
}

export default App;

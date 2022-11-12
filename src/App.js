import { ArticlesModule } from "./components/ArticlesModule";
import { CardContainer } from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <h3 className="App__rubricas">Armar, a elección, al menos un módulo contenedor de artículos</h3>
      <ArticlesModule />
      <h3 className="App__rubricas">Armar un artículo card, que sea semántico en su construcción html y lo suficientemente dinámico
        como para contemplar al menos 3 opciones de renders de las demostradas en el Figma.</h3>
      <CardContainer />
    </div>
  );
}

export default App;

import "./App.css";
import { requests } from "./request";
import { Row } from "./components/Row";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";

function App() {
  console.log(requests.feachNetflixOriginals);
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.feactTopRated}
        isLargeRow
      />
      <Row title='Top Rated' fetchUrl={requests.feactTopRated} />
      <Row title='Action Movies' fetchUrl={requests.feactActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.feactComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.feactHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.feactRomanceMovies} />
      <Row
        title='Documentaries Movies'
        fetchUrl={requests.feactDocumentMovies}
      />
    </div>
  );
}

export default App;

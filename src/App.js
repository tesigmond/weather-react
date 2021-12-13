import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Weather />
      </header>
      <p>
        This website is coded by Tory Sigmond and is{" "}
        <a href="https://github.com/tesigmond/weather-react">open-sourced</a>
      </p>
    </div>
  );
}

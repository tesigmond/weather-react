import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Weather />
      </header>
    </div>
  );
}

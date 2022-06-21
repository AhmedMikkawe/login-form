import "./App.css";
import LoginComponent from "./components/LoginComponent";
const onSubmit = (username, password) => {
  console.log(`${username} and ${password}`);
};
function App() {
  return (
    <div className="App">
      <LoginComponent onSubmit={onSubmit} />
    </div>
  );
}

export default App;

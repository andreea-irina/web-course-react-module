import "./App.css";
import HomePage from "./session30/liveCode/home";
// import NavBar from "./session30/examples/NavBar";
// import UserItem from "./session30/examples/UserItem";

function App() {
  return (
    <div>
      {/* <NavBar
        homePageLink="/"
        aboutPageLink="/about"
        contactPageLink="/contact"
      />

      <div className="app-content">
        <UserItem name="Jane Doe" email="jane.doe@gmail.com" />
        <UserItem name="Another Name" email="test@gmail.com" />
      </div> */}

      <HomePage pageTitle="Valoare din Props" />
    </div>
  );
}

export default App;

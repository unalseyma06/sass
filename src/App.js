import Card from "./components/Card";
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./scss/App.scss"
import data from "./utils/data"

function App() {
  console.log(data);
  return (
    <>
    <Header/>
    <Card data={data} />
    <Footer/>
    </>
  );
}

export default App;

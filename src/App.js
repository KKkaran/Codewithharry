import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDos from './components/ToDos';
import ToDoItems from './components/ToDoItems';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header title="This is the title" name="Sodhi"/>
      <ToDos/>
      <Footer/>
    </div>
  );
}

export default App;

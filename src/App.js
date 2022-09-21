import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDos from './components/ToDos';
import ToDoItems from './components/ToDoItems';
import Footer from './components/Footer';


function App() {
  const tasks = [
    {
      title:"Pick Up Aman",
      text: "This is the task task1"
    }, {
      title:"Complete the React Course",
      text: "This is the task task2"
    }, {
      title:"Start with the Elixir Lang.",
      text: "This is the task task3"
    }
  ]
  return (
    <div className="App">
      <Header title={"ToDo App"} namse="Sodhi"/>
      <ToDos tasks = {tasks}/>
      <Footer/>
    </div>
  );
}

export default App;

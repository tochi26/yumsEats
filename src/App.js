import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import { Delivery } from "./components/Delivery";
import { TopPicks } from "./components/TopPicks";
import Meal from './components/Meal';
import { mealData } from './data/data';





function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal mealData={mealData} />
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useMemo } from "react";
import {
  getCatData,
  ICatData,
  getFoodData,
  IFoodCategory,
} from "../api/getData";
import CatCard from "../components/CatCard";

function App() {
  const [catData, setCatData] = useState<ICatData[]>();
  const [foodData, setFoodData] = useState<IFoodCategory[]>();

  useMemo(() => {
    getCatData({ setCatData: (catData: ICatData[]) => setCatData(catData) });
    getFoodData({
      setFoodData: (foodData: IFoodCategory[]) => setFoodData(foodData),
    });
  }, []);

  return (
    <>
      {catData ? (
        <main>
          {
            catData.map((cat: ICatData)=>{
              return(
                <CatCard catData={cat}/>
              )
            })
          }
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;

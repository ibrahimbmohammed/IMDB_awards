import { useState } from "react";
import { useQuery } from "react-query";
import { getCharacter } from "../src/services/awards";
import LineChart from "./components/line-chart";
import BarChart from "./components/bar-chart";
import Header from "./components/header";
import ChartView from "./components/chart-view";
import MoreCard from "./components/more-info-card";
import StatCard from "./components/stat-card";
const App = () => {
  const { isLoading, error, data } = useQuery("character", getCharacter);
  const [chart, setChart] = useState(true);
  const awardData = data?.resource?.awards;

  let awardObj = {};
  awardData?.forEach((data) => {
    if (!awardObj[data.year]) {
      awardObj[data.year] = 1;
    } else if (awardObj[data.year]) {
      awardObj[data.year] += 1;
    }
  });

  let awardNameObj = {};
  awardData?.forEach((data) => {
    if (!awardNameObj[data.year]) {
      awardNameObj[data.year] = [data];
    } else if (awardNameObj[data.year]) {
      awardNameObj[data.year] = [...awardNameObj[data.year], data];
    }
  });
  const handleChange = () => {
    setChart(!chart);
  };
  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center bg-[#12263F] justify-center text-white">
        {" "}
        loading...
      </div>
    );
  if (error)
    return (
      <div className="w-screen h-screen flex items-center bg-[#12263F] justify-center text-red-500">
        sorry something went wrong try again
      </div>
    );

  return (
    <div className="min-h-[100%] bg-[#12263F] overflow-auto pb-3">
      <Header />
      <div className="w-full h-full  flex flex-col items-center justify-center -mt-20 md:mt-0 ">
        <ChartView>
          {chart ? (
            <BarChart ApiData={awardObj} />
          ) : (
            <LineChart ApiData={awardObj} />
          )}
        </ChartView>
        <div className="flex flex-col-reverse min-h-[18rem] lg:flex-row w-90 lg:w-[70%] justify-between  pb-2">
          <StatCard Obj={awardNameObj} />
          <MoreCard chart={chart} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default App;

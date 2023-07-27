import React, { useEffect, useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const ChartGraph = ({ chartData, setChartData }) => {
  let ref = useRef(null);

  const generateChartImage = useCallback(() => {
    if (ref.current) {
      const base64Image = ref.current.toBase64Image();
      // console.log(base64Image);
      setChartData(base64Image);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      generateChartImage();
      console.log("settimeout");
    }, 1500);
  }, [generateChartImage]);
  console.log("afteruseeffect");
  // const downloadImage = useCallback(() => {
  //   const link = document.createElement("a");
  //   link.download = "chart.png";
  //   link.href = ref.current.toBase64Image();
  //   link.click();
  // }, []);
  const data = {
    labels: ["January", "February", "March", "April", "May", "june"],
    datasets: [
      {
        label: "Sample Bar Data",
        data: [12, 19, 3, 5, 2, 4],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {}; // Empty options object

  return (
    <div>
      {console.log("jsxCode")}
      {/* <button onClick={downloadImage}>download</button> */}
      <Bar ref={ref} data={data} options={options} />
    </div>
  );
};

export default ChartGraph;

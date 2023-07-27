import React, { useState } from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ChartGraph from "./components/ChartGraph";
const App = () => {
  const [chartData, setChartData] = useState("");
  return (
    <div id="print-div">
      <PDFDownloadLink
        document={<PDFFile chartData={chartData} setChartData={setChartData} />}
        fileName="Testingpdf"
      >
        {({ loading }) =>
          loading ? (
            <button>loading Document</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      {/* <button onClick={() => window.print()}>Download</button> */}
      <ChartGraph chartData={chartData} setChartData={setChartData} />
    </div>
  );
};

export default App;

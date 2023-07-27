import React, { useEffect, useRef, useState } from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import OIP from "./OIP.jpg";
import ChartGraph from "./ChartGraph";
const PDFFile = ({ chartData, setChartData }) => {
  // console.log("pdffile:", chartData);
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 25,
    },
  });
  return (
    <Document>
      <Page style={styles.body}>
        {/* <Image src={OIP} /> */}
        {chartData && (
          <Image style={styles.image} src={chartData} alt="BarChart" fixed />
        )}

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          pulvinar sapien et ligula ullamcorper malesuada proin. Tempor orci eu
          lobortis elementum nibh tellus molestie. Facilisis magna etiam tempor
          orci eu. Commodo odio aenean sed adipiscing. Massa enim nec dui nunc
          mattis. Quam quisque id diam vel quam elementum. Arcu dictum varius
          duis at consectetur lorem donec massa. Imperdiet dui accumsan sit amet
          nulla facilisi. Viverra mauris in aliquam sem fringilla ut morbi
          tincidunt augue. Diam phasellus vestibulum lorem sed risus ultricies
          tristique nulla aliquet. Consectetur lorem donec massa sapien faucibus
          et molestie ac feugiat. In hac habitasse platea dictumst quisque
          sagittis. Dictum sit amet justo donec. Sed lectus vestibulum mattis
          ullamcorper velit sed.
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;

import { useEffect, useRef, useState } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";


const Chart = ({filter, chartId, height, width,autoRefresh,maxDataAge}) => {
    const sdk = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-ecommerce-vhpfe'});
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(sdk.createChart({chartId: chartId,maxDataAge:maxDataAge,showAttribution:false,autoRefresh:autoRefresh, height: height, width: width}));

  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
  }, [chart]);

  useEffect(() => {
    if (rendered) {
        if(filter){
      chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
        }
    }
  }, [chart, filter, rendered]);

  return <div className="chart " ref={chartDiv}/>;
}

export default Chart

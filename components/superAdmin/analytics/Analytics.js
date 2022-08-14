
import Chart from "./Chart"


const Analytics = () => {
    
    return (
        <div className="pb-20 bg-gray-50 absolute top-0 w-full h-[95vh] md:pt-28 md:h-full overflow-y-scroll">
           
         
        <div className=" md:flex w-full">

<div className="md:w-1/2 chart-border">
      

            <Chart autoRefresh={true}  maxDataAge={86400} height={'300px'}   chartId={'62d8f637-7336-4073-8042-9ef4a01c878b'}/>
            </div>
            <div className="md:w-1/2 chart-border">
            <Chart height={'300px'}   chartId={'62d819d1-32ba-4ba2-8674-1d25def95221'}/>
            </div>
            </div>
            
          
            <div className="md:flex w-full ">
            <div className="md:w-3/4  chart-border ">
            <Chart height={'600px'}   chartId={'62d8e61e-2e57-4f15-8e92-7c6e1087f52c'}/>
            </div>
            <div className="md:w-1/4  divide-y-2 chart-border">
            <Chart height={'200px'}   chartId={'789ebc5c-63e6-48cb-a19d-2879137863cb'}/>
            <Chart height={'200px'}   chartId={'62d827e4-f1eb-4bac-81dc-568118ca71af'}/>
            <Chart height={'200px'}   chartId={'62d90f49-8bfb-4fed-89ab-1bcddf2fb380'}/>

            </div>
            </div>
          
          <div className=" chart-border divide-y-2">
              {/* <div className="chart-border"> */}
            <Chart height={'550px'}   chartId={'60158854-0797-442c-b8fd-f30cd8c3b59c'}/>
            {/* </div> */}
            {/* <div className="chart-border"> */}
            <Chart height={'500px'}   chartId={'62d8ea40-7336-4956-8bb2-9ef4a017fba9'}/>
            {/* </div> */}
            {/* <div className="chart-border "> */}
            <Chart height={'500px'}   chartId={'517a7a06-32ff-4f13-bba3-bb95df6ced73'}/>
            {/* </div> */}
            </div>
        </div>
    )
}

export default Analytics

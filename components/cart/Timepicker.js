const Timepicker = ({setfinalTime,setHour,setMinute}) => {
    return (
        <>
            <div className="mt-2 py-4 px-1 bg-white rounded-lg ">
  {/* <div className="flex">

    <select name="hours" className="bg-transparent text-xl appearance-none outline-none" onChange={(e)=>{setHour(e.target.value)}}>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    
    </select>
    <span className="text-xl mr-3">:</span>
    <select name="minutes" className="bg-transparent text-xl appearance-none outline-none mr-4" onChange={(e)=>{setMinute(e.target.value)}}>
      <option value="0">00</option>
      <option value="30">30</option>
    </select>


   
  </div> */}
  

<input type="time" 
onChange={(e)=>{setfinalTime(e.target.value)}} className="appearance-none w-full bg-white text-pri-orange placeholder-gray-400 rounded-lg text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"/>
</div>
        </>
    )
}
 
export default Timepicker

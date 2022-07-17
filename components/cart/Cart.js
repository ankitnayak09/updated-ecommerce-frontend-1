

import Link from "next/link"
import { useSelector } from 'react-redux'
import CartCard from "./CartCard"
import { ChevronDoubleLeftIcon,CheckCircleIcon,QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { useEffect,useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Timepicker from './Timepicker'
import { useDispatch } from "react-redux"
import { saveOrderInfo } from "../../actions/cartAction"
import Head from "next/head"
import Script from "next/script"
import axios from "axios"
import { toast } from "react-toastify"
import date from 'date-and-time';
import { useRouter } from 'next/router'
import { GoogleLogin } from "@react-oauth/google"


const timeOptionsLists = [
    { id: 1, title: 'For Now', description: 'Last message sent an hour ago', },
    { id: 2, title: 'Want it later', description: 'Last message sent 2 weeks ago', },
    
  ] 

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const Cart = () => {
    const router = useRouter()
      const dispatch=useDispatch()
      // const {orderInfo}=useSelector((state)=>state.cart)
    const [selectedTime, setSelectedTime] = useState(0)
    // const [selectedTime, setSelectedTime] = useState(timeOptionsLists[0])
    const responseSuccessGoogle=(response)=>{
      dispatch(googleSignIn(response.credential))
    }
    const responseErrorGoogle=(response)=>{
      toast.error(response);
  
    }

    const [Hour,setHour]=useState(0)
    const [Minute,setMinute]=useState(0)
    const [cookingTime,setCookingTime]=useState(0)
    const [finalTime,setfinalTime]=useState("0:0")
    const [Suggestion,setSuggestion]=useState("")
    const [WantAt,setWantAt]=useState("")
    const [CartBtnDisabled,setCartBtnDisabled]=useState(false)

    const [SubTotal,setSubTotal]=useState(0)
    const [ConvenienceCharge,setConvenienceCharge]=useState(0.3)
    const [OrderTotal,setOrderTotal]=useState(0)
    const {cartItems,cartShop,cartShopTimings,cartShopMid,cartShopName}= useSelector(state => state.cart)

    const {loading:userLoading,isAuthenticated}= useSelector(state => state.user)
    // useEffect(() => {

    //    if(isAuthenticated==false){
    //     router.push("/")
    //   }

    // }, [])

    useEffect(() => {
     
        let subttl=cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0)

        let cookingTimesArray=[]

        cartItems.forEach(item => {
          cookingTimesArray.push(item.cookingTime)
        });
    
      setCookingTime(Math.max(...cookingTimesArray))
        setSubTotal(subttl)
        setOrderTotal(subttl+ConvenienceCharge)
     
    }, [cartItems])
    useEffect(() => {
      let time=Hour+":"+Minute
      let id= selectedTime
      // let id= selectedTime.id
      if(id===0){
      // if(id===1){
        setWantAt("now")
    }else{
      // const now = new Date();
      // let testDate=date.parse(date.format(now, 'MMM DD YYYY') +" "+finalTime, 'MMM DD YYYY hh:mm');
        // setWantAt(testDate.toString())
        setWantAt(finalTime)
        
    }
    //   if(id===1){
    //     setWantAt("now")
    // }else{
    //     setWantAt(time)

    // }
  
    // console.log(testDate)

    }, [Hour,Minute,selectedTime,finalTime])
    useEffect(()=>{
      // console.log(isAuthenticated)
        if(WantAt!==""){
         dispatch(saveOrderInfo({WantAt,Suggestion}))
        }
    },[WantAt,Suggestion])



    
    // initiate papyment
    const initiatePayment=async(e)=>{
      e.preventDefault()
      const nowDate = new Date();
      // console.log(nowDate)
      const shopOpenDate=date.parse(date.format(nowDate, 'MMM DD YYYY') +" "+cartShopTimings.cartShopOpenTime, 'MMM DD YYYY HH:mm');
      const shopCloseDate=date.parse(date.format(nowDate, 'MMM DD YYYY') +" "+cartShopTimings.cartShopCloseTime, 'MMM DD YYYY HH:mm');
       
    const openTimeDiff=  date.subtract(nowDate,shopOpenDate).toMinutes()
    const closeTimeDiff=  date.subtract(shopCloseDate,nowDate).toMinutes()
     if(openTimeDiff<0||closeTimeDiff<0){
      toast.error("shop closed,but later")
      return
    }
        
      

      setCartBtnDisabled(true)
      // const data1={SubTotal,ConvenienceCharge,OrderTotal};
      // sessionStorage.setItem("orderInfo",JSON.stringify(data1));


     
   
      let oid=Math.floor(Math.random()*Date.now())
// get transaction token

      // const conf={headers:{"Content-Type":"application/json"},withCredentials: true}

      // const a=await axios.post(`http://localhost:4000/api/v1/payment/pretransaction`,{cartItems,OrderTotal,oid,email:"email"},conf)

// const data={cartItems,OrderTotal,oid,cartShop,email:"email"};
const data={cartItems,cookingTime,cartShopName,OrderTotal,oid,cartShop,email:"email",orderInfo:{wantFoodAt:WantAt,description:Suggestion},SubTotal,ConvenienceCharge,OrderTotal};
let a= await fetch("http://localhost:4000/api/v1/payment/pretransaction",{method:'POST',credentials: 'include',headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
}) 

      let txnRes=await a.json();
      // console.log(txnRes)
      if(txnRes.success){
        // toast.error(txnRes.message);
        // return
      
      let txnToken=txnRes.txnToken;


    
      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
        "orderId": oid, /* update order id */
        "token":txnToken, /* update token value */
        "tokenType": "TXN_TOKEN",
       
        "amount": OrderTotal /* update amount */
        },
        "handler": {
          "notifyMerchant": function(eventName,data){
            console.log("notifyMerchant handler function called");
            console.log("eventName => ",eventName);
            if(eventName==="APP_CLOSED"){
              setCartBtnDisabled(false)
              try {

                const deleteFunction=async()=>{
                
                  const Deleteconf={headers:{"Content-Type":"application/json"},withCredentials: true}

      // await axios.delete(`http://localhost:4000/api/v1/${cartShop}/order/${oid}/beforePayment`,{withCredentials: true})
    }

    deleteFunction()
              } catch (error) {
                toast.error(error.response.data.message)
              }
            }
            console.log("data => ",data);
          } 
        }
      };

  
              window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                  // after successfully updating configuration, invoke JS Checkout
                  window.Paytm.CheckoutJS.invoke();
              
              }).catch(function onError(error){
                  console.log("error => ",error);
              });
  
            }else{
                toast.error(txnRes.message);
                setCartBtnDisabled(false)
            }




    } 
    return (
      
        <>
     
        {/* loading scripts of ppaytmPayment */}
        <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>

<Script type="application/javascript" crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${cartShopMid}.js`} /> 
{/* <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} />  */}


 


        
        {cartItems.length===0?( <>
              <Link href={`/`}>
              <ChevronDoubleLeftIcon className="w-8"/>
              </Link>
          
       </> ):(
            <div className="bg-white">
              {/* <Link href={`/`}>
     
            <ChevronDoubleLeftIcon className="w-8"/>
            </Link> */}

            <div className="flex justify-between bg-white drop-shadow-lg rounded-b-primary sticky top-0 z-20  py-3 px-3">
            <Link href={`/`}>
              <ChevronDoubleLeftIcon className="w-8 ml-1"/>
              </Link>
              <div className="flex  flex-col ">
          <p className='text-lg font-bold'>{cartShopName}</p>
          <p className="text-center text-secondary-text-gray text-xs">LPU</p>
        </div>
        <div></div>
       
              </div>



        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl px-3 font-extrabold tracking-tight text-gray-900 ">Your Order😄 </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section  aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
       
              <ul  role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <CartCard key={product.product}  product={product} />


                ))}
              </ul>
             
            </section>


            <section
              aria-labelledby="summary-heading"
              className="mt-1  rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
              {/* here options and suggestion */}
                    
<div>
                    <div>

                    <RadioGroup value={selectedTime} onChange={setSelectedTime}>
      {/* <RadioGroup.Label className="text-base font-medium text-gray-900">Select a mailing list</RadioGroup.Label> */}

      <div className="mt-4 grid grid-cols-2 gap-y-6 gap-x-4">
        {/* {timeOptionsLists.map((mailingList,i) => ( */}



          <RadioGroup.Option
           
            value={0}
            // value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-dashed border-4 border-gray-300',
                active ? 'border-pri-orange ring-2 ring-pri-orange' : '',
                'relative bg-white border rounded-medium shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                {/* <div className=" flex"> */}
                  <div className="flex justify-center w-full flex-col">
                    <RadioGroup.Label as="span" className="block text-lg font-bold text-center text-pri-text-gray">
                      for now
                    </RadioGroup.Label>
                 
                <div className="flex justify-center w-full">
                  <p className="text-pri-text-light-gray self-center text-7xl font-bold"> 35</p>
                  <p className="text-pri-text-light-gray self-center text-base font-medium"> min <br /> (Aprox.)</p>

                </div>
                 

                  </div>
                {/* </div> */}
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', ' w-8 absolute top-1 right-1 fill-pri-orange')}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? 'border' : 'border-4',
                    checked ? 'border-pri-orange rounded-medium' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
      

          <RadioGroup.Option
     
            value={1}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : ' border-dashed border-4 border-gray-300',
                active ? 'border-pri-orange ring-2 ring-pri-orange' : '',
                'relative bg-white border rounded-medium shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                {/* <div className=" flex"> */}
                  <div className="flex justify-center self-center w-full flex-col">
                    <RadioGroup.Label as="span" className="block text-lg font-bold text-center text-pri-text-gray">
                      Want it later
                    </RadioGroup.Label>
                  
               <Timepicker setfinalTime={setfinalTime} setHour={setHour} setMinute={setMinute}/>
                   
                 

                  </div>
                {/* </div> */}
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', ' w-8 absolute top-1 right-1 fill-pri-orange')}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? 'border' : 'border-4',
                    checked ? 'border-pri-orange rounded-medium' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
      
      
      
      
      
      {/* ))} */}
      </div>
    </RadioGroup>
                    </div>

                    <div>
    
      <div className="mt-4">
        <textarea
          rows={1}
          placeholder="Any suggestionss..."
          name="comment"
          id="comment"
          className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  p-1 border-b-2 rounded-md"
          defaultValue={''}
          onChange={(e)=>{setSuggestion(e.target.value)}}
        />
      </div>
    </div>
    </div>


                    <div className="mt-12 lg:mt-0">
              {/* Order summary */}
              {/* <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
              </h2> */}


  
              <dl className="mt-6  space-y-1 border-dashed border-y-[3px] border-sec-orange py-4 ">
                <div className="flex items-center justify-between">
                  <dt className="text-sm font-medium text-sec-text-gray">Subtotal</dt>
                  <dd className="text-sm font-medium text-sec-text-gray">₹{SubTotal}</dd>
                </div>
               
                <div className=" pt-4 flex items-center justify-between">
                  <dt className="flex text-sm font-medium text-sec-text-gray">
                    <span>Convenience charge</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how tax is calculated</span>
                      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-sec-text-gray">₹{ConvenienceCharge}</dd>
                </div>
                <div className=" pt-4 flex items-center justify-between">
                  <dt className="text-lg font-bold text-pri-text-gray">Order total</dt>
                  <dd className="text-lg font-bold text-pri-text-gray">₹{OrderTotal}</dd>
                </div>
              </dl>
  
              {/* <div className="mt-6">
                <button
                  onClick={initiatePayment}
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Checkout
                </button>
              </div> */}

{!isAuthenticated?(
<div     className="flex flex-col cursor-pointer fixed bottom-0 left-0 shadow-test rounded-b-primary justify-center rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow  w-full  py-3 px-20">
  <div className=" w-full justify-center mt-2 flex">
<GoogleLogin
          
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          useOneTap
          
        
        />
        </div>

              <p className=" text-white text-lg mt-2 font-semibold text-center" > login to Place order </p>
        
            </div>
            ):(

<button disabled={CartBtnDisabled}  onClick={initiatePayment}  className="flex cursor-pointer fixed bottom-0 left-0 shadow-test rounded-b-primary justify-center rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow  w-full  py-3 px-20">
{CartBtnDisabled?(
  <>
  <span 
        className="w-6 my-auto mr-3 aspect-square border-4 border-white border-dashed rounded-full animate-spin"></span>

              <p className=" text-white text-lg font-semibold text-center" > just a sec, v r creating order </p>
        
  </>
):(<>
              <p className=" text-white text-lg font-semibold text-center" > Pay - {OrderTotal} </p>
        
              </>
            )}
            </button>
            )}
{/* <div  onClick={initiatePayment}  className="flex cursor-pointer fixed bottom-0 left-0 shadow-test rounded-b-primary justify-center rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow  w-full  py-3 px-20">
              <p className=" text-white text-lg font-semibold text-center" > Pay - {OrderTotal} </p>
        
            </div> */}

              </div>
              
            </section>
          </form>
        </div>
      </div>
        
        )}

        </>
    )
}



export default Cart





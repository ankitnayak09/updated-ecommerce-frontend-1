import Image from "next/image"
import { useSelector } from "react-redux"
import { PencilIcon } from '@heroicons/react/solid'

const MyProfile = () => {
    const {user,loading,isAuthenticated}=useSelector(state=>state.user)
    return (
        <>
        {loading===false&&
        <div className="pt-28 pb-32 sticky top-0 -z-10  bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow flex flex-col  ">
            <div className="flex w-full">
        <div className="flex bg-sec-light-orange h-44 rounded-l-full ml-10 py-3 pl-3 flex-grow self-center ">
            <div className="aspect-square h-full rounded-full relative ">
              {/* {loading===false&&isAuthenticated===true&&   */}
                      <Image src={user?.avatar}
                      layout="fill"
                      className="rounded-full "
                      />
                {/* }  */}
                
            </div>
            <div className="flex flex-col self-center pl-4 w-full">
<p className="border-b border-sec-orange pb-1 ">Hello <span className="font-bold"> {user.name}</span>👋</p>
<p className="border-b border-sec-orange pb-1 mt-3">Role - <span className="font-bold"> {user.admin===[]?"User":"Admin"}</span></p>
<p className="border-b border-sec-orange pb-1 mt-3">{user.email}</p>
            </div>

        </div>
        </div>
        
        <button  className=" cursor-pointer border-dashed w-32 rounded-small py-1 mt-8 self-center border-[3px] border-[#ECECEC] text-[#FFEFF0] flex justify-center">
                Edit profile <PencilIcon className="w-5 self-center ml-2"/>
            </button>



        </div>
   
    }   </>  )
}

export default MyProfile

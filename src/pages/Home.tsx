import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootState } from "../redux/store/store";
import { counterActions } from "../redux/counter/counterSlice";
import { ChangeEvent, useState } from "react";


function Home() {

    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state:AppRootState)=>state.counter.value);
    const [amount, setAmount]= useState(0);

    const handleChange = (evt:ChangeEvent<HTMLInputElement>)=>{
        setAmount(+evt.target.value)
    }

    const handleSubmit = ()=>{
          dispatch(counterActions.incrementAmount(amount));
          setAmount(0);
    }
  return (
  <div>
       <div className="flex items-center justify-end gap-4">
            <a className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px]' href="/category">Category</a>
            <a className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px]' href="/product">Products</a>
        </div>

    <div className='mt-[100px] '>
        
        <button 
        className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px]'
        onClick={()=>dispatch(counterActions.increment())} >
            +
        </button>
        <h1>{count}</h1>
        <button 
        className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px] mb-4'
        onClick={()=>dispatch(counterActions.decrement())}>
            -
            </button>
            <br />
        <input className=' p-4 bg-gray-200 runded-md' type="number" value={amount} onChange={handleChange} />
        <br />
        <button 
        className='w-[200px] p-2 bg-teal-500 rounded-md text-white text-[21px] mt-4'
        onClick={handleSubmit}>
            Add amount
            </button>
    </div>
  </div>
  )
}

export default Home
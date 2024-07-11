import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppRootState } from '../redux/store/store'
import { fetchCategories, ICategory } from '../redux/category/categorySlice';

function Category() {

    const categories:ICategory[] = useSelector((state:AppRootState)=>state.category.value)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])



  return (
    <div className=' grid grid-cols-4 '>
        {
            categories.map((c)=>(
                 <div key={c.id} className=' bg-white p-4 shadow-xl w-[300px]  mb-3 '>
                    <img src={c.image} alt={c.name} width={300} height={300} />
                    <p>{c.name}</p>
                 </div>
            ))
        }
    </div>
  )
}

export default Category
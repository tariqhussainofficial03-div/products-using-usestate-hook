import { useState } from "react"

 
function Products({products, getProducts, setProducts,productItem }) {


const [cartBtn, setCartBtn] = useState(null)

function addToCart(clickedBtn){
  
  setCartBtn((prev)=>(clickedBtn))
  alert(`${clickedBtn} was added`)

}

if(getProducts==='All'){
 productItem = products.map((obj, idx)=>{

    return  (
    <div  key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]'   onClick={()=>{addToCart(obj.name)}} >Add To Cart</button>
      </div>

      
  </div>  )
})
  
  }

  else if(getProducts==='Electronics'){
 productItem = products.map((obj, idx)=>{
      if(obj.category==='Electronics'){
    return  (
    <div  key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]'  onClick={()=>{addToCart(obj.name)}}  >Add To Cart</button>
      </div>

      
  </div>  )
  }
})
  }

  else if(getProducts==='Clothing'){
 productItem = products.map((obj, idx)=>{
      if(obj.category==='Clothing'){
    return  (
    <div key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]' onClick={()=>{addToCart(obj.name)}} >Add To Cart</button>
      </div>

      
  </div>  )
  }
})
  }

 else if(getProducts==='Accessories'){
 productItem = products.map((obj, idx)=>{
      if(obj.category==='Accessories'){
    return  (
    <div key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]' onClick={()=>{addToCart(obj.name)}} >Add To Cart</button>
      </div>

      
  </div>  )
  }
})
  }

else if(getProducts==='Home & Living'){
 productItem = products.map((obj, idx)=>{
      if(obj.category==='Home & Living'){
    return  (
    <div key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]' onClick={()=>{addToCart(obj.name)}} >Add To Cart</button>
      </div>

      
  </div>  )
  }
})
  }

  else if(getProducts==='Beauty'){
 productItem = products.map((obj, idx)=>{
      if(obj.category==='Beauty'){
    return  (
    <div key={obj.id} className="w-full h-fit border border-slate-400 rounded-xl shadow-xl">
     <div className="h-50 w-full " > 
    <img className="h-full w-full object-cover rounded-tl-xl rounded-tr-xl" key={idx} src={obj.image} alt="Product-image" />
    </div>

      <p className="p-3 font-medium">{obj.name}</p>

      <div className=" flex justify-between px-3 pb-3">
        <span className="font-bold">Price: ${obj.price}</span>
        <button  className='py-1 px-3 rounded-3xl bg-slate-800 text-white text-[15px]' onClick={()=>{addToCart(obj.name)}}  >Add To Cart</button>
      </div>

      
  </div>  )
  }
})
  }



  return (
    <div className="w-[95%] sm:w-[90%] mx-auto  grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {productItem}
         
    </div>
  )
  
}

export default Products
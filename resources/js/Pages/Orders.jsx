import HeaderFooter from '@/Layouts/HeaderFooter'
import React from 'react'

function Orders() {
  return (
    <div className="flex justify-between items-center w-[1102px] relative overflow-hidden px-[17px] py-2.5 bg-white">
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-20 h-[35px] relative overflow-hidden gap-2.5 rounded-[7px] bg-[#fd0000]">
    <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-left text-white">حذف</p>
  </div>
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[19px]">
    <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-left text-black">-</p>
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[18px] relative overflow-hidden gap-2.5 px-[5px] bg-[#f6f5f5]">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-2 text-[17px] font-light text-left text-black">
        1
      </p>
    </div>
    <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-left text-black">+</p>
  </div>
  <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-left text-black">نام محصول</p>
  <div className="flex-grow-0 flex-shrink-0 w-[74px] h-[60px] relative overflow-hidden bg-[#f6f6f6]" />
</div>
  )
}
Orders.layout = function(pages){
return <HeaderFooter child={pages}/>
}
export default Orders
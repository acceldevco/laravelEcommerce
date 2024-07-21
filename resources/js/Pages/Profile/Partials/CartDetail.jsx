//

import React from "react";

function CartDetail() {
    return (
        <div className="flex justify-between bg-slate-200 items-center w-[926px] relative overflow-hidden px-[18px] py-[9px] rounded-[7px] ">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[47px] w-20 overflow-hidden gap-2 rounded-[11px] bg-[#c7b1ff]">
                <div className="flex justify-center items-center self-stretch flex-grow relative gap-2 px-6 py-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">
                        جزئیات
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-5 w-16 overflow-hidden gap-2 rounded-[11px] bg-[#aff4c6]">
                <div className="flex justify-center items-center self-stretch flex-grow relative gap-2 px-6 py-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-center text-[#14ae5c]">
                        وضعیت
                    </p>
                </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-center text-black">
                تعداد
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-center text-black">
                مبلغ کل
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-[71px] h-[52px] relative overflow-hidden rounded-lg bg-[#e0e0e0]" />
        </div>
    );
}

export default CartDetail;

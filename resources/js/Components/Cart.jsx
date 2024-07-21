import React from "react";

function Cart() {
    return (
        <div className="flex justify-start items-center overflow-hidden gap-2.5 px-[27px] border  py-[9px] bg-white">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  relative gap-4">
                <div className="self-stretch flex-grow-0 flex-shrink-0 [w-[305px] h-[291px]] relative overflow-hidden rounded-[7px] bg-[#ececec]" />
                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0  relative">
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[47px] w-[47px] relative overflow-hidden gap-2.5 py-[7px] rounded-[27px] bg-[#fc0000]">
                        <p className="flex-grow-0 flex-shrink-0  text-[13px] font-bold text-left text-white">
                            20%
                        </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-thin text-left text-black">
                        نام محصول
                    </p>
                </div>
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[7px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 text-[13px] font-thin text-left text-black">
                        20000 تومان
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0  text-[13px] font-thin text-left text-black">
                        2000 تومان
                    </p>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative overflow-hidden gap-2.5 px-[50px] bg-[#e2e2e2]">
                    <p className="flex-grow-0 flex-shrink-0 text-[30px] font-thin text-left text-black">
                        +
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cart;

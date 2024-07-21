import Cart from "@/Components/Cart";
import HeaderFooter from "@/Layouts/HeaderFooter";
import React from "react";

function Products() {
    return (
        <div
            dir="ltr"
            className="w-full flex overflow-hidden gap-[11px] bg-white"
        >
            <div className="flex  justify-end items-start grow  overflow-hidden gap-2.5 px-3.5 py-4 bg-[#f4f4f4]/[0.39]">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
            <div className="flex flex-col justify-start items-center flex-grow-0   relative overflow-hidden gap-[33px] py-[21px] bg-[#f0f0f0]">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[244px] text-[17px] font-light text-center text-black">
                    جستجو:
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-[206px] h-[37px] relative overflow-hidden bg-white" />
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[244px] text-[17px] font-light text-center text-black">
                    فیلتر:
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[225px] text-[17px] font-light text-right text-black">
                    دسته بندی
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[228px] text-[17px] font-light text-right text-black">
                    قیمت
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[231px] text-[17px] font-light text-right text-black">
                    برند
                </p>
                <p className="flex-grow-0 flex-shrink-0 w-[231px] text-[17px] font-light text-right text-black">
                    تخفیف ها
                </p>
            </div>
        </div>
    );
}

Products.layout = function (params) {
    return <HeaderFooter child={params} />;
};

export default Products;

import React from "react";
import CategoryAU from "./Partials/CategoryAu";
import CartDetail from "./Partials/CartDetail";
import { Tabs } from "antd";
import MenuLayout from "./layout/MenuLayout";

function OrdersAu({ cate, num, cal, data, form, products, data2 }) {
    console.log(data2);
    return (
        <div dir="ltr" className="flex  overflow-hidden gap-[54px] bg-white">
            <div className="flex flex-col justify-start items-center grow  gap-[21px] p-5">
                <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 h-11 relative gap-[18px] px-[17px] py-2">
                    <p className="self-stretch flex-grow-0 flex-shrink-0  text-[22px] font-light text-center text-black">
               افزودن
                    </p>
                </div>

                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={[
                        {
                            label: `افزودن کلی`,
                            key: 1,
                            children: (
                                <form
                                    onSubmit={(e) => (
                                        e.preventDefault(), console.log(e)
                                    )}
                                    className="flex flex-col justify-start grow-0 items-center self-stretch  h-44 relative gap-4"
                                >
                                    <p className="self-stretch flex-grow-0 flex-shrink-0  text-3xl font-light text-center text-black">
                                        افزودن csv
                                    </p>
                                    <input
                                        type="file"
                                        name=""
                                        id=""
                                        placeholder=""
                                    />
                                    {/* <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[71px] relative overflow-hidden gap-2.5 px-[199px] py-[3px] border border-[#0047ff] border-dashed">
                                        <p className="flex-grow-0 flex-shrink-0 text-3xl font-light text-center text-[#06f]">
                                            +
                                        </p>
                                    </div> */}
                                    <button
                                        type="submit"
                                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[111px] relative overflow-hidden gap-2.5 px-[52px] py-[5px] bg-[#0688ff]/[0.69]"
                                    >
                                        <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-white">
                                            ثبت csv
                                        </p>
                                    </button>
                                </form>
                            ),
                        },
                        {
                            label: `افزودن تکی`,
                            key: 2,
                            children: (
                                <form
                                    onSubmit={(e) => (
                                        e.preventDefault(), console.log(e)
                                    )}
                                    className="flex flex-col gap-5"
                                >
                                    <button
                                        type="submit"
                                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[207px] h-[47px] relative overflow-hidden gap-2.5 px-[81px] rounded-lg bg-[#0688ff]/70"
                                    >
                                        <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-white">
                                            ثبت
                                        </p>
                                    </button>
                                    <div className="flex gap-2">
                                        <CategoryAU show={cate} />
                                        <div className="flex justify-center items-start grow gap-[13px]">
                                            <div className="flex flex-col justify-start items-center grow gap-[49px]">
                                                {/* <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[166px] relative overflow-hidden gap-2.5 px-[199px] py-[3px] border border-[#0047ff] border-dashed">
                                    <p className="flex-grow-0 flex-shrink-0 font-light text-center text-[#06f]">
                                        <span className="flex-grow-0 flex-shrink-0 text-3xl font-light text-center text-[#06f]">
                                            +
                                        </span>
                                        <br />
                                        <span className="flex-grow-0 flex-shrink-0 text-base font-light text-center text-[#06f]">
                                            افزودن عکس محصول
                                        </span>
                                    </p>
                                </div> */}
                                                <input
                                                    type="file"
                                                    name=""
                                                    id=""
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="flex flex-col justify-start items-start grow overflow-hidden gap-2.5 px-[19px] py-[26px] bg-neutral-50">
                                                {[...form].map((d, i) => (
                                                    <div
                                                        className="flex  grow relative"
                                                        key={i}
                                                    >
                                                        <input
                                                            type="text"
                                                            name={d}
                                                            id=""
                                                            placeholder={d}
                                                        />
                                                        {/* <div className="flex-grow-0 flex-shrink-0 w-[275.12px] h-[41px] bg-[#d9d9d9]" /> */}
                                                        <p className="flex-grow-0 flex-shrink-0 w-[83.92px] text-[17px] font-light text-center text-black">
                                                            {d}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ),
                        },
                    ]}
                />
                {data2.map((d, i) => (
                    <CartDetail
                        key={i}
                        cal={cal}
                        number={num}
                        data={d}
                        form={form}
                        router={["delete", "edit"]}
                    />
                ))}
            </div>
        </div>
    );
}
OrdersAu.layout = function (data) {
    return <MenuLayout child={data} />;
};
export default OrdersAu;

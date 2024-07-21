import React from "react";

function CategoryAU({ show }) {
    return (
        <>
            {show && (
                <div className="flex flex-col justify-start items-start grow-0   overflow-hidden py-[33px] bg-[#ececec]">
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[29px]">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[334px] text-[17px] font-light text-center text-black">
                            دسته ها
                        </p>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[247px] w-[235px] overflow-hidden gap-[13px] bg-[#c8c7c7]">
                            <div className="flex justify-end items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                            <div className="flex justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                            <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[29px]">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[334px] text-[17px] font-light text-center text-black">
                            برندها
                        </p>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[247px] w-[235px] overflow-hidden gap-[13px] bg-[#c8c7c7]">
                            <div className="flex justify-end items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                            <div className="flex justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                            <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px]">
                                <p className="flex-grow-0 flex-shrink-0 text-[17px] font-light text-center text-black">
                                    تست1
                                </p>
                                <div className="flex-grow-0 flex-shrink-0 w-[17px] h-[17px] bg-white" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CategoryAU;

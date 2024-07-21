// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

// export default function Dashboard({ auth }) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">You're logged in!</div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

import React from "react";

function Dashboard({child}) {
    return (
        <div
            dir="ltr"
            className="flex w-full  relative overflow-hidden gap-[13px] px-[9px] py-[7px] "
        >
            <div className="grow  relative overflow-hidden rounded-[11px] bg-[#efefef]" >
                {child}
            </div>

            <div className="flex flex-col  justify-start items-center grow-0   relative overflow-hidden gap-[19px] py-1.5 rounded-[7px] bg-[#0063f8]/[0.58]">
                <div className="flex-grow-0 flex-shrink-0 w-[103px] h-[98px] relative overflow-hidden rounded-[53px] bg-white" />
                <div className="flex flex-col justify-start p-1 items-end  grow overflow-hidden gap-5 py-[26px] rounded-[11px] bg-white/[0.24]">
                    {[0, 1, 2].map((d) => (
                        <div className="flex hover:bg-[#0063f8]/[0.58] p-2 rounded-md cursor-pointer justify-between items-center flex-grow-0 flex-shrink-0 w-[238px] relative px-[15px]">
                            <svg
                                width={11}
                                height={17}
                                viewBox="0 0 11 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M10.33 14.5793L4.25171 8.50102L10.33 2.42273L8.45415 0.546875L0.5 8.50102L8.45415 16.4552L10.33 14.5793Z"
                                    fill="black"
                                />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 w-[63px] text-[17px] font-light text-left text-black">
                                داشبورد
                            </p>
                            <svg
                                width={20}
                                height={19}
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M0.5 10.5556H8.94444V0H0.5V10.5556ZM0.5 19H8.94444V12.6667H0.5V19ZM11.0556 19H19.5V8.44444H11.0556V19ZM11.0556 0V6.33333H19.5V0H11.0556Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative px-4 py-2">
                    <svg
                        width={19}
                        height={20}
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M10.2141 0.000359222C10.7641 -0.00964078 11.2851 0.189359 11.6741 0.570359C12.0651 0.939359 12.2741 1.45036 12.2741 1.99036C12.2741 3.09036 13.1841 3.98136 14.3151 3.98136C14.6641 3.98136 15.0141 3.88036 15.3251 3.71036C16.2941 3.18936 17.5041 3.52036 18.0541 4.45036L18.7351 5.62036C18.9051 5.92036 19.0041 6.26036 19.0041 6.61036C19.0041 7.32036 18.6151 7.98136 17.9851 8.33036C17.6741 8.50036 17.4141 8.76036 17.2351 9.06136C16.7041 10.0004 17.0351 11.1894 17.9851 11.7314C18.9441 12.2804 19.2741 13.4814 18.7351 14.4304L18.0541 15.5614C17.6941 16.1804 17.0241 16.5614 16.3041 16.5614C15.9441 16.5614 15.5841 16.4704 15.2851 16.2904C14.9641 16.1204 14.6151 16.0204 14.2641 16.0204C13.7241 16.0204 13.2041 16.2314 12.8251 16.6104C12.4341 16.9814 12.2241 17.4904 12.2241 18.0204C12.2241 19.1104 11.3151 20.0004 10.1841 20.0004H8.81513C8.27413 20.0004 7.76413 19.7804 7.39413 19.4104C7.01413 19.0304 6.81513 18.5304 6.81513 18.0104C6.81513 16.9104 5.91413 16.0204 4.78513 16.0204C4.41413 16.0204 4.05413 16.1204 3.74413 16.3114C3.27413 16.5704 2.71413 16.6404 2.19413 16.5104C1.67413 16.3704 1.22413 16.0304 0.954129 15.5804L0.315129 14.4504C0.0141288 13.9814 -0.0758712 13.4204 0.0651288 12.8904C0.204129 12.3604 0.565129 11.9104 1.05413 11.6404C1.36513 11.4704 1.62413 11.2204 1.80413 10.9104C2.32513 9.97036 1.99413 8.79036 1.05413 8.24036C0.104129 7.70036 -0.225871 6.51036 0.315129 5.57036L0.954129 4.45036C1.22413 3.98136 1.67413 3.64036 2.20413 3.50036C2.73513 3.36036 3.29413 3.43936 3.76413 3.71036C4.08413 3.88036 4.43413 3.97036 4.78513 3.97036C5.32513 3.97036 5.84413 3.76036 6.22413 3.39036C6.60413 3.02036 6.81513 2.51036 6.81513 1.99036C6.81513 0.890359 7.72413 0.000359222 8.85413 0.000359222H10.2141ZM10.6151 7.48136C9.56513 7.05036 8.35413 7.28036 7.54413 8.07036C6.74413 8.85036 6.49413 10.0404 6.93413 11.0614C7.36513 12.0904 8.38413 12.7604 9.52413 12.7604H9.53513C10.2851 12.7704 10.9851 12.4814 11.5141 11.9604C12.0441 11.4504 12.3441 10.7504 12.3441 10.0204C12.3541 8.91036 11.6641 7.90036 10.6151 7.48136Z"
                            fill="#200E32"
                        />
                    </svg>
                    <svg
                        width={19}
                        height={20}
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[19px] h-[19.26px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M9.48605 20.004C7.59242 20.0025 5.7425 19.4347 4.17406 18.3737C2.60562 17.3126 1.39033 15.8068 0.684383 14.0496C-0.0215647 12.2925 -0.185909 10.3644 0.21247 8.51317C0.61085 6.66191 1.55375 4.97209 2.91999 3.66089C2.96318 3.61734 3.01458 3.58277 3.07121 3.55918C3.12783 3.53558 3.18857 3.52344 3.24991 3.52344C3.31126 3.52344 3.372 3.53558 3.42862 3.55918C3.48525 3.58277 3.53665 3.61734 3.57984 3.66089C3.66639 3.74796 3.71497 3.86573 3.71497 3.9885C3.71497 4.11126 3.66639 4.22904 3.57984 4.3161C2.34574 5.49791 1.49359 7.02203 1.13309 8.69227C0.772578 10.3625 0.920213 12.1024 1.55699 13.6881C2.19376 15.2737 3.29052 16.6324 4.7061 17.5894C6.12168 18.5464 7.79128 19.0578 9.49999 19.0578C11.2087 19.0578 12.8783 18.5464 14.2939 17.5894C15.7095 16.6324 16.8062 15.2737 17.443 13.6881C18.0798 12.1024 18.2274 10.3625 17.8669 8.69227C17.5064 7.02203 16.6542 5.49791 15.4201 4.3161C15.3336 4.22904 15.285 4.11126 15.285 3.9885C15.285 3.86573 15.3336 3.74796 15.4201 3.66089C15.4633 3.61734 15.5147 3.58277 15.5714 3.55918C15.628 3.53558 15.6887 3.52344 15.7501 3.52344C15.8114 3.52344 15.8721 3.53558 15.9288 3.55918C15.9854 3.58277 16.0368 3.61734 16.08 3.66089C17.4479 4.97374 18.3915 6.66612 18.789 8.51999C19.1865 10.3739 19.0198 12.3043 18.3104 14.0626C17.601 15.8209 16.3813 17.3265 14.8086 18.3854C13.2359 19.4443 11.3821 20.0081 9.48605 20.004Z"
                            fill="#FF0000"
                        />
                        <path
                            d="M9.48593 11.3038C9.36269 11.3038 9.24449 11.2549 9.15734 11.1677C9.0702 11.0806 9.02124 10.9624 9.02124 10.8392V1.21078C9.02124 1.08754 9.0702 0.969344 9.15734 0.882198C9.24449 0.795052 9.36269 0.746094 9.48593 0.746094C9.60917 0.746094 9.72737 0.795052 9.81452 0.882198C9.90166 0.969344 9.95062 1.08754 9.95062 1.21078V10.8392C9.95062 10.9624 9.90166 11.0806 9.81452 11.1677C9.72737 11.2549 9.60917 11.3038 9.48593 11.3038Z"
                            fill="#FF0000"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

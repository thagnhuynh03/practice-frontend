import { Button } from "antd";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

export default function SummaryPage() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#ebf1ff] text-white">
            <div className="w-full max-w-2xl flex flex-col sm:flex-row sm:rounded-3xl bg-white h-auto">
                <div className="flex-1 bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-3xl flex flex-col gap-5 justify-center items-center py-7 px-10">
                    <div className="font-bold text-[#c8c7ff]">Your result</div>
                    <div className="w-40 h-40 bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] rounded-full flex flex-col justify-center items-center">
                        <span className="text-5xl font-bold">76</span>
                        <span className="text-[#c8c7ff] text-sm">of 100</span>
                    </div>
                    <div className="font-semibold text-2xl">Great</div>
                    <p className="text-[#c8c7ff] text-md text-center">You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className="flex-1 flex flex-col justify-center py-7 px-10 gap-5">
                    <h3 className="text-gray-800 font-bold text-xl">Summary</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between bg-red-50 rounded-xl font-bold p-3">
                            <div className="flex items-center gap-2">
                                <AiOutlineThunderbolt className="text-[#ff5757]"/>
                                <span className="text-[#ff5757]">Reaction</span>
                            </div>
                            <div>
                                <span className="text-gray-950">80 </span>
                                <span className="text-[#c8c7ff]">/ 100</span>
                            </div>
                        </div>
                        <div className="flex justify-between bg-yellow-50 rounded-xl font-bold p-3">
                            <div className="flex items-center gap-2">
                                <LuBrain className="text-[#ffb01f]" />
                                <span className="text-[#ffb01f]">Memory</span>
                            </div>
                            <div>
                                <span className="text-gray-950">92 </span>
                                <span className="text-[#c8c7ff]">/ 100</span>
                            </div>
                        </div>
                        <div className="flex justify-between bg-green-50 rounded-xl font-bold p-3">
                            <div className="flex items-center gap-2">
                                <BiMessageRoundedMinus className="text-[#00bd91]"/>
                                <span className="text-[#00bd91]">Verbal</span>
                            </div>
                            <div>
                                <span className="text-gray-950">61 </span>
                                <span className="text-[#c8c7ff]">/ 100</span>
                            </div>
                        </div>
                        <div className="flex justify-between bg-blue-50 rounded-xl font-bold p-3">
                            <div className="flex items-center gap-2">
                                <IoEyeOutline className="text-[#1125d4]" />
                                <span className="text-[#1125d4]">Visual</span>
                            </div>
                            <div>
                                <span className="text-gray-950">73 </span>
                                <span className="text-[#c8c7ff]">/ 100</span>
                            </div>
                        </div>
                    </div>
                    <Button type="primary" href="/" className="!font-medium !bg-[#303b5a] hover:!bg-[#2e2be9] !py-5 !rounded-3xl">Continue</Button>
                </div>
            </div>
        </div>
    );
}
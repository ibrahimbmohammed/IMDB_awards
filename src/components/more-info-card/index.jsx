import { AiOutlineLineChart } from "react-icons/ai";
const MoreCard = ({ chart, handleChange }) => {
  return (
    <div className="flex flex-col">
      <p className="pb-1 text-[#E0FFFF] text-lg font-normal">More</p>
      <div className="border border-[#3F81A4]  w-[18rem] h-[10rem] p-3 lg:min-h-[10rem] lg:w-[24rem] flex items-end justify-end">
        <button
          onClick={() => handleChange()}
          className={`px-8 py-3 border ${
            chart
              ? "border-[#4BA5CA] text-[#E0FFFF]  hover:bg-[#4BA5CA]"
              : "border-[#D12F6A] text-[#D12F6A] hover:bg-[#D12F6A]"
          }  text-xs hover:text-white flex space-x-4 items-center`}
        >
          <AiOutlineLineChart className="text-lg" />
          <span>{chart ? "line" : "bar"}</span>
        </button>
      </div>
    </div>
  );
};

export default MoreCard;

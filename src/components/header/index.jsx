import { GiSmallFire } from "react-icons/gi";
const Header = () => {
  return (
    <div className="w-full h-16 flex flex-col items-center justify-center sticky top-0 border-b border-[#253652]">
      <span className="">
        <GiSmallFire className="text-[#D12F6A] text-5xl " />
      </span>
    </div>
  );
};

export default Header;

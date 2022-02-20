const StatCard = ({ Obj }) => {
  const years = [...Object.keys(Obj)];
  const values = [...Object.values(Obj)];
  return (
    <div className="flex flex-col">
      <p className="pb-1 text-[#E0FFFF] text-lg font-normal">Stats</p>
      <div className="border md:border-none border-[#3F81A4]  w-fit h-[10rem]  lg:min-h-[10rem] lg:w-[24rem]">
        <div className="hidden md:grid grid-rows-2 grid-cols-4 gap-x-0 w-[38rem] ">
          {years?.map((item, i) => (
            <div className="flex flex-col items-baseline  space-y-1">
              <p className="text-[#D12F6A] text-sm font-semibold">{item}</p>
              <p>
                {values[i].map(({ awardName }) => (
                  <p className="w-[10rem] text-[#E0FFFF] text-xs">
                    {awardName}
                  </p>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCard;

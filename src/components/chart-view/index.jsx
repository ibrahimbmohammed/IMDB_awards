const ChartView = ({ children }) => {
  return (
    <div className="w-[90%] lg:w-[70%] min-h-[30rem] flex flex-col items-center justify-center ">
      {children}
    </div>
  );
};

export default ChartView;

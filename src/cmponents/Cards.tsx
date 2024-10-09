interface CardsProps {
  img: string;
  title: string;
  description: string;
}

const Cards: React.FC<CardsProps> = ({ img, title, description }) => {
  return (
    <>
      <div className="w-[92%] bg-white rounded-2xl py-[20px] flex flex-col items-center shadow-xl">
        <div className="w-[90%] h-full space-y-12 text-lg my-[8px]">
          <div className="h-[5%]">
            <img src={img} className="w-[16%]" />
          </div>
          <div className="h-[35%]">
            <h2 className=" font-bold text-xl">{title}</h2>
            <p className="text-sm md:text-lg">{description}</p>
          </div>

          <div className="w-[100%] flex  text-sm md:text-lg space-x-2">
            <p className="w-[30%] bg-[#e2ebfc] rounded text-[#0061ff] font-semibold p-[8px]">
              Full Time
            </p>
            <p className="w-[30%] bg-[#e2ebfc] rounded text-[#0061ff] font-semibold p-[8px]">
              Min 1 Year
            </p>
            <p className="w-[30%] bg-[#e2ebfc] rounded text-[#0061ff] font-semibold p-[8px]">
              Mid Year
            </p>
          </div>
          <button
            className="bg-[#0693e3] flex justify-center items-center w-[60%] md:w-[45%] h-[12%] rounded  font-bold
       text-white "
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;

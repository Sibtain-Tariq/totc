export default function SuccessSection() {
  const stats = [
    { value: "15K+", label: "Students" },
    { value: "75%", label: "Total success" },
    { value: "35", label: "Main questions" },
    { value: "26", label: "Chief experts" },
    { value: "16", label: "Years of experience" },
  ];

  return (
    <section className="bg-white pt-24 pb-16 md:pt-16 md:pb-28 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-[60px] flex flex-col items-center">
        
        {/* Header Content */}
        <h2 className="text-gray-900 text-[26px] md:text-[36px] font-bold text-center">
          Our Success
        </h2>
        
        <p className="text-gray-500 text-[12px] md:text-[17px] text-center max-w-[700px] mt-4 leading-relaxed">
          Omnare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin nec<br className="hidden md:block" />
          nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>

        {/* Statistics Row */}
        <div className="w-full mt-10 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-10 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center w-[40%] md:w-auto text-center">
              <span className="bg-gradient-to-r from-[#248BC2] to-[#42B883] bg-clip-text text-transparent text-[44px] md:text-[59px] font-normal leading-none mb-2">
                {stat.value}
              </span>
             <span className="text-gray-700 text-[16px] md:text-[18px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

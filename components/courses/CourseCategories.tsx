import React from "react";
import Image from "next/image";

interface CategoryData {
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}

const placeholderDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodpiscin elit, sed do eiusmod";

const categories: CategoryData[] = [
  {
    title: "Design",
    desc: placeholderDesc,
    iconBg: "bg-[#c8ebeb]", // light turquoise
    iconColor: "text-[#00C7B7]",
    icon: (
      <Image src="/icons/card1.png" alt="Design" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Development",
    desc: placeholderDesc,
    iconBg: "bg-[#CED5FA]", // light lavender/blue
    iconColor: "text-[#ced5fa]",
    icon: (
      <Image src="/icons/card2.png" alt="Development" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Development",
    desc: placeholderDesc,
    iconBg: "bg-[#e2f0ff]", // light blue
    iconColor: "text-[#2A85FF]",
    icon: (
      <Image src="/icons/card3.png" alt="Development" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Business",
    desc: placeholderDesc,
    iconBg: "bg-[#b3efea]", // light turquoise
    iconColor: "text-[#00C7B7]",
    icon: (
      <Image src="/icons/card4.png" alt="Business" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Marketing",
    desc: placeholderDesc,
    iconBg: "bg-[#FCDDB4]", // light orange
    iconColor: "text-[#F48C06]",
    icon: (
      <Image src="/icons/card5.png" alt="Marketing" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Photography",
    desc: placeholderDesc,
    iconBg: "bg-[#FAD0CE]", // light pink
    iconColor: "text-[#EF6685]",
    icon: (
      <Image src="/icons/card6.png" alt="Photography" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Acting",
    desc: placeholderDesc,
    iconBg: "bg-[#BEBEC6]", // light gray
    iconColor: "text-[#696984]",
    icon: (
      <Image src="/icons/card7.png" alt="Acting" width={20} height={20} className="object-contain" />
    ),
  },
  {
    title: "Business",
    desc: placeholderDesc,
    iconBg: "bg-[#b3efea]", // light turquoise
    iconColor: "text-[#00C7B7]",
    icon: (
      <Image src="/icons/card8.png" alt="Business" width={20} height={20} className="object-contain" />
    ),
  }
];

function CategoryCard({ data }: { data: CategoryData }) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0_12px_25px_rgba(0,0,0,0.09)] flex flex-col items-center text-center p-[20px] md:p-[28px] w-full max-w-[340px] h-[245px] hover:shadow-md transition-shadow cursor-pointer">
      <div className={`w-[50px] h-[50px] rounded-[4px] flex items-center justify-center mb-[14px] ${data.iconBg} ${data.iconColor}`}>
        {data.icon}
      </div>
      <h3 className="text-[#111111] text-[16px] md:text-[22px] font-bold mb-[14px]">
        {data.title}
      </h3>
      <p className="text-[#696984] text-[12px] md:text-[13x] leading-[18px]">
        {data.desc}
      </p>
    </div>
  );
}

export default function CourseCategories() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[60px] md:pt-[80px] pb-[60px] md:pb-[90px]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[50px]">
        
        {/* Heading */}
        <h2 className="text-[#111111] text-[20px] md:text-[22px] font-bold mb-[40px] md:mb-[50px] text-left">
          Choice favourite course from top category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-x-[36px] md:gap-y-[38px] justify-items-center">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} data={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}

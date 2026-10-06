import React from "react";
import Image from "next/image";

export default function CloudSoftwareSection() {
  const features = [
    {
      title: "Online Billing,\nInvoicing, & Contracts",
      description: "Simple and secure control of your\norganization’s financial and legal\ntransactions. Send customized\ninvoices and contracts",
      iconColor: "#5D6FF0",
      icon: (
        <Image src="/icons/File1.png" alt="Online Billing Icon" width={98} height={98} className="object-contain" />
      ),
    },
    {
      title: "Easy Scheduling &\nAttendance Tracking",
      description: "Schedule and reserve classrooms at\none campus or multiple campuses.\nKeep detailed records of student\nattendance",
      iconColor: "#00C7B7",
      icon: (
        <Image src="/icons/calendar2.png" alt="Scheduling Icon" width={98} height={98} className="object-contain" />
      ),
    },
    {
      title: "Customer Tracking",
      description: "Automate and track emails to\nindividuals or groups. Skilline’s\nbuilt-in system helps organize\nyour organization",
      iconColor: "#28AEDD",
      icon: (
        <Image src="/icons/group1.png" alt="Customer Tracking Icon" width={98} height={98} className="object-contain" />
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-24 md:pt-[15px] md:pb-[100px]">
      <div className="max-w-7xl mx-auto px-4 md:px-[60px] flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[32px] md:text-[36px] font-bold text-center leading-tight">
          <span className="text-[#2F378A]">All-In-One</span>
          <span className="text-[#00C7B7]"> Cloud Software.</span>
        </h2>
        
        {/* Section Description */}
        <p className="mt-5 text-[#696984] text-[15px] md:text-[17px] leading-[1.6] text-center max-w-[600px]">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>

        {/* Feature Cards Row */}
        <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-[30px] justify-items-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative w-full max-w-[390px] min-h-[270px] bg-white rounded-xl shadow-[0_13px_45px_rgba(0,0,0,0.12)] pt-[70px] pb-10 px-8 flex flex-col items-center text-center"
            >
              {/* Overlapping Icon */}
             <div 
  className="absolute -top-[28px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] flex items-center justify-center"
>
                {feature.icon}
              </div>
              
              {/* Card Title */}
              <h3 className="text-[#30378A] text-[18px] md:text-[22px] font-semibold md:font-bold whitespace-pre-line leading-snug">
                {feature.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-[#696984] text-[13px] md:text-[16px] leading-[1.6] mt-[18px] whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

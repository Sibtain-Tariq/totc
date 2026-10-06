import React from "react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white pt-10 md:pt-[70px] pb-24 md:pb-[70px]">
      <div className="max-w-7xl mx-auto px-4 md:px-[60px] flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[40px] md:text-[54px] font-bold text-center leading-[1.2]">
          <span className="text-[#30378A]">Our </span>
          <span className="text-[#00C7B7]">Features</span>
        </h2>
        
        <p className="mt-5 text-[#696984] text-[18px] md:text-[22px] leading-[1.6] text-center max-w-[800px]">
          This very extraordinary feature, can make learning activities more efficient
        </p>

        {/* ROW 1: Visual Left / Text Right */}
        <div className="mt-16 md:mt-[60px] w-full flex flex-col md:flex-row items-center max-w-[1400px] justify-between gap-12 md:gap-[140px]">
          
          {/* Left: Video Call Visual */}
          <div className="w-full md:w-[55%] flex justify-center md:justify-start relative">
            <div className="relative w-full max-w-[950px]  h-[550px] sm:h-[450px] md:h-[450px]">
              <Image 
                src="/images/call.png" 
                alt="Video Call Feature" 
                fill 
               className="object-contain object-center z-10 scale-130 "
              />
            </div>
          </div>

          {/* Right: Text & Bullets */}
<div className="w-full md:w-[45%] flex flex-col items-start max-w-[650px]">
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.3]">
              <span className="text-[#30378A]">A </span>
              <span className="text-[#00C7B7]">user interface designed</span>
              <span className="text-[#30378A]"> for the classroom</span>
            </h3>

            <div className="mt-8 flex flex-col gap-6 md:gap-8">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-5">
                <div className="w-[110px] h-[110px] md:w-[45px] md:h-[45px] rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center justify-center shrink-0">
                  <Image
                    src="/icons/tab4.png"
                    alt="Feature icon"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#696984] text-[16px] md:text-[18px] leading-[1.6] whitespace-pre-line">
                  Teachers don’t get lost in the grid view{"\n"}and have a dedicated Podium space.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-5">
                <div className="w-[110px] h-[110px] md:w-[45px] md:h-[45px] rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center justify-center shrink-0">
                  <Image
                    src="/icons/tab2.png"
                    alt="Feature icon"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#696984] text-[16px] md:text-[18px] leading-[1.6] whitespace-pre-line">
                  TA’s and presenters can be moved to{"\n"}the front of the class.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-5">
                <div className="w-[110px] h-[110px] md:w-[45px] md:h-[45px] rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center justify-center shrink-0">
                  <Image
                    src="/icons/group3.png"
                    alt="Feature icon"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#696984] text-[16px] md:text-[18px] leading-[1.6] whitespace-pre-line">
                  Teachers can easily see all students{"\n"}and class data at one time.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ROW 2: Text Left / Visual Right */}
        <div className="mt-16 md:mt-[60px] w-full flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-[140px]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start max-w-[550px]">
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.3] whitespace-pre-line">
              <span className="text-[#00C7B7]">Tools</span>
              <span className="text-[#30378A]"> For Teachers{"\n"}And Learners</span>
            </h3>

            <p className="mt-6 text-[#696984] text-[16px] md:text-[20px] leading-[1.7] max-w-[500px]">
              Class has a dynamic set of teaching tools built to
              be deployed and used during class. Teachers can
              handout assignments in real-time for students to
              complete and submit.
            </p>
          </div>

          {/* Right: Girl Visual */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[560px] h-[400px] md:h-[460px]">
              
              {/* Decorative Background Elements */}
              {/* Large coral/red circle behind upper body */}
              <div className="absolute top-[40px] left-[80px] w-[200px] h-[200px] bg-[#EF6685] rounded-full -z-10"></div>
              {/* Small green circle near top-right */}
              <div className="absolute top-[20px] right-[60px] w-[20px] h-[20px] bg-[#35DFA5] rounded-full -z-10"></div>
              {/* Small orange/coral circle toward lower-left */}
              <div className="absolute bottom-[60px] left-[40px] w-[18px] h-[18px] bg-[#F48C06] rounded-full -z-10"></div>
              {/* Small purple circle toward lower-right */}
              <div className="absolute bottom-[90px] right-[30px] w-[24px] h-[24px] bg-[#30378A] rounded-full -z-10"></div>
              
              {/* Tiny dots scattered */}
              <div className="absolute top-[120px] right-[10px] w-[8px] h-[8px] bg-[#5B5BEF] rounded-full -z-10 opacity-50"></div>
              <div className="absolute top-[40px] left-[30px] w-[6px] h-[6px] bg-[#5BB4E8] rounded-full -z-10 opacity-60"></div>
              <div className="absolute bottom-[40px] left-[100px] w-[8px] h-[8px] bg-[#5B5BEF] rounded-full -z-10 opacity-50"></div>
              
              {/* Girl Image */}
              <Image 
                src="/images/Group 122.png" 
                alt="Student holding books" 
                fill 
                className="object-contain z-0" 
              />
              
              {/* Floating UI Card 1 (Upper Left) */}
              <div className="absolute top-[90px] left-[10px] w-[64px] h-[64px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B5BEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>

              {/* Floating UI Card 2 (Upper Right) */}
              <div className="absolute top-[140px] -right-[10px] w-[64px] h-[64px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30378A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>

  {/* ROW 3: Assessment Visual Left / Text Right */}
<div className="mt-16 md:mt-[60px] w-full flex flex-col md:flex-row items-center justify-between max-w-[1800px] gap-12 md:gap-[280px]   ">

  {/* Left: Assessment Visual */}
  <div className="w-full md:w-[55%] flex justify-center md:justify-center lg:justify-end relative lg:pr-[60px]">
    <div className="relative w-full max-w-[500px] h-[560px] md:h-[620px] flex items-center justify-center">

      {/* Decorative Background Elements */}
      <div className="absolute top-[20px] left-[0px] md:top-[50px] md:-left-[20px] w-[100px] h-[100px] bg-[#6574E8] rounded-full z-0"></div>

      <div className="absolute top-[0px] left-[260px] md:left-[320px] w-[18px] h-[18px] bg-[#F5A064] rounded-full z-0"></div>

      <div className="absolute top-[220px] right-[0px] md:-right-[20px] w-[18px] h-[18px] bg-[#E85A91] rounded-full z-0"></div>

      <div className="absolute bottom-[60px] left-[20px] md:left-[0px] w-[20px] h-[20px] bg-[#28DFA5] rounded-full z-0"></div>

      {/* Main Assessment Card */}
      <div className="relative z-10 w-[420px] h-[490px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col p-8 md:p-10 border border-gray-50 overflow-visible">

        {/* Top: Question 1 Badge */}
        <div className="bg-[#CDD8FF] text-[#717FB0] text-[15px] font-semibold px-5 py-2 rounded-full self-start">
          Question 1
        </div>

        {/* Question Text */}
        <h4 className="mt-6 text-[#30378A] font-bold text-[24px] leading-[1.3]">
          True or false? This play<br />
          takes place in Italy
        </h4>

        {/* Image */}
        <div className="relative w-[calc(100%+20px)] md:w-[calc(100%+30px)] -right-[10px] md:-right-[45px] flex-1 mt-6 rounded-3xl overflow-hidden bg-gray-100 shadow-[0_12px_20px_-8px_rgba(0,0,0,0.45)]">
          <Image
            src="/images/ourfeatures/italy.png"
            alt="Italy scene with gondolas"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* RED/X (Cross - Negative option) */}
        <div className="absolute top-[0px] -right-[28px] z-10 flex items-center justify-center">
          <Image
            src="/icons/cross.png"
            alt="Cross icon"
            width={105}
            height={105}
            className="object-contain w-[80px] h-[80px] md:w-[95px] md:h-[95px] lg:w-[105px] lg:h-[105px]"
          />
        </div>

        {/* GREEN/CHECK (Tick - Positive option) */}
        <div className="absolute top-[65px] -right-[48px] z-10 flex items-center justify-center">
          <Image
            src="/icons/tick.png"
            alt="Tick icon"
            width={105}
            height={105}
            className="object-contain w-[80px] h-[80px] md:w-[95px] md:h-[95px] lg:w-[105px] lg:h-[105px]"
          />
        </div>

        {/* Submission Success Card */}
        <div className="absolute -bottom-[32px] -right-[65px] w-[280px] h-[96px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center px-6 gap-4 z-20 border border-gray-50">

          <div className="relative flex items-center justify-center shrink-0 w-[55px] h-[55px] md:w-[60px] md:h-[60px]">
            {/* Green Circle */}
            <div className="absolute inset-0 rounded-full bg-[#D8F9ED] z-0"></div>
            
            {/* Decorative Trails */}
            <div className="absolute bottom-[15px] right-[20px] rotate-[-28deg] md:md:bottom-[10px] md:right-[40px] flex flex-col items-end gap-[3px] z-10">
              <div className="w-[30px] h-[3.5px] bg-[#00C7B7] rounded-full"></div>
              <div className="w-[22px] h-[3.5px] bg-[#F48C06] rounded-full"></div>
              <div className="w-[14px] h-[3.5px] bg-[#00C7B7] rounded-full"></div>
            </div>

            {/* Arrow Image */}
            <Image
              src="/icons/arrow.png"
              alt="Arrow icon"
              width={40}
              height={40}
              className="object-contain w-[35px] h-[35px] md:w-[40px] md:h-[40px] md:right-[-9px] md:bottom-[2px] relative z-20"
            />
          </div>

          <p className="text-[#00C7B7] text-[17px] font-bold leading-[1.3]">
            Your answer was<br />
            sent successfully
          </p>
        </div>

      </div>
    </div>
  </div>

  {/* Right: Text Content */}
  <div className="w-full md:w-[45%] flex flex-col items-start max-w-[600px]">

    <h3 className="text-[30px] md:text-[38px] font-bold leading-[1.25]">
      <span className="text-[#30378A]">Assessments,</span><br />
      <span className="text-[#00C7B7]">Quizzes, </span>
      <span className="text-[#30378A]">Tests</span>
    </h3>

    <p className="mt-6 text-[#696984] text-[16px] md:text-[21px] leading-[1.7] max-w-[520px]">
      Easily launch live assignments, quizzes, and
      <br className="hidden md:block" />
      tests. Student results are automatically entered in the online gradebook.
     
      
    </p>

  </div>

</div>

        {/* ROW 4: Text Left / GradeBook Visual Right */}
        <div className="mt-16 md:mt-[60px] w-full flex flex-col-reverse md:flex-row items-center max-w-[1780px] justify-center gap-16 md:gap-[10px]">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start max-w-[550px] md:-translate-x-[30px]">
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.3] whitespace-pre-line">
              <span className="text-[#00C7B7]">Class Management</span>
              <span className="text-[#30378A]">{"\n"}Tools for Educators</span>
            </h3>

            <p className="mt-6 text-[#696984] text-[16px] md:text-[20px] leading-[1.7] max-w-[500px]">
              Class provides tools to help run and manage the class
              as well as Class Roster, Attendance, and more. With the
              Gradebook, teachers can review and grade tests and
              quizzes in real-time.
            </p>
          </div>

          {/* Right: GradeBook Visual */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[650px] h-[350px] sm:h-[450px] md:translate-x-[50px] md:h-[500px]">
              <Image 
                src="/images/Group 124.png" 
                alt="Class Management GradeBook" 
                fill 
                className="object-contain object-center z-10" 
              />
            </div>
          </div>
        </div>

        {/* ROW 5: One-on-One Visual Left / Text Right */}
        <div className="mt-16 md:mt-[60px] w-full flex flex-col md:flex-row items-center justify-center gap-16 md:-ml-[130px] md:gap-[150px]">
          
          {/* Left: One-on-One Visual */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[480px] h-[330px] flex items-center justify-center  ">
              
              {/* BACK LAYER DECORATIONS */}
              {/* Cyan Ring */}
              <div className="absolute -top-[7px] right-[30px] w-[80px] h-[80px] rounded-full border-[12px] border-[#23bdee] z-0"></div>
              
              {/* Orange Triangle */}
              <div className="absolute top-[50px] right-[0px] w-[14px] h-[14px] z-0">
                <svg viewBox="0 0 24 24" fill="#F48C06">
                  <path d="M12 2L22 20H2L12 2Z"/>
                </svg>
              </div>

              {/* Light-blue Bottom Shape */}
              <div className="absolute bottom-[69px] left-[10px] w-[110px] h-[110px] bg-[#73bcff] bg-opacity-30 rounded-[14px] z-0"></div>

              {/* BACK BROWSER WINDOW */}
              <div className="absolute top-[15px] left-[20px] w-[390px] h-[230px] bg-white rounded-[14px] shadow-sm flex flex-col overflow-hidden z-10 border border-gray-100">
                {/* Header */}
                <div className="h-[30px] bg-gray-100 flex items-center px-4 gap-[6px] shrink-0">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#EF6685]"></div>
                  <div className="w-[8px] h-[8px] rounded-full bg-[#F48C06]"></div>
                  <div className="w-[8px] h-[8px] rounded-full bg-[#28E7A4]"></div>
                </div>
                {/* Content */}
                <div className="flex-1 flex p-4 gap-4 opacity-30 filter blur-[3px] bg-gray-50/50">
                  <div className="flex-1 rounded-[10px] overflow-hidden bg-gray-200 relative">
                    <Image src="/images/ourfeatures/person2.png" alt="Back Participant" fill className="object-cover object-center" />
                  </div>
                  <div className="flex-1 rounded-[10px] overflow-hidden bg-gray-200 relative">
                    <Image src="/images/ourfeatures/person3.png" alt="Back Participant" fill className="object-cover object-center" />
                  </div>
                </div>
              </div>

              {/* MIDDLE LAYER: FRONT BROWSER WINDOW */}
              <div className="absolute bottom-[10px] right-[10px] w-[350px] h-[270px] bg-white rounded-[14px] shadow-[0_18px_45px_rgba(0,0,0,0.10)] flex flex-col overflow-visible z-20">
                
                {/* FLOATING PEOPLE ICON (Overlaps Left Edge) */}
                <div className="absolute -left-[28px] rotate-[-10deg] top-[15px] w-[60px] h-[60px] bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-50">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#2F80ED">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>

                {/* Header */}
                <div className="h-[28px] bg-gray-50 flex items-center px-4 gap-[6px] shrink-0 border-b border-gray-100 rounded-t-[14px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#EF6685]"></div>
                  <div className="w-[8px] h-[8px] rounded-full bg-[#F48C06]"></div>
                  <div className="w-[8px] h-[8px] rounded-full bg-[#28E7A4]"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2 px-4 pb-4 flex flex-col justify-between">
                  {/* Videos */}
                  <div className="flex justify-center items-center gap-3">
                    <div className="relative w-[135px] h-[140px] rounded-[10px] overflow-hidden bg-gray-100">
                      <Image src="/images/ourfeatures/person1.png" alt="Participant 1" fill className="object-cover object-center" />
                    </div>
                    <div className="w-[1px] h-[150px] bg-[#E2E8F0] shrink-0"></div>
                    <div className="relative w-[135px] h-[140px] rounded-[10px] overflow-hidden bg-gray-100">
                      <Image src="/images/classroom.png" alt="Participant 2" fill className="object-cover object-center" />
                     
                    </div>
                  </div>

                  {/* Bottom Text & Button */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-col">
                      <span className="text-[#696984] text-[15px] font-bold">Private Discussion</span>
                      <span className="text-[#696984] text-[10px] mt-0.5">Your video can't be seen by others</span>
                    </div>
                    <div className="w-[118px] h-[34px] bg-[#ED4B3F] hover:bg-[#cd2a1f] transition-colors rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(239,91,91,0.3)] cursor-pointer z-30">
                      <span className="text-white text-[12px] font-semibold">End Discussion</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start max-w-[450px] md:translate-x-[30px]">
            <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.25]">
              <span className="text-[#30378A]">One-on-One</span><br/>
              <span className="text-[#00C7B7]">Discussions</span>
            </h3>

            <p className="mt-[20px] text-[#696984] text-[15px] md:text-[17px] leading-[1.7] max-w-[450px]">
              Teachers and teacher assistants can talk with<br className="hidden md:block"/>
              students privately without leaving the Zoom<br className="hidden md:block"/>
              environment.
            </p>
          </div>
        </div>

        {/* See more features button */}
        <div className="w-full flex justify-center mt-[60px] md:mt-[70px]">
          <button className="w-[192px] h-[58px] rounded-full border border-[#4CB9C0] bg-white text-[#4CB9C0] text-[12px] md:text-[17px] font-medium transition-all duration-300 hover:bg-[#F2FCFC] hover:border-[#3da0a3] hover:text-[#3da0a3]">
            See more features
          </button>
        </div>

      </div>
    </section>
  );
}

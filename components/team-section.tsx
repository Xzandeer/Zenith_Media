"use client";

const team = [
  {
    name: "INA JIRAH F. SERQUIÑA",
    role: "Team Coordinator, Research & Content Writing Member",
    image: "/mem1.jpg",
    bgColor: "bg-[#F2D7D5]",
  },
  {
    name: "KASHEEM ADREI O. SIBORBORO",
    role: "Assistant Team Coordinator & Technical Head",
    image: "/mem2.jpg",
    bgColor: "bg-[#D5DBDB]",
  },
  {
    name: "DAWN FAITH B. MONTEFALCO",
    role: "Creative Department Head & Technical Member",
    image: "/mem3.jpg",
    bgColor: "bg-[#F9E79F]",
  },
  {
    name: "KRISTEL M. REYES",
    role: "Research & Content Writing Head, Creative Member",
    image: "/mem4.jpg",
    bgColor: "bg-[#FADBD8]",
  },
  {
    name: "PRINCESS CYZRAH BRAILE C. JUBILO",
    role: "Research & Content Writing Department Member",
    image: "/mem5.jpg",
    bgColor: "bg-[#D6EAF8]",
  },
  {
    name: "GIAN CARLO ANDRES",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem6.jpg",
    bgColor: "bg-[#E8DAEF]",
  },
  {
    name: "CEARELLE JOY G. ANOLIN",
    role: "Creatives & Technical Department Member",
    image: "/mem7.jpg",
    bgColor: "bg-[#FCF3CF]",
  },
  {
    name: "SAMANTHA NICOLE A. BORRES",
    role: "Research & Content Writing & Technical Dept Member",
    image: "/mem8.jpg",
    bgColor: "bg-[#D5F5E3]",
  },
  {
    name: "ALBEIRA GABRIELLE T. CRUZ",
    role: "Research & Content Writing & Creatives Dept Member",
    image: "/mem9.jpg",
    bgColor: "bg-[#FDEDEC]",
  },
  {
    name: "JEFFREY CORDELL G. DONES",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem10.jpg",
    bgColor: "bg-[#EBDEF0]",
  },
  {
    name: "SATUR BOY A. GAWEC",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem11.jpg",
    bgColor: "bg-[#F9EBEA]",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-28 px-6"
      style={{
        backgroundImage: "url('/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -left-3 w-full h-full border-4 border-[#0B0F1A] rounded-[2rem] transform rotate-2"></div>
            <h2 className="relative font-serif text-4xl md:text-5xl font-bold text-white bg-[#B5452E] px-10 py-4 rounded-[2rem] shadow-xl">
              MEET THE TEAM
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative">

                {/* Card */}
                <div className="bg-white p-4 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">

                  {/* Name Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#1F3E8A] text-white px-5 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                      {member.name}
                    </div>
                  </div>

                  {/* Image Frame */}
                  <div className={`rounded-2xl overflow-hidden ${member.bgColor} p-2`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>

                  {/* Role Text */}
                  <div className="text-center mt-4">
                    <p className="text-[#0B0F1A] text-sm font-medium leading-tight">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Shadow Behind */}
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#0B0F1A] rounded-3xl -z-10 opacity-10"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

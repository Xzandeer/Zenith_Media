"use client";

const team = [
  {
    name: "INA JIRAH F. SERQUIÑA",
    role: "Team Coordinator, Research & Content Writing Member",
    image: "/mem1.jpg",
    bgColor: "bg-[#F2D7D5]",
    bio: "Brief background: I am a Communication student who is passionate about writing. I have experience writing hard news and literary pieces for school publications, as well as scripts for theatrical plays, a TV production, and in short films. I also have experience in managing a social media page while being a part of a Marketing and Public Engagement Committee.",
  },
  {
    name: "KASHEEM ADREI O. SIBORBORO",
    role: "Assistant Team Coordinator & Technical Head",
    image: "/mem2.jpg",
    bgColor: "bg-[#D5DBDB]",
    bio: "Brief background: I’m a Communication student with years of experience in Video production and graphic design. I’ve worked on multiple projects academically and professionally, giving the best possible outputs for my clients. I specialize in video editing with the use of Adobe Premiere and Adobe After Effects. These acquired skills helped me paved my path in my career in media production and helped me throughout my academic career.",
  },
  {
    name: "DAWN FAITH B. MONTEFALCO",
    role: "Creative Department Head & Technical Member",
    image: "/mem3.jpg",
    bgColor: "bg-[#F9E79F]",
    bio: "Brief background: I’m a Communication student with experience in digital media production and technical work. I create graphics and visual materials using Canva, Adobe Photoshop, and Illustrator, ensuring that every design aligns with the team’s creative goals. I also have experience in handling the technical aspects of digital projects, focusing on smooth production flow and quality output.",
  },
  {
    name: "KRISTEL M. REYES",
    role: "Research & Content Writing Head, Creative Member",
    image: "/mem4.jpg",
    bgColor: "bg-[#FADBD8]",
    bio: "Brief background: I’m a Communication student geared with hands-on experience in writing, graphic design, content creation, and digital art. I’ve written social media post captions and published nonfiction articles, enhancing my skills in writing, which is essential for the team. I’ve also designed visually-engaging publication materials, cartoons, and a mascot using common softwares like Canva, Picsart, and ibisPaintX, highlighting my passion for creativity and imagination. With my basic video editing skills using Capcut and simple understanding of analytics and social media management, I’ve achieved wide reach and engagement on Tiktok.",
  },
  {
    name: "PRINCESS CYZRAH BRAILE C. JUBILO",
    role: "Research & Content Writing Department Member",
    image: "/mem5.jpg",
    bgColor: "bg-[#D6EAF8]",
    bio: "Brief background: I’m a Communication student with skills in social media management, basic content creation, and basic graphic design. I’ve handled various social media pages where I learned to plan, schedule, and create engaging posts using tools like Meta Business Suite and Canva.",
  },
  {
    name: "GIAN CARLO ANDRES",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem6.jpg",
    bgColor: "bg-[#E8DAEF]",
    bio: "Brief background: A diligent, well-organized, and knowledgeable college student who pursued a Bachelor of Arts in Communication at Saint Louis University. Coming with experience in a student council and the ability to perform flawless public speaking, as well as the capability to edit videos, images, and create such incredible graphic design. Besides that, a student who excels in both athleticism and communication.",
  },
  {
    name: "CEARELLE JOY G. ANOLIN",
    role: "Creatives & Technical Department Member",
    image: "/mem7.jpg",
    bgColor: "bg-[#FCF3CF]",
    bio: "Brief background: A Communication student with a strong interest in graphic design and creative production. I have gained practical experience in stage design, production, social media content, broadcasting, video editing and graphic design through various university organizations. I use software such as Canva, Adobe Photoshop, CapCut, and Adobe Lightroom. These experiences helped me become more creative, organized, and confident in sharing ideas through visual designs.",
  },
  {
    name: "SAMANTHA NICOLE A. BORRES",
    role: "Research & Content Writing & Technical Dept Member",
    image: "/mem8.jpg",
    bgColor: "bg-[#D5F5E3]",
    bio: "Brief background: I am a communication student with practical experience in media production and technical work. I have honed my media production skills by participating in various organizations, where I utilize tools such as Canva, CapCut, and Adobe Lightroom. My technical experience stems from my senior high school education in ICT, where I took programming classes with a strong focus on animation.",
  },
  {
    name: "ALBEIRA GABRIELLE T. CRUZ",
    role: "Research & Content Writing & Creatives Dept Member",
    image: "/mem9.jpg",
    bgColor: "bg-[#FDEDEC]",
    bio: "Brief background: I am a confident and adaptable communicator with strong public speaking skills, strengthened by my active involvement in Toastmasters since 2018. I have hosted small events where I’ve learned to engage audiences, manage program flow, and stay composed under pressure. I also have a growing interest in graphic design, using basic programs and applications to create simple visuals, layouts, and promotional materials when needed. Having lived overseas for many years, I’ve built a wide social network and developed strong cross-cultural communication skills that help me connect with diverse groups of people.",
  },
  {
    name: "JEFFREY CORDELL G. DONES",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem10.jpg",
    bgColor: "bg-[#EBDEF0]",
    bio: "Brief background: A Communication student at Saint Louis University with hands-on experience in events coordination, promotional planning, and leadership roles. Known for strong collaboration skills and a passion for learning. Eager to grow as an effective communicator by exploring opportunities.",
  },
  {
    name: "SATUR BOY A. GAWEC",
    role: "Creatives Dept & Research & Content Writing Member",
    image: "/mem11.jpg",
    bgColor: "bg-[#F9EBEA]",
    bio: "Brief background: A communication student who is passionate and has foundation and multiple experiences in artistic and creative pursuit, particularly in the field of performing arts. Continuously exploring the world of performance and media by also developing skills in writing, social media management, content creation, and more.",
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

                {/* Bio Display (Only visible when hovering over specific cards like Ina) */}
                {member.bio && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#F2D7D5] p-4 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[#0B0F1A] text-sm">{member.bio}</p>
                  </div>
                )}

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

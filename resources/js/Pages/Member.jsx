
// import React, { useEffect, useRef } from "react";
// import { Phone, User, Briefcase, Users, Award } from "lucide-react";
// import MemberBanner from "@/MainComponent/MemberBanner";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Wrapper from "@/FrontWrapper/Wrapper";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const team = [
//   { role: "President", name: "Rabinson Maharjan", phone: "+977 9849055337" },
//   { role: "Vice President", name: "Sanjeev Tuladhar", phone: "+977 9841322199" },
//   { role: "General Secretary", name: "Dipak Pokhrel", phone: "+977 9764596097 ", image: "/images/dipak.jpeg" },
//   { role: "Secretary", name: "Laxmi Shrestha", phone: "+977 9841361808" },
//   { role: "Treasurer", name: "Ganesh Budhathoki", phone: "+977 9860825198" },
// ];

// const executiveMembers = [
//   { role: "Executive Member", name: "Rajan Tuladhar", phone: "+977 9841397973" },
//   { role: "Executive Member", name: "Anjani Thapa (Anne)", phone: "+977 9843441709" },
//   { role: "Executive Member", name: "Prabha Ghising", phone: "+977 9849366411" },
//   { role: "Executive Member", name: "Shailendra Thapa Magar", phone: "+977 9841985738" },
//   { role: "Executive Member", name: "Ramesh Pathak", phone: "+977 9855022639" },
// ];

// const advisors = [
//   { role: "Advisor", name: "Raj Kumar KC", phone: "+977 9846025852" },
//   { role: "Advisor", name: "Suresh Shrestha", phone: "+977 9851022744" },
//   { role: "Advisor", name: "Pradip Paudel", phone: "+977 9841789258" },
// ];

// function TeamCard({ member, index }) {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(cardRef.current, {
//         y: 50,
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.8,
//         delay: index * 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: "top 88%",
//           end: "top 68%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, [index]);

//   return (
//     <div 
//       ref={cardRef}
//       className="flex flex-col items-center rounded-xl bg-slate-50 px-6 py-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//     >
//       <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#007dcc] p-1.5 hover:scale-105 transition-transform duration-300">
//         <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
//           {member.image ? (
//             <img
//               src={member.image}
//               alt={member.name}
//               className="h-full w-full rounded-full object-cover"
//             />
//           ) : (
//             <User size={40} className="text-[#007DCC]" />
//           )}
//         </div>
//       </div>
//       <h3 className="text-lg font-medium text-slate-800">{member.name}</h3>
//       {member.role && (
//         <p className="mt-1 text-lg font-medium text-[#007DCC]">{member.role}</p>
//       )}

//       <a
//         href={`tel:${member.phone.replace(/\s/g, '').replace(/\//g, '')}`}
//         className="flex items-center gap-2 text-lg bg-[#007DCC] text-white hover:bg-[#005a8a] transition-all duration-300 px-4 py-2 rounded-md mt-4 hover:scale-105 hover:shadow-lg"
//       >
//         <Phone size={24} />
//         <span className="">{member.phone}</span>
//       </a>
//     </div>
//   );
// }

// function PersonRow({ name, phone, role }) {
//   return (
//     <div className="flex flex-col gap-1 border-b border-gray-100 py-3 last:border-none sm:flex-row sm:items-center sm:justify-between">
//       <div className="flex items-center gap-3">
//         {role && (
//           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
//             {role === "Advisor" && <Award size={16} className="text-teal-600" />}
//             {role === "Executive Member" && <Briefcase size={16} className="text-teal-600" />}
//           </div>
//         )}
//         <div>
//           {role && <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{role}</p>}
//           <p className="font-medium text-slate-800">{name}</p>
//         </div>
//       </div>
//       <a
//         href={`tel:${phone.replace(/\s/g, '').replace(/\//g, '')}`}
//         className="flex items-center gap-2 text-sm text-teal-600 transition-colors hover:text-teal-800"
//       >
//         <Phone size={14} />
//         <span>{phone}</span>
//       </a>
//     </div>
//   );
// }

// const Member = () => {
//   const sectionRef = useRef(null);
//   const executiveTitleRef = useRef(null);
//   const executiveMembersTitleRef = useRef(null);
//   const advisorsTitleRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Executive Committee Title Animation
//       gsap.from(executiveTitleRef.current, {
//         y: -30,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: executiveTitleRef.current,
//           start: "top 88%",
//           end: "top 68%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Executive Members Title Animation
//       gsap.from(executiveMembersTitleRef.current, {
//         y: -30,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: executiveMembersTitleRef.current,
//           start: "top 88%",
//           end: "top 68%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Advisors Title Animation
//       gsap.from(advisorsTitleRef.current, {
//         y: -30,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: advisorsTitleRef.current,
//           start: "top 88%",
//           end: "top 68%",
//           toggleActions: "play none none reverse",
//         },
//       });

//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>

//     <Wrapper>
//     <MemberBanner />
//     <div ref={sectionRef} className="min-h-screen bg-white px-4 py-16 sm:px-8 lg:px-0">
      

//       {/* Executive Committee Section */}
//       <div className="mx-auto mb-24 max-w-7xl">
//         <div ref={executiveTitleRef} className="mb-12 text-center">
//           <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Committee</h2>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {team.map((member, index) => (
//             <TeamCard key={member.name} member={member} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* Executive Members Section */}
//       <div className="mx-auto mb-24 max-w-6xl">
//         <div ref={executiveMembersTitleRef} className="mb-12 text-center">
//           <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Members</h2>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {executiveMembers.map((member, index) => (
//             <TeamCard key={member.name} member={member} index={index + team.length} />
//           ))}
//         </div>
//       </div>

//       {/* Advisors Section */}
//       <div className="mx-auto max-w-6xl">
//         <div ref={advisorsTitleRef} className="mb-12 text-center">
//           <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Advisors</h2>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {advisors.map((member, index) => (
//             <TeamCard key={member.name} member={member} index={index + team.length + executiveMembers.length} />
//           ))}
//         </div>
//       </div>
//     </div>
//     </Wrapper>
//     </>
//   );
// };

// export default Member;

//below is the backend integrated code


import React, { useEffect, useRef, useState } from "react";
import { Phone, User, Briefcase, Award } from "lucide-react";
import MemberBanner from "@/MainComponent/MemberBanner";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Wrapper from "@/FrontWrapper/Wrapper";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const CATEGORY = {
  executive_committee: "team",
  executive_members: "executiveMembers",
  advisors: "advisors",
};

function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          end: "top 68%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center rounded-xl bg-slate-50 px-6 py-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#007dcc] p-1.5 hover:scale-105 transition-transform duration-300">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <User size={40} className="text-[#007DCC]" />
          )}
        </div>
      </div>
      <h3 className="text-lg font-medium text-slate-800">{member.name}</h3>
      {member.role && (
        <p className="mt-1 text-lg font-medium text-[#007DCC]">{member.role}</p>
      )}

      {member.phone && (
        <a
          href={`tel:${member.phone.replace(/\s/g, '').replace(/\//g, '')}`}
          className="flex items-center gap-2 text-lg bg-[#007DCC] text-white hover:bg-[#005a8a] transition-all duration-300 px-4 py-2 rounded-md mt-4 hover:scale-105 hover:shadow-lg"
        >
          <Phone size={24} />
          <span className="">{member.phone}</span>
        </a>
      )}
    </div>
  );
}

const Member = () => {
  const sectionRef = useRef(null);
  const executiveTitleRef = useRef(null);
  const executiveMembersTitleRef = useRef(null);
  const advisorsTitleRef = useRef(null);

  const [team, setTeam] = useState([]);
  const [executiveMembers, setExecutiveMembers] = useState([]);
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("/ourmember");
        const members = response.data.data || [];

        const grouped = { team: [], executiveMembers: [], advisors: [] };

        members
          .filter((m) => m.is_active)
          .forEach((m) => {
            const bucket = CATEGORY[m.category];
            if (!bucket) return;
            grouped[bucket].push({
              name: m.name,
              role: m.position,
              phone: m.phone_number,
              image: m.image_path ? `/storage/${m.image_path}` : null,
            });
          });

        setTeam(grouped.team);
        setExecutiveMembers(grouped.executiveMembers);
        setAdvisors(grouped.advisors);
      } catch (error) {
        console.error("fetching error ", error);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(executiveTitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: executiveTitleRef.current,
          start: "top 88%",
          end: "top 68%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(executiveMembersTitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: executiveMembersTitleRef.current,
          start: "top 88%",
          end: "top 68%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(advisorsTitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: advisorsTitleRef.current,
          start: "top 88%",
          end: "top 68%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [team, executiveMembers, advisors]);

  return (
    <>
      <Wrapper>
        <MemberBanner />
        <div ref={sectionRef} className="min-h-screen bg-white px-4 py-16 sm:px-8 lg:px-0">

          {/* Executive Committee Section */}
          <div className="mx-auto mb-24 max-w-7xl">
            <div ref={executiveTitleRef} className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Committee</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <TeamCard key={member.name + index} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Executive Members Section */}
          <div className="mx-auto mb-24 max-w-6xl">
            <div ref={executiveMembersTitleRef} className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Members</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {executiveMembers.map((member, index) => (
                <TeamCard key={member.name + index} member={member} index={index + team.length} />
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          <div className="mx-auto max-w-6xl">
            <div ref={advisorsTitleRef} className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Advisors</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((member, index) => (
                <TeamCard
                  key={member.name + index}
                  member={member}
                  index={index + team.length + executiveMembers.length}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Member;
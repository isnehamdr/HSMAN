import React from "react";
import { Phone, User, Briefcase, Users, Award } from "lucide-react";
import Services from "@/MainComponent/Services";
import MemberBanner from "@/MainComponent/MemberBanner";

const team = [
  { role: "President", name: "Rabinson Maharjan", phone: "+977 9849055337" },
  { role: "Vice President", name: "Sanjeev Tuladhar", phone: "+977 9841322199" },
  { role: "General Secretary", name: "Dipak Pokhrel", phone: "+977 9764596097 / +977 9862111047" },
  { role: "Secretary", name: "Laxmi Shrestha", phone: "+977 9841361808" },
  { role: "Treasurer", name: "Ganesh Budhathoki", phone: "+977 9860825198" },
];

const executiveMembers = [
  { role: "Executive Member", name: "Rajan Tuladhar", phone: "+977 9841397973" },
  { role: "Executive Member", name: "Anjani Thapa (Anne)", phone: "+977 9843441709" },
  { role: "Executive Member", name: "Prabha Ghising", phone: "+977 9849366411" },
  { role: "Executive Member", name: "Shailendra Thapa Magar", phone: "+977 9841985738" },
  { role: "Executive Member", name: "Ramesh Pathak", phone: "+977 9855022639" },
];

const advisors = [
  { role: "Advisor", name: "Raj Kumar KC", phone: "+977 9846025852" },
  { role: "Advisor", name: "Suresh Shrestha", phone: "+977 9851022744" },
  { role: "Advisor", name: "Pradip Paudel", phone: "+977 9841789258" },
];

function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-slate-50 px-6 py-10 text-center">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#007dcc] p-1.5">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <User size={40} className="text-[#007DCC]" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-slate-800">{member.name}</h3>
      {member.role && (
        <p className="mt-1 text-lg font-medium text-[#007DCC]">{member.role}</p>
      )}
      
      <a
        href={`tel:${member.phone.replace(/\s/g, '').replace(/\//g, '')}`}
        className="flex items-center gap-2 text-lg bg-[#007DCC] text-white hover:bg-[#005a8a] transition-colors px-4 py-2 rounded-md mt-4"
      >
        <Phone size={24} /> 
        <span className="">{member.phone}</span>
      </a>
    </div>
  );
}

function PersonRow({ name, phone, role }) {
  return (
    <div className="flex flex-col gap-1 border-b border-gray-100 py-3 last:border-none sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        {role && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
            {role === "Advisor" && <Award size={16} className="text-teal-600" />}
            {role === "Executive Member" && <Briefcase size={16} className="text-teal-600" />}
          </div>
        )}
        <div>
          {role && <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{role}</p>}
          <p className="font-medium text-slate-800">{name}</p>
        </div>
      </div>
      <a
        href={`tel:${phone.replace(/\s/g, '').replace(/\//g, '')}`}
        className="flex items-center gap-2 text-sm text-teal-600 transition-colors hover:text-teal-800"
      >
        <Phone size={14} />
        <span>{phone}</span>
      </a>
    </div>
  );
}

const Member = () => {
  return (
    <>
    <MemberBanner />
    <div className="min-h-screen bg-white px-4 py-16 sm:px-8 lg:px-0">
      {/* Services Component - Rendered at the top */}
     
      <Services />
      

      {/* Executive Committee Section */}
      <div className="mx-auto mb-24 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Committee</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Executive Members Section */}
      <div className="mx-auto mb-24 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Executive Members</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executiveMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Advisors Section */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl">Advisors</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Member;
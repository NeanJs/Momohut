import Image from "next/image";

const teamMembers = [
  { name: "Emily Anderson", role: "Head Chef", image: "/team1.jpg" },
  { name: "Mike Dusky", role: "Sous Chef", image: "/team2.jpg" },
  { name: "Jackson Emery", role: "Pastry Chef", image: "/team3.jpg" },
];

const Team = () => {
  return (
    <section className="body-wrapper py-16 bg-gray-100">
      <div className="content-wrapper text-center">
        <h3 className="text-xs font-bold text-primary">Our Team</h3>
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <h4 className="text-xl font-bold mt-4">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

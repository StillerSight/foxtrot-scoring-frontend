// src/pages/TeamBravo.jsx
import HostList from "../components/HostList";

function TeamBravo() {
  const hosts = [
    {
      id: 1,
      name: "Bravo Host 1",
      icon: "🖥️",
      services: [
        { name: "Database", up: true },
        { name: "API", up: true },
        { name: "Frontend", up: false },
      ],
    },
  ];

  return (
    <div className="page">
      <h1>Team Bravo</h1>
      <HostList hosts={hosts} />
    </div>
  );
}

export default TeamBravo;

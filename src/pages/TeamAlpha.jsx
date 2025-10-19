// src/pages/TeamAlpha.jsx
import HostList from "../components/HostList";

function TeamAlpha() {
  const hosts = [
    {
      id: 1,
      name: "Linux Host 1",
      icon: "🖥️",
      services: [
        { name: "DNS", up: false },
        { name: "API", up: true },
        { name: "Frontend", up: false },
      ],
    },
    {
      id: 2,
      name: "Linux Host 2",
      icon: "🖥️",
      services: [
        { name: "DNS", up: true },
        { name: "API", up: true },
        { name: "Frontend", up: false },
      ],
    },
  ];

  return (
    <div className="page">
      <h1>Team Alpha</h1>
      <HostList hosts={hosts} />
    </div>
  );
}

export default TeamAlpha;

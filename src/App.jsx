
import { useState } from "react";
import UniversitySearch from "./pages/UniversitySearch";
import UniversityAuth from "./pages/UniversityAuth";

export default function App() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  function handleSelectUniversity(university) {
    setSelectedUniversity(university);
  }

  function handleBackToSearch() {
    setSelectedUniversity(null);
  }

  if (selectedUniversity === null) {
    return (
      <UniversitySearch
        onSelectUniversity={handleSelectUniversity}
      />
    );
  }

  return (
    <UniversityAuth
      university={selectedUniversity}
      onBack={handleBackToSearch}
    />
  );
}

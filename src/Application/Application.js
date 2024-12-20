import { useState } from "react";
import ApplicationSelect from "../components/ApplicationSelect/ApplicationSelect";

const Application = () => {
  const [selectedValue, setSelectedValue] = useState("জন্মস্থান");

  return (
    <div>
      <h1 className="h3 text-center">জন্ম নিবন্ধনের জন্য আবেদন</h1>
      <ApplicationSelect
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

export default Application;

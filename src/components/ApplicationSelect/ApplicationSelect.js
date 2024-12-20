import { useState } from "react";

const ApplicationSelect = () => {
  const [selectedValue, setSelectedValue] = useState("জন্মস্থান");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You selected: ${selectedValue}`);
  };
  return (
    <div>
      <h5 className="h5">
        আপনি নিম্নলিখিত কোন ঠিকানায় জন্ম নিবন্ধনের আবেদন করতে চান?
      </h5>
      <div className="form-check d-flex justify-content-between">
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultChecked
            value="জন্মস্থান"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            জন্মস্থান
          </label>
        </div>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="স্থায়ী ঠিকানা"
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          স্থায়ী ঠিকানা
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ApplicationSelect;

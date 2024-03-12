import React from "react";

const GenderComponent = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-base label-text p-2">Male</span>
          <input
            type="checkbox"
            // checked="checked"
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"} //If the selected
            onChange={() => onCheckboxChange("male")} //If the checkbox is checked, call the onCheckboxChange function with the value of the checkbox
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}>
          <span className="text-base label-text p-2 ">Female</span>
          <input
            type="checkbox"
            // checked="checked"
            className="checkbox checkbox-primary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderComponent;

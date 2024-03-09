import React from "react";

const GenderComponent = () => {
  return (
    <div className="flex ">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="text-base label-text p-2">Male</span>
          <input
            type="checkbox"
            // checked="checked"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer ">
          <span class="text-base label-text p-2 ">Female</span>
          <input
            type="checkbox"
            // checked="checked"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderComponent;

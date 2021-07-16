import React from "react";

const action = (item, type) => {
  if (type === "save") {
  }
  if (type === "edit") {
  }
};
export const Actions = ({ actionType, actionItem, actionName }) => {
  return (
    <div>
      <button
        className={actionType}
        onClick={() => action({ actionItem }, { actionType })}
      >
        {actionName}
      </button>
    </div>
  );
};

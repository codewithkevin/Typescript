import React from "react";

type StatusProp = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProp) => {
  let message;

  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched Successfully";
  } else if (props.status === "error") {
    message = "Data fetched Failed";
  }

  console.log(message);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Status;

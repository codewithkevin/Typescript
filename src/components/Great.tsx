import React from "react";

type GreetProps = {
  name: string;
  number: number;
};

const Great = (props: GreetProps) => {
  return (
    <div>
      <h1>
        Welcome {props.name} You have {props.number} unread messages
      </h1>
    </div>
  );
};

export default Great;

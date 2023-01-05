import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Great = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name} You have {props.messageCount} unread messages
        </h1>
      ) : (
        <h1>Please Log In </h1>
      )}
    </div>
  );
};

export default Great;

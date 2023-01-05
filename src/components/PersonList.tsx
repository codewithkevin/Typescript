import React from "react";

type PersonListProps = {
  names: { first: string; last: string }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <h2>
              {name.first} {name.last}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;

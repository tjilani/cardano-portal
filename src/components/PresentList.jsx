import React from "react";
import { useState } from "react";
import { todoList } from "../data";
import PresentEntry from "./PresentEntry";

const PresentList = () => {
  const [todoEntries, setTodoEntries] = useState(todoList);
  return (
    <div >
      <h2>what's cooking?</h2>
      {todoEntries.map((entry) => {
        return <PresentEntry key={entry.id} {...entry} />;
      })}
    </div>
  );
};

export default PresentList;

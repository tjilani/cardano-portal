import React from "react";
import styled from "styled-components";
import "./PresentEntry.css";

const PresentEntry = (props) => {
  const { id, itemName, description, url } = props;
  return (
    <EntryContainer>
      <h3 className="entry-title">{itemName}</h3>
      <p>{description}</p>
      <div>
        <a href={url} className="btn-link">
          link
        </a>
      </div>
    </EntryContainer>
  );
};

export default PresentEntry;

const EntryContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: center;
  width: 60vw;
  height: 1vh;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  background-color: white;
  border-color: green;
  border: 2px solid;
  border-radius: 0.5rem;

  color: green;
  &:hover {
    background-color: coral;
  }
`;

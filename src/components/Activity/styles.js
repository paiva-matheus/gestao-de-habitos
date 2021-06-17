import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 40vh;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;

  .container__nameGoal {
    margin: 0;
    height: 9vh;
    width: 100%;
    background-color: #0a315d;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    padding: 6vw;
    padding-right: 4vw;
    strong {
      font-size: 1.4rem;
      color: white;
      font-weight: bolder;
    }
    div {
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }
  }

  .container__infoGoal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2vh;
    row-gap: 2vh;
    padding: 4px;
    height: 81%;

    h2 {
      text-transform: uppercase;
      font-size: 1.1rem;
      text-align: center;
    }
    p {
      font-size: 1rem;
    }
  }
  button {
    width: 60%;
    border: 2px solid black;
    background-color: #0a315d;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 6px;
    font-family: "Londrina Solid", cursive;
  }
`;

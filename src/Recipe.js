import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import IngredientModal from "./components/IngredientModal";
function Recipe({ title, calories, image, ingredients }) {
  const generateIngredients = (e) => {
    console.log("ingredints >>>", ingredients);
  };
  const [showModal, setShowModal] = useState("close");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "close": {
        setShowModal("open");
        break;
      }
      case "open": {
        setShowModal("close");
        break;
      }
      default: {
        setShowModal("close");
        break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <CardImage>
          <img src={image} alt="" />
        </CardImage>
        <CardBottom>
          <CardTitle> {title}</CardTitle>
          <Calories>
            Calories:{" "}
            <NumberFormat
              className="formatNum"
              value={Math.floor(calories)}
              thousandSeparator={true}
              displayType="text"
            />
          </Calories>
        </CardBottom>
      </Content>
      <CardButton onClick={handleClick}> View Ingredients</CardButton>
      <IngredientModal
        showModal={showModal}
        handleClick={handleClick}
        title={title}
        ingredients={ingredients}
      />
    </Container>
  );
}
const Container = styled.div`
  width: 400px;
  min-width: 400px;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.76);
  height: 450px;
  border-radius: 5px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardBottom = styled.div`
  /* padding: 10px 20px; */
`;
const CardTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  line-height: 1.33;
  text-align: center;
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.9);
`;
const Calories = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  line-height: 1.33;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.035);
  padding: 12px;
  margin-bottom: 20px;
`;
const CardImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;
const CardButton = styled.button`
  padding: 4px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #0a66c2;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;
  position: relative;
  top: 30px;
  left: 250px;
  transition: 0.3s ease-in;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.9);
  }
`;
export default Recipe;

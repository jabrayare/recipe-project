import React from "react";
import styled from "styled-components";
function IngredientModal(props) {
  const reset = (e) => {
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Modal>
          <ContentModal>
            <CloseButton onClick={(e) => reset(e)}>X</CloseButton>
            <h3>Ingredients for {props.title}</h3>
            {props.ingredients.map((ingredient) => (
              <Ingredient>
                {ingredient.image && (
                  <img src={ingredient.image} alt="ingredient image" />
                )}
                <p>{ingredient.text}</p>
              </Ingredient>
            ))}
          </ContentModal>
        </Modal>
      )}
    </>
  );
}
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  animation: fadeIn 0.3s;
  transition: 0.3s ease-in;
`;
const ContentModal = styled.div`
  width: 100%;
  max-width: 564px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 75px;
  margin: 0 auto;
  overflow: scroll;
  height: 400px;
  h3 {
    font-size: 16px;
    line-height: 1.33;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    margin: 20px 4px;
  }
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.76);
`;
const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  min-width: auto;
  background-color: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
  position: relative;
  top: 10px;
  left: 500px;
  padding: 5px;
`;
const Ingredient = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  background-color: rgba(0, 0, 0, 0.15);
  margin: 4px 8px;
  padding: 4px 16px;
  border-radius: 5px;
`;

export default IngredientModal;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Modal = () => {
  const navigate = useNavigate();

  return (
    <ModalSection>
      <ElementContainer>
        <ButtonContainer onClick={() => navigate('login')}>
          로그인
        </ButtonContainer>
        <ButtonContainer>아무 말</ButtonContainer>
        <ButtonContainer>아무 말</ButtonContainer>
      </ElementContainer>
    </ModalSection>
  );
};

export default Modal;

const ModalSection = styled.div`
  width: 150px;
  height: 167px;
  background: #fff;

  position: absolute;

  z-index: 1;

  top: 50px;
  right: 5px;
`;

const ElementContainer = styled.div`
  width: 142px;
  height: 156px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  padding: 0 0 0.6875rem 0.6875rem;
  margin-bottom: 0.875rem;
  box-sizing: border-box;

  color: #000;
  font-family: Gmarket Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::after {
    content: '';
    position: absolute;
    left: 3px;
    bottom: 0;
    height: 1px;
    width: 95%; /* or 100px */
    border-bottom: 1px solid #d9d9d9;
  }
`;

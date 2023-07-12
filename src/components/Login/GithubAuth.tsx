import React from 'react';
import { styled } from 'styled-components';

const GithubAuth = () => {
  const GithubAuth = () => {
    const Redirect_URI = 'http://localhost:3000/auth-login/callback';
    const Client_ID = `${import.meta.env.VITE_GITHUB_AUTH_API_KEY}`;
    console.log(Client_ID);

    const Github_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${Client_ID}&redirect_uri=${Redirect_URI}`;
    window.location.href = Github_AUTH_URL;
  };

  // const AuthController = async () => {
  //   try {
  //     // const response = await axios.get(
  //     //   'http://localhost:3000/auth-login/callback',
  //     // );
  //     const response = await axios.get('oauth/github');
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <LoginPageSection>
      <ElementContainer>
        <TitleContainer>Codyssey</TitleContainer>
        <LoginButtonContainer onClick={GithubAuth}>
          <TextContainer>Github로 로그인하기</TextContainer>
        </LoginButtonContainer>
      </ElementContainer>
    </LoginPageSection>
  );
};

export default GithubAuth;

const LoginPageSection = styled.div`
  width: 100%;
  height: 100%;

  padding: 3.125rem 0.625rem 0 0.6875rem;
  box-sizing: border-box;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 8px 2.9375rem 137px 2.9375rem;
`;

const TitleContainer = styled.div`
  width: 372px;
  height: 43px;

  color: #000;
  text-align: center;
  font-family: Gmarket Sans;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const LoginButtonContainer = styled.button`
  width: 300px;
  height: 56px;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  border-radius: 12px;
  background: #000;
  cursor: pointer;
`;

const TextContainer = styled.div`
  color: #fff;
  font-family: Gmarket Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

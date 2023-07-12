import React from 'react';
import styled from 'styled-components';
import Modal from '@UI/Modal';

const Header = () => {
  return (
    <HeaderSection>
      <ElementContainer>
        <MenuBarSection>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="22"
            viewBox="0 0 36 22"
            fill="none"
          >
            <path
              d="M0 0.7C0 0.313401 0.313401 0 0.7 0H35.3C35.6866 0 36 0.313401 36 0.7V1.3C36 1.6866 35.6866 2 35.3 2H0.700001C0.313401 2 0 1.6866 0 1.3V0.7Z"
              fill="black"
            />
            <path
              d="M0 10.7C0 10.3134 0.313401 10 0.7 10H35.3C35.6866 10 36 10.3134 36 10.7V11.3C36 11.6866 35.6866 12 35.3 12H0.700001C0.313401 12 0 11.6866 0 11.3V10.7Z"
              fill="black"
            />
            <path
              d="M0 20.7C0 20.3134 0.313401 20 0.7 20H35.3C35.6866 20 36 20.3134 36 20.7V21.3C36 21.6866 35.6866 22 35.3 22H0.700001C0.313401 22 0 21.6866 0 21.3V20.7Z"
              fill="black"
            />
          </svg>
        </MenuBarSection>
        <ProfileSection>
          <ProfileImageContainer>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0C4.25948 0 0 4.25948 0 9.5C0 14.7405 4.25948 19 9.5 19C14.7405 19 19 14.7405 19 9.5C19 4.25948 14.7405 0 9.5 0ZM9.5 17.3856C7.00392 17.3856 4.78105 16.2183 3.33431 14.399C4.34119 13.0818 5.74546 12.1239 7.33922 11.667C6.76474 11.3028 6.2916 10.7994 5.96377 10.2034C5.63594 9.60749 5.46405 8.93834 5.46405 8.25817C5.46405 7.18777 5.88927 6.16121 6.64615 5.40432C7.40304 4.64744 8.4296 4.22222 9.5 4.22222C10.5704 4.22222 11.597 4.64744 12.3538 5.40432C13.1107 6.16121 13.5359 7.18777 13.5359 8.25817C13.5364 8.93929 13.3648 9.60948 13.037 10.2065C12.7091 10.8035 12.2358 11.3081 11.6608 11.6732C13.2547 12.1297 14.6591 13.0877 15.6657 14.4052C14.9291 15.3346 13.9919 16.0854 12.9242 16.6015C11.8565 17.1176 10.6859 17.3857 9.5 17.3856Z"
                fill="black"
              />
            </svg>
          </ProfileImageContainer>
          <DescriptionContainer>내 정보</DescriptionContainer>
        </ProfileSection>
        <Modal />
      </ElementContainer>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
  @media (max-width: 393px) {
    width: 100%;
  }
  width: 100%;
  height: 61.5px;
  background: #fff;
  border-bottom: 2px solid #d9d9d9;
`;

const ElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  position: relative;

  box-sizing: border-box;

  padding: 0 0.75rem 0 1.125rem;
`;

const MenuBarSection = styled.div`
  width: 36px;
  height: 22px;
`;

const ProfileSection = styled.div`
  width: 70px;
  height: 21px;

  display: flex;
  align-items: center;

  border-radius: 10.5px;
  background: #fff;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 0.125rem;
`;

const DescriptionContainer = styled.div`
  color: #000;
  font-family: Gmarket Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 0.1875rem;
`;

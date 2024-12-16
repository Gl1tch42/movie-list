import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileName = styled.div`
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: white;
  margin-right: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  width: 150px;
  display: ${props => (props.show ? 'block' : 'none')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

function Profile({ onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <ProfileWrapper onClick={handleToggleDropdown}>
      <ProfileImage src="https://via.placeholder.com/40" alt="Perfil" />
      <ProfileName>User1</ProfileName>
      <DropdownMenu show={showDropdown}>
        <DropdownItem onClick={onLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </ProfileWrapper>
  );
}

export default Profile;

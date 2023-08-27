import React from "react";
import { UserProfile } from "../types/UserProfile";
import styled from "@emotion/styled";

type Props = {
  user: UserProfile;
};

export const UserCard: React.FC<Props> = (props) => {
  const { user } = props;
  return (
    <SDiv>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 1px #ccc;
  border-radius: 8px;
  padding: 0 16px;
  margin: 8px;
`;

export default UserCard;

import { ContainerHeader, UserContainer, UserDescription, UserImgProfile, UserName } from './styles';
import DefaultIcon from 'assets/default-icon.svg';

export default function Header() {
  return (
    <ContainerHeader data-testid="container-header">
      <img data-testid="logo-header" src={DefaultIcon} alt="" />
      <UserContainer data-testid="user-container">
        <div>
          <UserName data-testid="user-name">Usuário Teste</UserName>
          <UserDescription data-testid="user-description">Teste de Front-end</UserDescription>
        </div>
        <div>
          <UserImgProfile data-testid="user-img">UT</UserImgProfile>
        </div>
      </UserContainer>
    </ContainerHeader>
  );
}

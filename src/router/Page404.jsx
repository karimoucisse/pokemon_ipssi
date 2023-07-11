import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  background-color: #1c2930;
  color: white;
  cursor: pointer;
`;
const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Page404 = () => {
  return (
    <Container>
      <h1>Page Inconnu</h1>
      <ButtonLink to="/">
        <Button>Retourner à la page d'accueil</Button>
      </ButtonLink>
    </Container>
  );
};

export default Page404;

import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const Tabla = styled.table`
max-width: 800px;
margin: auto;
gap: 20px;
border-radius: 10px;
border: solid 1px rgb(0, 89, 173);
padding: 10px;
margin-top: 30px;
`;
export const Tr = styled.tr`
  border-radius: 10px;
`;

export const TablaTitulo = styled.th`
  min-width: 50px;
  padding: 10px;
  background-color: #7f7f90;
  font-size: 1.2rem;
  text-transform: capitalize;
  @media (max-width: 350px) {
      padding: 0px;
    }
`;

export const TablaValor = styled.th`
  min-width: 100px;
  padding: 10px;
  font-weight: normal;
  background-color: #c5c5c0;
  font-size: 1.2rem;
  @media (max-width: 350px) {
    padding: 5px;
    font-size: 1rem;
  }
`;

export const FavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

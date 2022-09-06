import styled from "styled-components";


export const WorkWrapper = styled.section`
  font-family: 'Comfortaa', cursive;
  padding: 1.25rem;
  margin: 2rem 0 3rem;
  width: 100%;


  .work-container {
    margin: 0 4rem;
    padding: 2rem 0.94rem;


    .work-info {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 2.7rem;
      align-items: center;
      justify-content: space-between;
    }
  }


  /* MEDIA QUERY */

  @media (max-width: 576px) {
    .work-container {
      margin: 0 2rem;
      padding: 2rem 0;
    }
  } 
`;

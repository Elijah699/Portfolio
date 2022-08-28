import styled from 'styled-components';
import dot from '../assets/images/dot.jpg';

export const CapabilityWrapper = styled.div`
  font-family: 'Comfortaa', cursive;
  padding: 1.25rem;
  margin: 2rem 0;
  height: 100vh;
  width: 100%;

  .cap-container {
    margin: 0 4rem;
    padding: 2rem 0.94rem;


    .cap-info {
      display: flex;
      margin-top: 2rem;

      .col-1 {
        color: #f6ccef;
        width: 63%;
        margin-left: 5rem;
        padding-right: 3.5rem;

        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          letter-spacing: 1px;
          margin: 0.8rem 0;
        }

        .cap-skills {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          max-width: 600px;
          padding-top: 1.5rem;

          .skill-col {
            width: 50%;

            .skill {
              background-image: url(${dot});
              background-position: 0 50%;
              background-size: 13px;
              background-repeat: no-repeat;
              font-weight: 300;
              margin-bottom: 8px;
              padding-left: 35px;
              color: #fff;
              font-size: 18px;
            }
          }
        }
      }

      .col-2 {
        width: 37%;

        img {
          max-width: 100%;
        }
      }
    }
  }
`;

// #a588b0

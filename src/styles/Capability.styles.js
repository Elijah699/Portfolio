import styled from 'styled-components';
import dot from '../assets/images/dot.jpg';

export const CapabilityWrapper = styled.section`
  font-family: 'Comfortaa', cursive;
  padding: 1.25rem;
  margin: 2rem 0 3rem;
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
          letter-spacing: 0.0625rem;
          margin: 0.8rem 0;
        }

        .cap-skills {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          max-width: 37.5rem; //600px
          padding-top: 1.5rem;

          .skill-col {
            width: 50%;

            .skill {
              background-image: url(${dot});
              background-position: 0 50%;
              background-size: 0.8125rem;
              background-repeat: no-repeat;
              font-weight: 300;
              margin-bottom: 0.5rem;
              padding-left: 2.1875rem;
              color: #fff;
              font-size: 1.125rem;
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


  /* MEDIA QUERIES */
  @media (max-width: 900px) {
    .cap-container {
      margin: 0 2rem;
    }
  }


  @media (max-width: 800px) {
    .cap-container {
      .cap-info {
        .col-1 {
          margin-left: 0;
          padding-right: 0;
        }
      }
    }
  }


  @media (max-width: 576px) {
    margin: 2rem 0 1rem;

    .cap-container {
      padding: 2rem 0;
      .cap-info {
        flex-direction: column-reverse;

        .col-1 {
          width: 100%;
          margin-top: 1rem;

          .cap-skills {
            flex-direction: column;

            .skill-col {
              width: 100%;

              .skill {
                padding-top: 0.5rem;
              }
            }
          }
        }

        .col-2 {
          width: 60%;
        }
      }
    }
  }
`;

import styled, { keyframes } from 'styled-components';

const RotateIcon = keyframes`
  0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
`;

export const ContactWrapper = styled.section`
  font-family: 'Comfortaa', cursive;
  padding: 1.25rem;
  margin: 3rem 0 1rem;
  width: 100%;

  .flex {
    display: flex;
    flex-direction: row;
  }

  .con-container {
    margin: 0 4rem;
    padding: 2rem 0.94rem;
    color: #f6ccef;
  }

  .con-1,
  .con-2 {
    width: 50%;
  }

  .con-1 {
    .basic-contact {
      display: flex;
      padding: 0.75rem 1rem 0.25rem;
      margin: 1rem 0;
      margin-bottom: 2rem;
      color: #f6ccef;

      svg {
        fill: #a588b0;
        font-size: 2rem;
        margin-right: 0.75rem;
      }
    }

    .contact-icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5rem 1rem 1rem;

      .social-icon {
        text-align: center;
        color: #a588b0;
        margin-right: 2rem;

        svg {
          font-size: 2.5rem;

          &:hover {
            stroke: #ffffff;
          }
        }

        &:hover {
          -webkit-animation: ${RotateIcon} 0.6s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: ${RotateIcon} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }
      }
    }
  }

  .con-2 {
    .contact-field {
      background-color: #3d2c8d;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem 0.25rem;
      margin: 1rem 0;
    }

    label {
      display: block;
      margin-bottom: 0.7rem;
    }

    input,
    textarea {
      width: 100%;
      background-color: #3d2c8d;
      color: #f6ccef;
      outline: none;
      border: none;
      padding: 0.25rem 0.5rem;
    }

    .btn {
      text-align: center;

      .submit {
        margin: 1rem 0;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        padding: 1rem 3.125rem;
        border: 0.0625rem solid;
        border-radius: 0.3125rem;
        cursor: pointer;
        color: #f6ccef;
        outline: 0;
        background: transparent;

        &:hover {
          background: #916bbf;
          color: #000;
        }

        svg {
          position: relative;
          top: 0.3125rem;
        }
      }
    }
  }

  .footer {
    padding: 3rem 0 0.5rem;
    text-align: center;
  }

  /* MEDIA QUERIES */
  @media (max-width: 900px) {
    .con-container {
      margin: 0 2rem;
    }
  }

  @media (max-width: 700px) {
    .flex {
      flex-direction: column-reverse;
    }

    .con-1,
    .con-2 {
      width: 100%;
    }

    .con-1 {
      margin-top: 3rem;
    }

    .contact-icons {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    .con-container {
      padding: 2rem 0;
    }

    .con-1 {
      .contact-icons {
        .social-icon {
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

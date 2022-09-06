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

export const IntroWrapper = styled.section`
  padding: 1.25rem;
  /* height: 100vh; */
  width: 100%;
  color: #d700ff;

  .intro-container {
    display: flex;
    flex-direction: row;
    padding: 5rem 0.94rem;
    margin: 0 4rem;

    p {
      letter-spacing: 0.08125rem;
    }

    .intro-icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 20px;
      height: 40vh;
      padding-bottom: 2rem;

      .social-icon {
        text-align: center;
        color: #a588b0;

        svg {
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

      span {
        padding-top: 2rem;
        background: #a588b0;
        height: 4.375rem;
        width: 0.125rem;
        text-align: center;
      }
    }

    .intro-info {
      margin-left: 5rem;

      .first-p {
        font-family: 'Comfortaa', cursive;
        color: #916bbf;
        font-size: 1.25rem;
        font-weight: 400;
        margin: 0.6rem 0;
        padding: 0.6rem 0;
      }

      .main-p {
        font-family: 'Josefin Sans', sans-serif;
        color: #f6ccee;
        font-weight: 700;
        font-size: 4rem;
        margin: 1rem 0;
        padding: 0.5rem 0;
      }

      .hero-animation {
        font-family: 'Comfortaa', cursive;
        font-size: 1.25rem;
        font-weight: 400;
        color: #916bbf;
        margin: 0.6rem 0;
        padding: 0.5rem 0;
      }

      .hero-span {
        color: #fff;
      }

      .third-p {
        padding: 1rem 0;
        color: #f6ccef;
        font-size: 1rem;
        font-weight: 300;
        line-height: 2;
        width: 35vw;
      }

      .mail-div {
        margin-top: 1.875rem;
        padding: 0.5rem 0;

        .btn {
          text-decoration: none;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 400;
          padding: 1rem 3.125rem;
          border: 0.0625rem solid;
          border-radius: 0.3125rem;
          cursor: pointer;
          color: #f6ccef;
          outline: 0;
        }

        .mail {
          margin-left: 0.7rem;
          background: #d700ff;

          &:hover {
            background: #f6ccef;
            color: #000;
          }
        }

        .resume {
          background: transparent;

          &:hover {
            background: #916bbf;
            color: #000;
          }
        }

        .arrow {
          text-align: center;
          margin-left: 0.5rem;
          align-items: center;

          svg {
            position: relative;
            top: 0.18rem;
            align-items: center;
          }
        }
      }
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 900px) {
    .intro-container {
      margin: 0 2rem;
    }
  }

  @media (max-width: 800px) {
    .intro-container {
      .intro-icons {
        display: none;
      }

      .intro-info {
        margin-left: 0;

        .third-p {
          width: 55vw;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .intro-container {
      padding: 3rem 0;

      .intro-info {
        .main-p {
          font-size: 9vw;

          .middle-name {
            display: none;
          }
        }

        .hero-animation {
          font-size: 4vw;
        }

        .third-p {
          width: 65vw;
        }

        .mail-div {
          a {
            display: block;
            text-align: center;
          }

          .mail {
            margin-top: 1rem;
            margin-left: 0;
          }
        }
      }
    }
  }
`;

const waveAnimation = keyframes`
0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate( -8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`;

export const Wave = styled.span`
  animation-name: ${waveAnimation}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`;

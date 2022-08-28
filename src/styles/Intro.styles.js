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
  height: 100vh;
  width: 100%;
  color: #d700ff;

  .intro-container {
    display: flex;
    flex-direction: row;
    padding: 5rem 0.94rem;
    margin: 0 4rem;

    p {
      letter-spacing: 1.3px;
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
        height: 70px;
        width: 2px;
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
        font-size: 20px;
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
        font-size: 16px;
        font-weight: 300;
        line-height: 2;
        width: 35vw;
      }

      .mail-div {
        margin-top: 30px;
        padding: 0.5rem 0;

        .btn {
          text-decoration: none;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 400;
          padding: 16px 50px;
          border: 1px solid;
          border-radius: 5px;
          cursor: pointer;
          color: #f6ccef;
          outline: 0;
        }

        .mail {
          background: #d700ff;

          &:hover {
            background: #f6ccef;
            color: #000;
          }
        }

        .resume {
          margin-left: 0.7rem;
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

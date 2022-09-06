import styled from 'styled-components';

// images
import overlay from '../assets/images/overlay-bg.png';
import musicity from '../assets/images/musicity.jpg';
import explorer from '../assets/images/p-explorer.jpg';
import covid from '../assets/images/covid.jpg';
import tandem from '../assets/images/tandem.jpg';

export const ProjectWrapper = styled.div`
  width: 45%;
  height: 100%;
  color: #f6ccef;

  .img-container {
    position: relative;

    .bg-img {
      border-radius: 0.75rem;
      height: 13rem;
      padding: 1.875rem 0 0;
      text-align: center;
      width: 100%;
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      opacity: 0;
      -moz-opacity: 0;
      filter: alpha(opacity=0);

      -webkit-transition: opacity 0.3s ease-in-out;
      -moz-transition: opacity 0.3s ease-in-out;
      -o-transition: opacity 0.3s ease-in-out;
      transition: opacity 0.3s ease-in-out;
      background: url(${overlay}) repeat;
    }

    .link-icon {
      display: block;
      color: #fff;
      height: 1.875rem;
      width: 1.875rem;
      font-size: 1.125rem;
      line-height: 1.875rem;
      text-align: center;

      opacity: 0;
      -moz-opacity: 0;
      filter: alpha(opacity=0);

      -webkit-transition: opacity 0.3s ease-in-out;
      -moz-transition: opacity 0.3s ease-in-out;
      -o-transition: opacity 0.3s ease-in-out;
      transition: opacity 0.3s ease-in-out;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -0.9735rem;
      margin-top: -0.9735rem;
    }

    .item-meta {
      padding: 1.125rem;
    }

    .item-meta h5 {
      font: 0.875rem;
      color: #fff;
      margin: 1rem 0;
    }

    .item-meta p {
      font-family: 'Josefin Sans', sans-serif;
      font: 1rem;
      color: #c6c7c7;
      margin: 3.8rem 0;
    }

    &:hover .overlay,
    &:hover .link-icon {
      opacity: 1;
      -moz-opacity: 1;
      filter: alpha(opacity=100);
    }
  }

  .one {
    background: url(${musicity});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .two {
    background: url(${explorer});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .three {
    background: url(${covid});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .four {
    background: url(${tandem});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h3 {
    font-size: 1.5625rem;
    margin: 1rem 0;

    a {
      text-decoration: none;
      color: #f6ccef;
    }
  }

  .icons {
    a {
      font-family: 'Josefin Sans', sans-serif;
      text-decoration: none;
      color: #f6ccef;

      svg {
        stroke: #fff;
        position: relative;
        top: 0.1875rem;
      }
    }
  }

  /* MEDIA QUERY */
  @media (max-width: 900px) {
    width: 100%;
  }
`;

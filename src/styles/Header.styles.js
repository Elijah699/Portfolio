import styled from 'styled-components';


export const HeaderWrapper = styled.div`
  font-family: 'Comfortaa', cursive;
  position: relative;
  width: 100%;
  padding: 1.25rem;
  /* background-color: ; */
  z-index: 997;
  transition: all 0.5s;
  box-shadow: 0px 0.125rem 0.9375rem rgba(0, 0, 0, 0.1);

  .header-container {
    margin: 0 4rem;
    display: flex;
    align-items: center;
  }

  .icon {
    border: 0;
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
    background-color: #000;

    svg {
      color: #f6ccef;
    }
  }

  .header-menu {
    margin-left: auto;

    ul {
      display: flex;
      padding: 0;
    }

    li {
      list-style-type: none;
      margin: 0 2rem;
    }

    a {
      text-decoration: none;
      display: block;
      width: 100%;
      color: #f6ccef;

      &:hover {
        margin-top: 0.3125rem;
        border-bottom: 0.1875rem solid #d700ff;
        border-radius: 0.3125rem;
        cursor: pointer;
      }

      &:active {
        color: #d700ff;
        transition: all 0.3s linear;
      }
    }
  }

  /* MEDIA QUERY */

  @media (max-width: 900px) {
    .header-container {
      margin: 0 2rem;
    }
  }


  @media (max-width: 700px) {
    padding: 1rem;

    .header-container {
      margin: 0 0.5rem;
    }

    .icon {
      display: block;
    }

    .header-menu.active ul {
      /* display: block; */
      left: 0;
    }

    .header-menu {
      ul {
        /* display: none; */
        // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
        position: absolute;
        top: 4.375rem;
        left: -100%;
        // stacks li tag vertically
        flex-direction: column;
        // makes menu span full height and width
        width: 100%;
        height: 92vh; //calc(100vh - 77px)
        background-color: #d700ff;
        opacity: 0.8;
        transition: 0.8s;
        border-top: 1px solid #000;
      }

      li {
        text-align: center;
        margin: 2rem 0 0;
      }

      a {
        font-size: 1.5rem;
        color: #000;
        width: 100%;
        padding: 1.5rem 0;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

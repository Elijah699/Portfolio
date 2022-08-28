import styled from 'styled-components';
// import overlay from '../assets/images/overlay-bg.png';
import musicity from '../assets/images/musicity.jpg';
import explorer from '../assets/images/p-explorer.jpg';
import covid from '../assets/images/covid.jpg';
import tandem from '../assets/images/tandem.jpg';

export const ProjectWrapper = styled.div`
    width: 45%;
    height: 100%;
    color: #f6ccef;

    .bg-img {
        border-radius: 12px;
        height: 13rem;
        padding: 30px 0 0;
        text-align: center;
        width: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .one {
        background: url(${musicity});
    }

    .two {
        background: url(${explorer});
    }

    .three {
        background: url(${covid});
    }

    .four {
        background: url(${tandem});
    }

    h3 {
        margin-top: 10px;
    }
`;



// width: 45%;
//     height: 100%;
//     margin-bottom: 35px;


//   .wrap {
//     background: #fff;
//     overflow: hidden;
//     position: relative;
//     -webkit-transition: all 0.3s ease-in-out;
//     -moz-transition: all 0.3s ease-in-out;
//     -o-transition: all 0.3s ease-in-out;
//     -ms-transition: all 0.3s ease-in-out;
//     transition: all 0.3s ease-in-out;

//     a {
//       display: block;
//       cursor: pointer;
//     }

//     .overlay {
//       position: absolute;
//       left: 0;
//       top: 0;
//       width: 100%;
//       height: 100%;

//       opacity: 0;
//       -moz-opacity: 0;
//       filter: alpha(opacity=0);

//       -webkit-transition: opacity 0.3s ease-in-out;
//       -moz-transition: opacity 0.3s ease-in-out;
//       -o-transition: opacity 0.3s ease-in-out;
//       transition: opacity 0.3s ease-in-out;
//       background: url(${overlay}) repeat;
//     }

//     .link-icon {
//       display: block;
//       color: #fff;
//       height: 30px;
//       width: 30px;
//       font-size: 18px;
//       line-height: 30px;
//       text-align: center;

//       opacity: 0;
//       -moz-opacity: 0;
//       filter: alpha(opacity=0);

//       -webkit-transition: opacity 0.3s ease-in-out;
//       -moz-transition: opacity 0.3s ease-in-out;
//       -o-transition: opacity 0.3s ease-in-out;
//       transition: opacity 0.3s ease-in-out;

//       position: absolute;
//       top: 50%;
//       left: 50%;
//       margin-left: -15px;
//       margin-top: -15px;
//     }

//     img {
//       vertical-align: bottom;
//     }

//     .item-meta {
//       padding: 18px;
//     }

//     .item-meta h5 {
//       font: 14px/21px;
//       color: #fff;
//     }

//     .item-meta p {
//       font: 12px/18px;
//       color: #c6c7c7;
//       margin-bottom: 0;
//     }
//   }

//   &:hover .overlay,
//   &:hover .link-icon {
//     opacity: 1;
//     -moz-opacity: 1;
//     filter: alpha(opacity=100);
//   }
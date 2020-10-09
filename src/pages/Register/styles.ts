import styled from 'styled-components';
import loginBackgroundImg from '../../assets/dti-login.png';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    place-content: center;
    width: 100%;
    max-width: 700px;

    h1{
        margin-bottom:20px;
    }

    form {
        margin: 80px 0;
        width: 350px;
        text-align: center;
        svg {
            margin-right: 300px;

        }
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#4169e1')};
        }
    }

    svg {
            margin-right: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${loginBackgroundImg}) no-repeat center;
    background-size: cover;
`;

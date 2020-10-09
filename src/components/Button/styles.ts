import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #4169e1;
    height: 56px;
    border-radius: 10px;
    border: 0;
    color: #232129;
    width: 100%;
    margin-top: 20px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#4169e1')};
    }
`;

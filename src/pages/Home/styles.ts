import styled, {StyledComponent} from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const BaseCountDownButton = styled.button`
    width: 100%;
    height: 3.4rem;
    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-400']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
        transition: 0.3s;
    }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
        transition: 0.3s;
    }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['gray-100']};

    &:not(:disabled):hover {
        background: ${props => props.theme['red-700']};
        transition: 0.3s;
    }
`;
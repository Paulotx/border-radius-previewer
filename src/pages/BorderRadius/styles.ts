import styled from 'styled-components';

import bg from '../../assets/bg.jpg';

interface IPhotoProps {
    borderRadius: string;
}

export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #333;
    margin-top: 24px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1380px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 70px;

    @media (max-width: 1380px) {
        margin-left: 0;
    }

    .area-container {
        width: 380px;
        height: 380px;

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            padding: 8px;
            width: 50px;
            border: 2px solid #999;
            border-radius: 6px;
            position: absolute;
        }

        .input-top-left-x {
            left: 64px;
            top: -60px;
        }

        .input-top-right-x {
            right: 64px;
            top: -60px;
        }
        .input-top-right-y {
            right: -74px;
            top: 60px;
        }

        .input-bottom-right-y {
            right: -74px;
            bottom: 60px;
        }

        .input-bottom-right-x {
            right: 64px;
            bottom: -60px;
        }

        .input-bottom-left-x {
            left: 64px;
            bottom: -60px;
        }

        .input-bottom-left-y {
            left: -74px;
            bottom: 60px;
        }

        .input-top-left-y {
            left: -74px;
            top: 60px;
        }
    }

    .bar {
        position: absolute;
        height: 100px;

        &.bar-horizontal {
            width: 280px;
            height: 3px;
            left: 50%;
            transform: translateX(-50%);
        }

        &.bar-vertical {
            width: 3px;
            height: 280px;
            top: 50%;
            transform: translateY(-50%);
        }

        &.bar-top {
            top: 0;
        }

        &.bar-bottom {
            bottom: 0;
        }

        &.bar-right {
            right: 0;
        }

        &.bar-left {
            left: 0;
        }

        .bar-container {
            background: #333;
            width: 100%;
            height: 100%;

            button {
                height: 32px;
                width: 32px;
                position: absolute;
                border-radius: 16px;
                background: #ddd;
                border: 3px solid #aaa;
                cursor: pointer;
                font-size: 4px;
                color: #ddd;

                &:focus {
                    border-color: #e46511;
                    background: #f4a895;
                    color: #f4a895;
                }
            }
        }
    }

    .borderRadiusResult {
        bottom: 0px;
        position: absolute;
    }
`;

export const Photo = styled.div<IPhotoProps>`
    width: 330px;
    height: 330px;
    background: url(${bg}) center center no-repeat;
    background-size: cover;
    border: 8px solid #e46511;
    border-radius: ${props => props.borderRadius};
`;

export const Result = styled.div`
    margin-bottom: 24px;
    margin-top: 32px;

    @media (max-width: 1480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        color: #333;
        width: 500px;
        padding: 8px 12px;
        border: 2px solid #333;
        font-size: 16px;
        border-radius: 8px;
        margin-right: 12px;
    }

    div {
        display: inline-block;

        @media (max-width: 1480px) {
            margin-bottom: 12px;
        }
    }

    button {
        width: 100px;
        padding: 8px 16px;
        background: #999;
        color: #fff;
        border: 2px solid #333;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;

        &:hover {
            background: #bbb;
        }

        &:last-child {
            background: #e46511;
            margin-left: 12px;
            margin-right: 12px;
        }

        &:last-child:hover {
            background: #f4a895;
        }
    }
`;

import styled from 'styled-components';

import bg from '../../assets/bg.jpg';

interface IPhotoProps {
    borderRadius: string;
}

export const Title = styled.h2`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #333;
    margin-top: 32px;
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    margin-bottom: 32px;
    display: flex;
    align-items: center;

    input {
        font-family: 'Roboto', sans-serif;
        color: #333;
        width: 500px;
        padding: 8px 12px;
        border: 2px solid #333;
        font-size: 16px;
        border-radius: 8px;
    }

    button {
        width: 100px;
        padding: 8px 16px;
        background: #e46511;
        color: #fff;
        border: 2px solid #333;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;
        margin-right: 12px;

        &:hover {
            background: #f4a895;
        }

        &:first-child {
            background: #999;
        }

        &:first-child:hover {
            background: #bbb;
        }
    }
`;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		font-family: sans-serif;
		background-color: #F9F9F9;
	}

	input {
        width: 100%;
        height: 36px;
        padding: 0 8px;
        box-sizing: border-box;

        border-radius: 8px;
        border: 1px solid #BCBCBC;
        background-color: #F9F9F9;

        color: black;

        &::placeholder {
           color: #BCBCBC;
        }
    }
`;

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	box-sizing: border-box;
	padding: 48px 24px;

	display: flex;
	gap: 16px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	width: 70%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 48px;

	font-size: 16px;
	font-weight: 600;

	color: #58bb80;
	background-color: #fcfaf6;
	border: 2px solid #58bb80;
	border-radius: 10px;

	cursor: pointer;

	&:disabled {
		cursor: auto;
		color: #a7a7a7;
		background-color: transparent;
		border: 2px solid #a7a7a7;
	}

	&:hover:not([disabled]) {
		color: #fcfaf6;
		background-color: #58bb80;
	}
`;

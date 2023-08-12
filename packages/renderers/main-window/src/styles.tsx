import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #F9F9F9;
  }

  h2 {
	margin :0
  }

  button {
	width: 250px;
	height: 48px;

	font-size: 16px;
	font-weight: 600;

	cursor: pointer;
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
	justify-content: space-between;
`;

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	gap: 16px;
`;

export const LoginButton = styled.button`
	color: #58b9f1;
	background-color: transparent;
	border: 2px solid #58b9f1;
	border-radius: 10px;

	&:hover {
		color: #f9f9f9;
		background-color: #58b9f1;
	}
`;

export const LoggedInContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 16px;
`;

export const CloseButton = styled.button`
	color: #ec6262;
	background-color: transparent;
	border: 2px solid #ec6262;
	border-radius: 10px;

	&:hover {
		color: #f9f9f9;
		background-color: #ec6262;
	}
`;

export const LogoutButton = styled.button`
	color: #f8ca56;
	background-color: transparent;
	border: 2px solid #f8ca56;
	border-radius: 10px;

	&:hover {
		color: #f9f9f9;
		background-color: #f8ca56;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 20px auto;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.div`
    max-width: 1120px;
    width: 90%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: teal;
    color: #fff;
    border-radius: 2px;
`;

export const h1 = styled.h1``

export const Label = styled.label`
    margin: 10px;
    font-size: 1.3rem;
    font-weight: bold;
`;

export const Body = styled.div`
    max-width: 1120px;
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ddd;
    border-radius: 2px;
    margin-top: 10px;
    gap: 30px;
`;

export const Form = styled.form``;

export const Input = styled.input`
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    width: 50%;
`;
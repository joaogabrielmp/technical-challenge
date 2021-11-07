import styled from "styled-components";

export const Container = styled.div`
  background: #ffff;
  margin: 49px 276px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: #123952;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 15px 0;
`;

export const SublTitle = styled.h2`
  color: #123952;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  margin: 15px 0;
`;

export const TitleResult = styled.p`
  color: #123952;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 402px;
  height: 40px;
  padding: 25px;
  background: #f5f8fa;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  margin-bottom: 15px;
  &::placeholder {
    color: #f25d27;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  background: #f25d27;
  color: #ffff;
  border: 0;
  border-radius: 0 10px 10px 0;
  padding: 17px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  background: #f5f8fa;
  border: 1px solid #dce2e6;
  width: 500px;
  height: 40px;
  border-radius: 10px;
  margin: 15px 0;
  li {
    list-style-type: none;
    padding: 10px 15px;
    color: #123952;
  }
`;

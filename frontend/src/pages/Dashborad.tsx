import React from "react";
import * as S from "./styles";
import Logo from "../assets/logo.svg";
import api from "../services/api";

interface INumbersData {
  entryNumber: number;
  divisorNumbers: Array<number>;
  primeDividers: Array<number>;
}

const Dashboard = () => {
  const [numbers, setNumbers] = React.useState<INumbersData>({
    entryNumber: 0,
    divisorNumbers: [],
    primeDividers: [],
  });
  const [calculate, setCalculate] = React.useState<number>();

  React.useEffect(() => {

  },[])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setCalculate(Number(newValue));
  };

  const handleSubmit = async () => {
    try {
      const response = await api.get("api/decompose", {
        params: {
            number: calculate
        },
      });
      setNumbers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
      <S.Title>Desafio técnico</S.Title>

      <div>
        <S.Input type="number" onChange={onChange} placeholder="Digite um número" />
        <S.Button onClick={handleSubmit}>Calcular</S.Button>
      </div>

      <div>
        <S.SublTitle>Resultados</S.SublTitle>
      </div>

      <section>
        <S.TitleResult>
          Números divisores de {numbers.entryNumber}
        </S.TitleResult>
        <S.List>
          {numbers.divisorNumbers.length === 0 ? (
            <li>Nunhum valor encontrado</li>
          ) : (
            <>
              {numbers.divisorNumbers.map((item) => (
                <li>{item}</li>
              ))}
            </>
          )}
        </S.List>

        <S.TitleResult>Números primos de {numbers.entryNumber}</S.TitleResult>
        <S.List>
          {numbers.primeDividers.length === 0 ? (
            <li>Nunhum valor encontrado</li>
          ) : (
            <>
              {numbers.primeDividers.map((item) => (
                <li>{item}</li>
              ))}
            </>
          )}
        </S.List>
      </section>
    </S.Container>
  );
};

export { Dashboard };

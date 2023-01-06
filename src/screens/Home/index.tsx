import { useState } from "react";
import { Logo } from "../../components/Logo";
import { TextField } from "../../components/TextField";
import * as S from "./style";

export function Home() {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <S.Container>
      <Logo />
      <TextField
        onInput={(a) => setValue(a)}
        placeholderText="Adicione uma nova tarefa"
      />
    </S.Container>
  );
}

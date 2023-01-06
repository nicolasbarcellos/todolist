import { Image } from "react-native";
import * as S from "./style";

export function Logo() {
  return (
    <S.Container>
      <S.Logo source={require("../../../assets/images/logo.png")} />
    </S.Container>
  );
}

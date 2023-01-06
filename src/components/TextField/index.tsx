import { useState } from "react";
import * as S from "./style";

export type TextFieldsProps = {
  disabled?: boolean;
  initialValue?: string;
  placeholderText?: string;
  placeholderTextColor?: string;
  error?: string;
  onInput?: (value: string) => void;
};

export function TextField({
  initialValue = "",
  placeholderText,
  placeholderTextColor = "#808080",
  error,
  disabled,
  onInput,
  ...props
}: TextFieldsProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Wrapper>
      <S.Input
        onChangeText={onInput}
        defaultValue={initialValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selectionColor={placeholderTextColor}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholderText}
        isFocused={isFocused}
        {...props}
      />
    </S.Wrapper>
  );
}

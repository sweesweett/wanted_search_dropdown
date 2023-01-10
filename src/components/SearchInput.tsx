import { useState, useCallback } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const focusHandler = (bool: boolean) => {
    setIsFocused(bool);
  };
  return (
    <InputWrapper focus={isFocused ? 'focus' : 'none'}>
      <Input
        type="text"
        placeholder="질환명을 입력해 주세요"
        onBlur={() => focusHandler(false)}
        onFocus={() => focusHandler(true)}
        onChange={onSearch}
      />
      <SearchBtn type="button">
        <BiSearch size="24px" color="white" />
      </SearchBtn>
    </InputWrapper>
  );
};
const InputWrapper = styled.div<Pick<InputStyle, 'focus'>>`
  margin: 20px auto;
  padding: 20px;
  border: 3px solid ${({ focus }) => (focus === 'focus' ? '#007be9' : 'transparent')};
  background-color: white;
  border-radius: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 90%;
`;

const SearchBtn = styled.button`
  background-color: #007be9;
  border-radius: 50%;
  padding-top: 5px;
  width: 36px;
  height: 36px;
`;
interface InputStyle {
  focus: string;
}

export default SearchInput;

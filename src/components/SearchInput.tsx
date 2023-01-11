import axios from 'axios';
import { useState, useCallback } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFillXCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { httpClient } from '../model/httpClient';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchData, keyword } from '../store';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  // const { fetchData } = httpClient;
  const setData = useSetRecoilState(searchData);
  const [getkeyword, setKeyword] = useRecoilState(keyword);
  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setData([]);
      return;
    }
    axios.get(`http://localhost:4000/sick?q=${e.target.value}`).then(({ data }) => {
      setKeyword(e.target.value);
      setData(data);
    });
  };
  const focusHandler = (bool: boolean) => {
    setIsFocused(bool);
  };
  return (
    <InputWrapper focus={isFocused ? 'focus' : 'none'}>
      <SearchForm onSubmit={() => console.log('dd')}>
        <Input
          type="text"
          placeholder="질환명을 입력해 주세요"
          onBlur={() => focusHandler(false)}
          onFocus={() => focusHandler(true)}
          onChange={onSearch}
        />
        <DeleteSearchBtn type="button" keyword={getkeyword} onClick={() => setKeyword('')}>
          <BsFillXCircleFill size="24px" color="gray" />
        </DeleteSearchBtn>
        <SearchBtn type="button">
          <BiSearch size="24px" color="white" />
        </SearchBtn>
      </SearchForm>
    </InputWrapper>
  );
};
const InputWrapper = styled.div<Pick<InputStyle, 'focus'>>`
  margin: 20px auto;
  padding: 0 20px;
  border: 3px solid ${({ focus }) => (focus === 'focus' ? '#007be9' : 'transparent')};
  background-color: white;
  border-radius: 45px;
`;

const SearchForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 20px;
`;

const SearchBtn = styled.button`
  background-color: #007be9;
  border-radius: 50%;
  padding-top: 5px;
  width: 36px;
  height: 36px;
`;
const DeleteSearchBtn = styled.button<Pick<InputStyle, 'keyword'>>`
  opacity: ${({ keyword }) => (keyword !== '' ? '1' : '0')};
`;
interface InputStyle {
  focus: string;
  keyword: string;
}

export default SearchInput;

import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFillXCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchIdxState, searchValueState } from '../store';
import useDebounce from '../hooks/useDebounce';
import useCache from '../hooks/useCache';
import { sickState } from '../store/sickState';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [sick, setSick] = useRecoilState(sickState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [searchIdx, setSearchIdx] = useRecoilState(searchIdxState);
  const debounce = useDebounce(searchValue);
  const cache = useCache(debounce as string);

  useEffect(() => {
    if (debounce) {
      if (cache) {
        setSick(cache);
      }
    }
    if (debounce === '') {
      setSick([]);
    }
  }, [debounce, setSick, cache]);

  const listIdxHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'ArrowUp') {
      setSearchIdx((prev) => prev - 1);
    } else if (e.key === 'ArrowDown') {
      setSearchIdx((prev) => prev + 1);
    } else if (e.key === 'BackSpace') {
      setSick([]);
      setSearchIdx(0);
    } else if (e.key === 'Enter') {
      setSearchValue(sick[searchIdx].sickNm);
      setSearchIdx(0);
    } else {
      setSearchIdx(0);
    }
  };
  const focusHandler = (bool: boolean) => {
    setIsFocused(bool);
  };

  return (
    <InputWrapper focus={isFocused ? 'focus' : 'none'}>
      <SearchForm onKeyDown={listIdxHandler} onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="질환명을 입력해 주세요"
          onBlur={() => focusHandler(false)}
          onFocus={() => focusHandler(true)}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <DeleteSearchBtn
          type="button"
          id="deleteBtn"
          title="deleteSearchValue"
          keyword={searchValue}
          disabled={!searchValue}
          onClick={() => {
            setSearchValue('');
            setSick([]);
            setSearchIdx(0);
          }}
        >
          <BsFillXCircleFill size="24px" color="gray" />
        </DeleteSearchBtn>
        <SearchBtn type="button" id="searchBtn" title="searchBtn">
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

const SearchForm = styled.form`
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
  :disabled {
    cursor: unset;
  }
`;
interface InputStyle {
  focus: string;
  keyword: string;
}

export default SearchInput;

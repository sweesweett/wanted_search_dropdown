import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { searchValueState } from '../store';
import { useRecoilState } from 'recoil';

const DropItem = ({ title, isSame }: { title: string; isSame: boolean }) => {
  const [keywordVal, setKeywordVal] = useRecoilState(searchValueState);
  const idx = title.indexOf(keywordVal);

  return (
    <ListItem isSame={isSame} onClick={() => setKeywordVal(title)}>
      <BiSearch size="20px" color="gray" />
      <ListContent>
        <span>{title.slice(0, idx)}</span>
        <EmpKeyword>{title.slice(idx, idx + keywordVal.length)}</EmpKeyword>
        <span>{title.slice(idx + keywordVal.length)}</span>
      </ListContent>
    </ListItem>
  );
};

const ListItem = styled.li<{ isSame: boolean }>`
  padding: 8px;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isSame }) => (isSame ? 'lightgray' : 'white')};
`;
const ListContent = styled.span`
  margin-left: 10px;
`;
const EmpKeyword = styled.span`
  font-weight: 700;
`;

export default DropItem;

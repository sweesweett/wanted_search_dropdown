import { SearchData } from '../types/search.type';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { searchValueState } from '../store';
import { useRecoilValue } from 'recoil';

const DropItem = ({ data }: { data: string }) => {
  const keywordVal = useRecoilValue(searchValueState);
  const idx: number = data.indexOf(keywordVal);

  return (
    <ListItem>
      <BiSearch size="20px" color="gray" />
      <ListContent>
        <span>{data.slice(0, idx)}</span>
        <EmpKeyword>{data.slice(idx, idx + keywordVal.length)}</EmpKeyword>
        <span>{data.slice(idx + keywordVal.length)}</span>
      </ListContent>
    </ListItem>
  );
};

const ListItem = styled.li`
  padding: 25px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const ListContent = styled.span`
  margin-left: 10px;
`;
const EmpKeyword = styled.span`
  font-weight: 700;
`;

export default DropItem;

import { useRecoilValue } from 'recoil';
import { searchData } from '../store';
import { SearchData } from '../types/search.type';
import DropItem from './DropItem';
import styled from 'styled-components';

const DropList = () => {
  const data = useRecoilValue(searchData);
  return (
    <List isExisted={data.length > 0 ? 'true' : 'false'}>
      {data?.map((item: SearchData) => (
        <DropItem key={item.sickCd} data={item.sickNm} />
      ))}
    </List>
  );
};
const List = styled.ul<{ isExisted: string }>`
  background-color: white;
  padding: ${({ isExisted }) => (isExisted === 'true' ? '30px 15px' : '0')};
  border-radius: 10px;
  max-height: 50vh;
  overflow-y: scroll;
`;
export default DropList;

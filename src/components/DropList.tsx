import { useRecoilValue } from 'recoil';
import { searchIdxState, searchValueState } from '../store';
import { sickState } from '../store/sickState';
import { SickTypes } from '../types/sick.type';
import DropItem from './DropItem';
import styled from 'styled-components';

const DropList = () => {
  const data = useRecoilValue(sickState);
  const searchValue = useRecoilValue(searchValueState);
  const searchIdx = useRecoilValue(searchIdxState);
  return (
    <DropListWrapper isActive={!!searchValue}>
      {!data.length && searchValue && <span>검색 결과 없음</span>}
      <ul>
        {data?.map((item: SickTypes, idx: number) => (
          <DropItem key={item.sickCd} title={item.sickNm} isSame={idx === searchIdx} />
        ))}
      </ul>
    </DropListWrapper>
  );
};
const DropListWrapper = styled.div<{ isActive: boolean }>`
  padding: ${({ isActive }) => (isActive ? '24px 16px' : 0)};
  background-color: white;
  border-radius: 10px;
  max-height: 50vh;
  position: relative;
  overflow-y: scroll;
`;

export default DropList;

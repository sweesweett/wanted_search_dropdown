import { useRecoilValue } from 'recoil';
import { searchIdxState, searchValueState } from '../store';
import { sickState } from '../store/sickState';
import DropItem from './DropItem';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const DropList = () => {
  const refList = useRef<HTMLDivElement>(null);
  const data = useRecoilValue(sickState);
  const searchValue = useRecoilValue(searchValueState);
  const searchIdx = useRecoilValue(searchIdxState);
  // const debounce = useDebounce(scroll, 1000);
  useEffect(() => {
    refList.current!.scrollTop = searchIdx <= 2 ? 0 : (searchIdx - 2) * 60;
  }, [searchIdx]);

  return (
    <DropListWrapper isActive={!!searchValue} ref={refList}>
      {!data.length && searchValue && <span>검색 결과 없음</span>}
      <ul>
        {data.map((item, idx) => (
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

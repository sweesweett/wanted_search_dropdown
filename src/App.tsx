import SearchInput from './components/SearchInput';
import styled from 'styled-components';

const App = () => {
  return (
    <AppWrapper>
      <Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Title>
      <SearchInput />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  margin: 50px auto 0;
  width: 100%;
  max-width: 900px;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  line-height: 1.6;
  letter-spacing: -2px;
  font-weight: 700;
`;
export default App;

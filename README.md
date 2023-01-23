## 원티드 프리온보딩 3주차 과제  
- 팀 과제이지만, 과제 종료 후 혼자 다시 구현
- 구현 목표  
  - 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  - API 호출 최적화
  - 키보드만으로 추천 검색어들로 이동 가능하도록 구현
  
  

### ❤ 프로젝트 실행 방법
```
npm install
npm run start
npm run server
```
### 🧡 배포 링크  
https://wanted-search-dropdown.vercel.app/
* 해당 배포 링크는 `npm run server` 로 json-server를 열어야 가능
* 다른 방법 -[이 레포 링크](https://github.com/walking-sunset/assignment-api_8th)에서 클론 후 프로젝트를 실행  
### 💛 기술 스택   
Typesript, React, Styled-components, Recoil

### 💚 구현 과정  

- API 호출 최적화
  - 캐싱(캐시 스토리지 사용)  
  useCache라는 custom hook으로 구현  
  url에 대한 데이터를 저장, 해당 url의 데이터가 cacheStorage에 저장되어 있다면 저장소에서 데이터를 가져오고 아닌 경우, api 호출  
    
  ```  
  const useCache = (keyword: string) => {
  const [cacheResult, setCacheResult] = useState<SickTypes[] | null>(null);
  useEffect(() => {
    if (keyword) {
      handleCache(keyword);
    }
  }, [keyword]);
  if (!keyword) return null;

  const handleCache = async (url: string) => {
    const encode = `sick?q=${encodeURI(url)}`;
    const cacheStorage = await caches.open('searchQuery');
    const cache = await cacheStorage.match(encode);
    if (cache) {
      setCacheResult(await cache.json());
      return;
    }
    await fetch(`http://localhost:4000/${encode}`)
      .then((data) => {
        if (data.ok) {
          const clone = data.clone();
          cacheStorage.put(encode, clone);
          setTimeout(() => {
            cacheStorage.delete(encode);
          }, 60 * 1000);
          return data.json();
        }
        throw data.status;
      })
      .then((data) => setCacheResult(data))
      .catch((err) => console.log(`err :${err}`));
  };
  return cacheResult;
  };  
  ```
  - 디바운스  
 useDebounce라는 custom hook으로 구현 
 값이 변경될 때마다 지정된 시간만큼 setTimeout을 사용해 실행을 지연시키고, 지정된 시간 안에 새로운 값이 입력된다면, 이전에 설정한  setTimeout 을  useEffect의 clean-up을 통해 삭제
  ```
  const useDebounce = (value: string, delay: number = 200) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [value, delay]);
  return debounceValue;
  };
  ```
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현  
  - ArrowDown&ArrowUp- 키를 누를 때 마다 인덱스 값이 변경됨
  - Enter - 키를 눌렀을 때 해당 li 선택
  - 이외의 키 -  이전의 배열이 남아있어서 버벅이는 것 처럼 보여지게 되어 초기화  
  
  ```  
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
  ```  
  - Advanced : ArrowDown 키를 눌렀을 때 DropList에 해당하는 height를 넘어설 때 스크롤이 되지 않아, 불편함을 초래
  useEffect ,useRef를 사용해 해당 index 값이 변경될 때 마다 해당 element의 scrollTop을 변경
  ```
    useEffect(() => {
    refList.current!.scrollTop = searchIdx <= 2 ? 0 : (searchIdx - 2) * 60;
  }, [searchIdx]);
  ```
  
  
  
  

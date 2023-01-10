type SearchData = {
  sickCd: string;
  sickNm: string;
};
type FetchData = {
  status: number;
  data: SearchData[];
};

export type { SearchData, FetchData };

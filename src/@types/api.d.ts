export interface DefaultResponse {
  data: {
    offset: int;
    limit: int;
    total: int;
    count: int;
    results: Array;
  };
}
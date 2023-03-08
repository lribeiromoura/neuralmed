export interface DefaultResponse {
  code: int;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: int;
    limit: int;
    total: int;
    count: int;
    results: Array;
  };
  etag: string;
}
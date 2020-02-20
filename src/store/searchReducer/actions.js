export default function newSearchReq(request) {
  return {
    type: "search/NEW",
    payload: request
  };
}

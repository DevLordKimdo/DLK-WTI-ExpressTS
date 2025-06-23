interface PaginationResult {
    currentPageIndex: number;
    postsPerPage:     number;
    totalPosts:       number;
    lastPageIndex:    number;
    endPageIndex:     number;
    startPageIndex:   number;
    hasPrevPage:      boolean;
    hasNextPage:      boolean;
}

export function PaginationTotal(currentPageIndex: number, postsPerPage: number, totalPosts: number): PaginationResult {

    let lastPageIndex, endPageIndex, startPageIndex, hasPrevPage, hasNextPage;

    lastPageIndex  = Math.ceil(totalPosts / postsPerPage);
    endPageIndex   = Math.ceil(currentPageIndex / 10) * 10;
    startPageIndex = endPageIndex - 9;
    hasPrevPage    = startPageIndex > 1;
    hasNextPage    = endPageIndex < lastPageIndex;

    // 끝 페이지 번호가 실제 마지막 페이지보다 클 수 있는 상황을 처리하기 위함
    if(lastPageIndex < endPageIndex) { endPageIndex = lastPageIndex; }

    let result: PaginationResult = {
          currentPageIndex : currentPageIndex
        , postsPerPage     : postsPerPage
        , totalPosts       : totalPosts
        , lastPageIndex    : lastPageIndex
        , endPageIndex     : endPageIndex
        , startPageIndex   : startPageIndex
        , hasPrevPage      : hasPrevPage
        , hasNextPage      : hasNextPage
    }

    return result;
}
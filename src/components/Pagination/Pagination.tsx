import "./Pagination.css";

interface PaginationProps {
  totalItems: number; // 전체 게시물 개수
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number; // 한 페이지당 보여줄 게시물 수
}

export default function Pagination({
  totalItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 게시물 개수를 한 페이지당 개수로 나누고 올림 (나머지가 있어도 새로운 페이지가 필요하므로)
  const maxPageNumbers = 5; // 최대 5개 숫자만 보이도록 설정 ex) << < 1 2 3 4 5 > >>

  // 현재 페이지가 속산 그룹 계산
  const currentGroup = Math.ceil(currentPage / maxPageNumbers); // 현재 페이지가 속한 그룹 (최대 5개까지만 표시)
  const startPage = (currentGroup - 1) * maxPageNumbers + 1; // 현재 그룹에서 가장 작은 페이지 번호
  const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages); // 현재 그룹에서 가장 큰 페이지 번호 (전체 페이지를 넘지 않도록 Math.min() 사용)
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="pagination-container">
      {/* 맨 처음으로 */}
      <button
        className="pagination-button"
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>

      {/* 이전 */}
      <button
        className="pagination-button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {/* 페이지 숫자 */}
      {pageNumbers.map((page) => {
        return (
          <button
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
            key={page}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      })}

      {/* 다음 */}
      <button
        className="pagination-button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>

      {/* 맨 끝으로 */}
      <button
        className="pagination-button"
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
}

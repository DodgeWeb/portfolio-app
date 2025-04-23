import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio.json";
import PortfolioItem from "../../components/PortfolioItem";
import Pagination from "../../components/Pagination/Pagination";
import { PortfolioItemType } from "../../types/PortfolioType";
import "./PortfolioList.css";

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // 한 페이지당 보여줄 아이템 수

  useEffect(() => {
    setPortfolioItems(portfolioData);
  }, []);

  // 현재 페이지에 보여줄 아이템 슬라이스
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolioItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <h2>포트폴리오 페이지입니다.</h2>

      <div className="portfolio-list">
        {currentItems.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <Pagination
        totalItems={portfolioData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

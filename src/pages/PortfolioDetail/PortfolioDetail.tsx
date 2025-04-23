import { Link, useParams } from "react-router-dom";
import portfolioData from "../../data/portfolio.json";
import { PortfolioItemType } from "../../types/PortfolioType";
import "./PortfolioDetail.css";

export default function PortfolioDetail() {
  const { id } = useParams();
  const itemIndex = Number(id);

  // index가 일치하는 아이템 찾기
  const item = portfolioData.find((i: PortfolioItemType) => i.id === itemIndex);

  if (!item) {
    return <div>존재하지 않는 포트폴리오입니다.</div>;
  }

  return (
    <div className="portfolio-detail">
      <h2>{item.title}</h2>
      <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} />
      <p>{item.description}</p>

      <div>
        <h3>기술 스택</h3>
        <ul>
          {item.techStack.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>추가 설명</h3>
        <p>{item.description2}</p>
      </div>

      <div className="detail-buttons">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          바로가기
        </a>
        <Link to="/portfolio" className="back-link">
          목록으로
        </Link>
      </div>
    </div>
  );
}

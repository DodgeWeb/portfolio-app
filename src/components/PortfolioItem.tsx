import { Link } from "react-router-dom";
import { PortfolioItemType } from "../types/PortfolioType";

export default function PortfolioItem({ item }: { item: PortfolioItemType }) {
  return (
    <Link to={`/portfolio/${item.id}`} className="portfolio-item">
      <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="tech-stack">
        <h4>사용한 기술 스택</h4>
        <ul>
          {item.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-details">
        <h4>추가설명1</h4>
        <p>{item.description2}</p>
      </div>
      <button onClick={() => window.open(item.link, "_blank")}>바로가기</button>
    </Link>
  );
}

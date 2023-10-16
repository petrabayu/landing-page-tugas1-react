import "./TopSection.css";
import TopSectionLeft from "./TopSectionLeft";
import TopSectionRight from "./TopSectionRight";
function TopSection() {
  return (
    <>
      <div className="top" id="home">
        <TopSectionLeft />
        <TopSectionRight />
      </div>
    </>
  );
}

export default TopSection;

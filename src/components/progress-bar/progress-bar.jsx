import "./progress-bar.css";

export const ProgressBar = ({ page }) => {
  return (
    <div className="progress">
      <div className="progress__step progress__step--active">1</div>
      <span className="progress__span progress__span--active"></span>
      <div
        className={`progress__step ${
          page === 2 || page === 3 ? "progress__step--active" : ""
        }`}
      >
        2
      </div>
      <span
        className={`progress__span ${
          page === 3 ? "progress__span--active" : ""
        }`}
      ></span>
      <div
        className={`progress__step ${
          page === 3 ? "progress__step--active" : ""
        }`}
      >
        3
      </div>
    </div>
  );
};

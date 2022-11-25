import "./range.css";

export const Range = ({ bgColor, name, correctAnswers, test_count }) => {
  const percent = ((correctAnswers / test_count) * 100).toFixed(1);
  console.log(percent);
  const icon_style = {
    left: `${percent}%`,
    backgroundColor: bgColor,
  };

  const progress_style = {
    width: `${percent}%`,
    backgroundColor: bgColor,
    boxShadow: "0px 0px 6px " + bgColor,
  };

  return (
    <label className="range">
      <span className="range__name">{name}</span>
      <div className="range__line">
        <div className="range__icon" style={icon_style}>
          {percent}%
        </div>
        <div className="range__progress" style={progress_style}></div>
      </div>
      <span className="range__percent">100%</span>
      <span>
        {correctAnswers}/{test_count}
      </span>
    </label>
  );
};

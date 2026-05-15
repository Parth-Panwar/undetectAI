interface Props {
  data: {
    type: string;
    result: {
      prediction: string;
    };
  };
}

const ResultCard = ({ data }: Props) => {
  const prediction = data.result.prediction;

  const isFake = prediction.toLowerCase() === "fake";

  return (
    <div className="result-card">
      <h2>Detection Result</h2>

      <div className="result-type">
        {data.type === "image" ? "🖼️ Image Analysis" : "🎥 Video Analysis"}
      </div>

      <div className={`prediction-box ${isFake ? "fake" : "real"}`}>
        <div className="prediction-label">
          {isFake ? "⚠️ Fake Content" : "✅ Real Content"}
        </div>

        <div className="prediction-text">
          Prediction: {prediction.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
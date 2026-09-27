import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function SolutionFinder() {
  const [choice, setChoice] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(false);

  const choices = ["🌐 Website", "📱 App", "⚙️ Automation", "📊 Business Tool"];
  const goals = ["Get Customers", "Save Time", "Manage Business", "Go Digital"];

  return (
    <section className="section" id="solutions">
      <div className="section-heading">
        <span>01 / FIND YOUR SOLUTION</span>
        <h2>What does your startup need?</h2>
        <p>Choose your need and discover a solution.</p>
      </div>

      <div className="choice-grid">
        {choices.map((item) => (
          <button
            key={item}
            className={choice === item ? "choice active" : "choice"}
            onClick={() => {
              setChoice(item);
              setResult(false);
            }}
          >
            {item}
            {choice === item && <CheckCircle2 size={18} />}
          </button>
        ))}
      </div>

      {choice && (
        <div className="goal-box">
          <h3>What is your goal?</h3>

          <div className="goal-grid">
            {goals.map((item) => (
              <button
                key={item}
                className={goal === item ? "goal active" : "goal"}
                onClick={() => {
                  setGoal(item);
                  setResult(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {goal && (
            <button className="primary-btn" onClick={() => setResult(true)}>
              Show My Solution <ArrowRight size={18} />
            </button>
          )}
        </div>
      )}

      {result && (
        <div className="result">
          <div className="result-icon">🚀</div>
          <div>
            <small>YOUR SOLUTION</small>
            <h3>{choice} + Smart Support</h3>
            <p>Designed to help you {goal.toLowerCase()}.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SolutionFinder;
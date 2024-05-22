import "./App.css";

const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;

const data = [
  { day: "Mon", revenue: 20000, profit: 15000 },
  { day: "Tue", revenue: 6000, profit: 5000 },
  { day: "Wed", revenue: 15000, profit: 10000 },
  { day: "Thur", revenue: 7000, profit: 5000 },
  { day: "Fri", revenue: 10000, profit: 8000 },
  { day: "Sat", revenue: 20000, profit: 16000 },
];

const revenue = data.map((data) => data.revenue);
const maxRevenue = Math.max(...revenue);

function App() {
  return (
    <div
      className="chart-container"
      style={{
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
      }}
    >
      <Bar maxRevenue={maxRevenue} />
    </div>
  );
}

function Bar({ maxRevenue }) {
  return (
    <div className="bar">
      {data.map((data, i) => (
        <div key={data.profit + i}>
          <div
            key={data.profit}
            className="bar-revenue"
            style={{
              height: `${(data.revenue * 100) / maxRevenue}%`,
            }}
          >
            <div
              className="bar-profit"
              style={{ height: `${(data.profit / data.revenue) * 100}%` }}
            ></div>
            <div className="bar-text">
              <p className="bar-day">{data.day}</p>
              <p>{`${Math.round((data.profit / data.revenue) * 100)}%`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

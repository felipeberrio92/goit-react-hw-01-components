import './statistics.css';
import PropTypes from 'prop-types';
const COLORS = [
  '#a43cf1ff',
  '#50c3f8ff',
  '#e74a69ff',
  '#74787bff',
  '#20b8c5ff',
];

export default function Statistics(props) {
  return (
    <div>
      <section className="statistics">
        {props.title ? (
          <h2 className="title">{props.title}</h2>
        ) : (
          <h2>No Title</h2>
        )}
        <ul className="statistics__list">
          {props.stats ? (
            props.stats.map((stat, index) => {
              return (
                <li
                  className="item"
                  key={stat.id}
                  style={{ background: `${COLORS[index]}` }}
                >
                  <span className="statistics__label">{stat.label}</span>
                  <span className="percentage">{stat.percentage}%</span>
                </li>
              );
            })
          ) : (
            <li className="item">no stats</li>
          )}
        </ul>
      </section>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
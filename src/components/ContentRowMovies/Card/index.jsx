import PropTypes from "prop-types";

function ContentRowMoviesCard({ title, quantity, color, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {quantity}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentRowMoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
};

ContentRowMoviesCard.defaultProps = {
  title: "Titulo",
  color: "primary",
  quantity: "51",
  icon: "star",
};

export default ContentRowMoviesCard;

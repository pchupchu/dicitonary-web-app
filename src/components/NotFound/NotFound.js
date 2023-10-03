import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__smile">😕</span>
      <h3 className="not-found__title">No Definitions Found</h3>
      <p className="not-found__text">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFound;

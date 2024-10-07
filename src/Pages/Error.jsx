import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const goBack = useNavigate(-1);

  return (
    <div>
      <h2>Error</h2>
      <p>Oh no! There&apos;s an error!</p>
      <p>
        Click <Link to={goBack}>here</Link> to go back
      </p>
    </div>
  );
};

export default Error;

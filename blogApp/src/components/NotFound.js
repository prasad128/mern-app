import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center p-12 text-xl text-gray-900">
      <div className="mt-12">
        <div className="">Sorry</div>
        <div className="mt-2">That page cannot be found</div>

        <div className="text-lg mt-7">
          Back to the{" "}
          <Link to="/blogs">
            <button className="underline">homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

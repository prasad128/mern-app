// import logo from "./logo.svg";
// import "./App.css";
import Blogs from "./components/blogs";
import BlogDetails from "./components/blogDetails";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateBlog from "./components/createBlog";
import Signup from "./components/signup";
import Login from "./components/login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen px-12 py-7 font-custom">
        <div className="flex items-center pb-2 text-gray-900 border-b h-18">
          <div className="text-4.5xl font-semibold uppercase mr-52">
            My Blog
          </div>
          <div className="flex items-end justify-between flex-grow h-full text-gray-500">
            <div className="text-base ">Welcome, user123@yahoo.com</div>
            <div className="flex items-center space-x-5 uppercase">
              <Link to="/blogs">
                <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                  Blogs
                </div>
              </Link>
              <Link to="/about">
                <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                  About
                </div>
              </Link>
              <Link to="/newBlog">
                <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                  New Blog
                </div>
              </Link>

              {/* <div className="">Sign Up</div> */}
              <Link to="/signup">
                <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                  Sign Up
                </div>
              </Link>
              <Link to="/login">
                <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                  Login
                </div>
              </Link>
              {/* <div className="cursor-pointer hover:text-gray-900 active:text-gray-500">
                Logout
              </div> */}
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/blogDetails/:id">
            <BlogDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/newBlog">
            <CreateBlog />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* <Blogs /> */}
        <div className="flex justify-center text-gray-500">
          <div className="text-lg">
            Copyright <span>&copy;</span> My Blog 2020
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

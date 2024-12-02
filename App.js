import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import SavedCourses from './components/SavedCourses';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { coursesData } from './coursesData';

function App() {
  const [savedCourses, setSavedCourses] = React.useState([]);
  const [courses, setCourses] = React.useState(coursesData);

  const handleSaveCourse = (course) => {
    if (!savedCourses.some((savedCourse) => savedCourse.id === course.id)) {
      setSavedCourses((prevSavedCourses) => [...prevSavedCourses, course]);
    }
  };

  const handleUnsaveCourse = (courseId) => {
    setSavedCourses((prevSavedCourses) =>
      prevSavedCourses.filter((course) => course.id !== courseId)
    );
  };

  const handleEnrollCourse = (courseId) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseId ? { ...course, status: 'Enrolled' } : course
    );
    setCourses(updatedCourses);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            Learning Platform
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="btn btn-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="btn btn-link text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="btn btn-link text-white">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/saved-courses" className="btn btn-link text-white">
                  Saved Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="btn btn-link text-white">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/testimonials" className="btn btn-link text-white">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="btn btn-link text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="btn btn-link text-white">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="btn btn-link text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home courses={courses} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/courses"
          element={
            <Courses
              courses={courses}
              savedCourses={savedCourses}
              handleSaveCourse={handleSaveCourse}
              handleUnsaveCourse={handleUnsaveCourse}
              handleEnrollCourse={handleEnrollCourse}
            />
          }
        />
        <Route
          path="/saved-courses"
          element={
            <SavedCourses
              savedCourses={savedCourses}
              handleUnsaveCourse={handleUnsaveCourse}
            />
          }
        />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

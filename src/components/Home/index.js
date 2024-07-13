import {Link} from 'react-router-dom'
import Header from '../Header/index'

import './index.css'

const Home = () => (
  <div className="homepage">
    <Header />
    <div className="HomeContainer">
      <div className="hompage">
        <h1 className="headingHome">Find the Job that fits Your Life</h1>
        <p className="descriptionHome">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="finJobBtn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home

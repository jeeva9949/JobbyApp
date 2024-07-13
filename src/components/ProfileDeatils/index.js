import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProfileDeatils = props => {
  const {profileDetails, profileapiStatus, getProfileApi} = props

  const renderProfile = () => {
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-details-container">
        <div className="imgProfile">
          <img src={profileImageUrl} alt="profile" className="profile-image" />
          <h1 className="profile-name">{name}</h1>
          <p className="profile-bio">{shortBio}</p>
        </div>
      </div>
    )
  }

  const renderFailureView = () => (
    <div className="profile-failure-container">
      <button className="retry-button" type="button" onClick={getProfileApi}>
        Retry
      </button>
    </div>
  )

  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  switch (profileapiStatus) {
    case apiStatusConstants.success:
      return renderProfile()
    case apiStatusConstants.failure:
      return renderFailureView()
    case apiStatusConstants.inProgress:
      return renderLoader()
    default:
      return null
  }
}
export default ProfileDeatils

import profilePic from './assets/download (1).png'

function Card(){

  return(
  <div className="card">
    <img src={profilePic} alt="profile" />
    <h2>LessonVillage</h2>
    <p>Kompania me e madhe per stuentet</p>
  </div>
  )
}
export default Card
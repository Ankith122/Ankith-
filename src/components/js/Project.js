import "../css/Project.css";
import notes from '../images/notes.jpg'
function Project() {
  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <h3>My works🗒️</h3>
        <div className="proj">
          <div className="pro1">
            <img src={notes} alt="project1"></img>
            <div className="content">
              <h3>Notes pro</h3>
              <a href="https://github.com/Venkateeshh/Notes-Application">Visit site &#10064;</a>
            </div>
          </div>

        </div>
      </div >
    </>
  );
}

export default Project
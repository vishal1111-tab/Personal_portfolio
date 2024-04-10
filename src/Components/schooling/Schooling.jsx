import "./schooling.scss";

function Schooling() {
  return (
    <div>
      <div className="schooling" id="schooling">
        <section className="education" id="education">
          <h1 className="heading">
            {" "}
            My <span>Education</span>{" "}
          </h1>

          <div className="box-container">
            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2016</span>
              <h3>10th</h3>
              <p>
                I Completed My 10th From M.M.Y SECONDARY SCHOOL With 8.6 CGPA /
                81.70%
              </p>
            </div>

            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2019</span>
              <h3> HSC</h3>
              <p>
                I Completed My HSC From +2 UCHH VIDYALAY With 72% Percentage{" "}
              </p>
            </div>

            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2020-2024</span>
              <h3> I Am a B-tech Student</h3>
              <p>
                {" "}
                Of SKN Sinhgad Institute Of Technology & Science, Lonavala{" "}
              </p>
            </div>

            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2023</span>
              <h3> Still I Am in 4th Year Of Engineering </h3>
              <p>I Completed My 3rd Year With 08.70 SGPA </p>
            </div>

            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2023</span>
              <h3>Recent experience</h3>
              <p> worked as a frontend web developer in CodeClause</p>
            </div>

            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <span>2023</span>
              <h3>Open To Work</h3>
              <p>As A Web Developer, With 1/2 year of Industrial Experience</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Schooling;

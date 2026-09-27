"use client";

export default function YourForm() {
  return (
    <div id="wd-your-form-container">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>About me</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input id="wd-your-first-name" defaultValue="Matthieu" />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>

        <input id="wd-your-last-name" defaultValue="Schiermeier" />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          id="wd-your-student-id"
          type="password"
          placeholder="NUID"
          defaultValue="000000000"
        />
        <br />
        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={5}
          defaultValue="I want to be able to build and deploy full stack apps on my own, so my data science projects can live on the web instead of in notebooks."
        />

        <h5>Enrollment</h5>
        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />

        <input type="radio" name="your-standing" id="wd-your-junior" defaultChecked />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-graduate" />
        <label htmlFor="wd-your-graduate">Graduate</label>
        <br />
        <label>Housing:</label>
        <br />
        <input type="radio" name="your-housing" id="wd-your-on-campus" defaultChecked />
        <label htmlFor="wd-your-on-campus">On campus</label>
        <br />
        <input type="radio" name="your-housing" id="wd-your-commuter" />
        <label htmlFor="wd-your-commuter">Commuter</label>

        <h5>Interests</h5>
        <input type="checkbox" id="wd-your-python" defaultChecked />
        <label htmlFor="wd-your-python">Python and data analysis</label>
        <br />
        <input type="checkbox" id="wd-your-webdev" defaultChecked />
        <label htmlFor="wd-your-webdev">Full stack web development</label>
        <br />
        <input type="checkbox" id="wd-your-ml" />
        <label htmlFor="wd-your-ml">Machine learning</label>
        <br />
        <input type="checkbox" id="wd-your-business" defaultChecked />
        <label htmlFor="wd-your-business">Business and analytics</label>

        <h5>Academics</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <select id="wd-your-major" defaultValue="DS-MATH">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="DS-MATH">Data Science and Mathematics</option>
          <option value="CY">Cybersecurity</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
        <br />
        <select
          multiple
          id="wd-your-topics"
          defaultValue={["REACT", "MONGODB"]}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS and Tailwind</option>
          <option value="REACT">React and Next.js</option>
          <option value="NODE">Node.js</option>
          <option value="MONGODB">MongoDB</option>
        </select>

        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        {/* schiermeier.m@northeastern.edu*/}
        <input
          id="wd-your-email"
          type="email"
          placeholder="schiermeier.m@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        {/*2028*/}
        <input
          id="wd-your-grad-year"
          type="number"
          min={2026}
          max={2032}
          defaultValue={2028}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        {/* 09/04/2028 */}
        <input id="wd-your-start-date" type="date" defaultValue="2024-09-04" />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0 to 10):{" "}
        </label>
        <input
          id="wd-your-excitement"
          type="range"
          min={0}
          max={10}
          defaultValue={8}
        />
        <br />
        <br />
        <button id="wd-your-save" type="submit">
          Save
        </button>{" "}
        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

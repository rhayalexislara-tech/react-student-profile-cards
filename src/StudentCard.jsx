import "./StudentCard.css";

// Reusable component: receives one student's data through props.
function StudentCard({ name, course, section }) {
  return (
    <article className="student-card">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <h2 className="student-name">{name}</h2>
      <p className="student-info">
        <span className="label">Course:</span> {course}
      </p>
      <p className="student-info">
        <span className="label">Section:</span> {section}
      </p>
    </article>
  );
}

export default StudentCard;

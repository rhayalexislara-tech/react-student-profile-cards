import StudentCard from "./StudentCard";
import "./App.css";

// Student data (edit these entries to change what the cards show)
const students = [
  { id: 1, name: "Rhay Alexis D. Lara", course: "BS Computer Science", section: "BSCS-3A" },
  { id: 2, name: "Juan Dela Cruz", course: "BS Computer Science", section: "BSCS-3A" },
  { id: 3, name: "Maria Santos", course: "BS Information Technology", section: "BSIT-3B" },
];

function App() {
  return (
    <main className="app">
      <h1>Student Profile Cards</h1>
      <section className="card-grid">
        {/* The same StudentCard component is reused for every student */}
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            section={student.section}
          />
        ))}
      </section>
    </main>
  );
}

export default App;

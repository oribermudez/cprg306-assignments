const StudentInfo = () => {
  return (
    <section>
      <h1>Ori Bermudez</h1>
      <div className="flex">
        <h2>Course section:</h2>
        <span>CPRG 306 A</span>
      </div>
      <div className="flex">
        <h2>GitHub repository:</h2>
        <a
            href="https://github.com/oribermudez"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ori Bermudez
        </a>
      </div>
    </section>
  );
}

export default StudentInfo;
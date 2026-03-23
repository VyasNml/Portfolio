import { IoSchoolOutline } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    title: 'High school certificate',
    date: ' 2019 - Jun 15, 2022',
    gpa: '98.5',
    institution: 'Bharatiya Vidya Bhavan',
  },
  {
    title: 'Bachelor in Computer Science and Technology',
    date: 'Aug, 2023 - Jun, 2027',
    gpa: '8.6',
    institution: 'National University of Mongolia',
  },
];

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">
        <IoSchoolOutline className="icon" />
        Education
      </h2>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            <h3>{edu.title}</h3>
            <p className="date">{edu.date}</p>
            <div className="gpa">
              <FaGraduationCap className="icon" />
              {edu.gpa}
            </div>
            <p className="institution">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

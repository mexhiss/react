import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="student">
      <p>Emri: {props.name}</p>
      <p>Mosha: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

export default Student;

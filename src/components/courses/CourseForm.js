import React, {PropTypes} from 'react';
import TextInput from 'terra-form/lib/Input';

import SelectInput from 'terra-form/lib/Select';

const CourseForm = ({course, allAuthors , onSave, onChange, loading , errors}) =>{
  return(
  <div>
        <h1> Manage Course </h1>

        <input type="text"
          name="title"
          value={course.title}
          onChange ={onChange}

        />

      //   <SelectInput
      //    name = "AuthorID"
      //    value = {course.authorId}
      //    options ={allAuthors}
      //    defaultValue="Select Author"
      //    onChange ={onChange}
      // />
      //
      // <TextInput
      //   name="Category"
      //   value={course.category}
      //   onChange ={onChange}
      //   required
      // />
      //
      // <TextInput
      //   name="Length"
      //   value={course.length}
      //   onChange ={onChange}
      //   required
      // />

      // <input type="Submit"
      //   disabled={loading}
      //   value={loading ? 'Saving....' : 'Save' }
      //   className = "btn btn-primary"
      //   onClick = {onSave}
      // />

    </div>
  );
};

CourseForm.propTypes ={
  course: PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object

};



export default CourseForm;

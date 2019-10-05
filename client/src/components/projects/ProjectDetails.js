import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Hello World - ID {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto esse
            possimus eius magni debitis temporibus ipsam odio sunt, qui
            asperiores rerum facilis impedit, doloremque, officiis rem natus
            totam itaque dolorum.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>Posted by JH</div>
        <div>Oct 3, 2019</div>
      </div>
    </div>
  );
};

export default ProjectDetails;

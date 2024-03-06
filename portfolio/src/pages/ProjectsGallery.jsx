import Project from '../components/Project';
import projects from '../data/projects.json';
// import './Styles.css'

export default function ProjectsGallery() {
    return (
      <div className="container text-center justify-content-center ">
            <h5  className="p-5 mb-3">This is the list of my projects</h5>
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-12 col-sm-12 ">
                {projects.map((project) => (
                  <Project 
                    key={project.id} 
                    title={project.title} 
                    tools={project.tools} 
                    image={project.image} 
                    description={project.description} 
                    deployed={project.deployed} 
                    github={project.github}
                  />    
                ))}        
            </div>
        </div>
      </div>
    );
}
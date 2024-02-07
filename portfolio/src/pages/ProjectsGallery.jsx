import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    return <div>
         <div className="row justify-content-center"></div>
            <h5  className="p-5 mb-3">This is the list of my projects</h5>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 p-3 m-3">
             { projects.map((project) => {
                return <Project key={project.id} title={project.title} tools={project.tools} image={project.image} description={project.description} deployed={project.deployed} github={project.github}/>            
             })}
            </div>
        </div>
}

export default ProjectsGallery;

  {/* <Project title="Project 1" description="This is my first project" />
            <Project title="Project 2" description="This is my second project" />
            <Project title="Project 3" description="This is my third project" />
            <Project title="Project 4" description="This is my fourth project" />
            <Project title="Project 5" description="This is my fifth project" />
            <Project title="Project 6" description="This is my sixth project" /> */}
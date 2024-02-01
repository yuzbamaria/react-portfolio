import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    return <div>
        This is the list of my projects
        <div>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />            
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
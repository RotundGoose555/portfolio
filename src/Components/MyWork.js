import '../CSS/Body.css'
import {useState} from 'react';
import {Projects} from './Projects'
import ProjectInfo from './ProjectInfo';

function MyWork() {
    const [project, setProject] = useState(Projects[0])
    const [url, setUrl] = useState('')

    const handleClick = event =>{
        document.getElementById(event.currentTarget.id).style.textDecoration='underline';
        setProject(Projects[event.currentTarget.id])
    }

    function handleLeave(){
        setUrl('')
        setProject(Projects[0])
    }

    function setImage(number){
        setUrl(project.img[number]);
    }

    var imageStyle={  
        backgroundImage: 'url('+url+')',
                backgroundSize: 'contain',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'top',
    }
      


    return(
        <div className='my-work'>
            <div className='projects'>
            <h2 className='projects-text' id={1} onClick={handleClick}>GREENWOOD<br/> METALS</h2>
            <h2 className='projects-text' id={2}  onClick={handleClick} >PERSONA BUILDING</h2>
            <h2 className='projects-text' id={3}  onClick={handleClick} >CS@BROWN PATHWAYS<br/>REDESIGN</h2>
            <h2 className='projects-text' id={4}  onClick={handleClick} >STUPID<br/>F**KING BIRD</h2>
            </div>
            <div className='info' style={imageStyle}> 
            <ProjectInfo project={project} setImage={setImage} handleLeave={handleLeave}/>
            </div>
        </div>        
    )
}

export default MyWork;
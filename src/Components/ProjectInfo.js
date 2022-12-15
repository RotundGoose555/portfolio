import {useState, useEffect} from 'react';
import '../CSS/Body.css';
function ProjectInfo(props) {

    function ButtonBar(){

        if(props.project.description[props.counter].title === "reflections"){
            return(
            <div className='info-buttons'>
            {console.log('hello')}
            <button className='info-button' disabled={props.counter===0} onClick={()=>props.setCounter(props.counter-1)}>◀︎</button>
            <a  className='info-project-button' href={props.project.link} target='_blank' rel='noopener noreferrer'>SEE THE PROJECT</a>
            </div>
            )

        }else{
            return(
                <div className='info-buttons'>
                    <button className='info-button' disabled={props.counter===0} onClick={()=>props.setCounter(props.counter-1)}>◀︎</button>
                    <button  className='info-button'disabled={props.counter===6} onClick={()=>props.setCounter(props.counter+1)}>▶︎</button>
                </div>
            )
        }
    }

    function TopBar(){
        return(
            <div className='info-header'>
            <div className='info-title'>{props.project.description[props.counter].title}</div>
            <button className='info-button' onClick={handleLeave}>X</button>
            </div>
        )
    }   



    function handleLeave(){
        props.handleLeave();
        props.setCounter(0);
    }




    function Body(){
        useEffect(() => {
            props.setImage(props.counter);
        });
        return(
            <div>
            <div>{TopBar()}</div>
            <br/>
            <p className='info-text'>{props.project.description[props.counter].text}</p>  
            </div>
        )
    }

    if(props.project.id===0){
        return(
            <div></div>
        )
    }else{
        return(
            <div className='info-box'>
            <Body/>
            <ButtonBar/>
            </div>
        )
    }

}


export default ProjectInfo;
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFlor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query =`*[_type == "experiences"]`;
    const skillsQuery =`*[_type == "skills"]`;
    
    client.fetch(query)
      .then((data) => {

        console.log(data)
        setExperience(data);
      });
    
      client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <>
      <h2 className='head-text'>Habilidades <span>& Experiencias</span></h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill)=> (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFlor(skill.icon)} alt={skill.name}></img>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
            <motion.div className='app__skills-exp-item' >
              <div className='app__skills-exp-year'>
                <p className='titulo'>Quien Soy?</p>
              </div>
              <div >
                <div className='caja'>
                  <h2>Estudiante de Ingenieria IA y Desarrollador FullStack</h2>
                  <p>Estudio Ingenieria en Inteligencia Artificial en UdeSa, Argentina. Actualmente estoy profundizando conocimientos en Machine Learning, para aplicarlos a distintos proyectos. </p>
                  <p>Soy desarrollador Frontend con experiencia en proyectos vinculados con E-Commerce, llevados a cabo con React JS. </p>
                  <p>Constantemente busco mejorar mis habilidades y seguir creciendo profesionalmente para poder hacer aportes valiosos tanto a compañeros de trabajo como a otros desarrolladores. </p>
                </div>
              </div>
              
            </motion.div>
        </motion.div>
        {/* <motion.div className='app__skills-exp'>
          {experience?.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect='solid' arrowColor='#fff' className='skills-tooltip'>
                      {work.desc}
                    </ReactTooltip>
                  </>

                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
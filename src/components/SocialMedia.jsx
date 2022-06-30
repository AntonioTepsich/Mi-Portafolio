import React from 'react';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/antonio-tepsich-765411228/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin ></BsLinkedin>
                </a>
            </div>
            <div>
                <a href="https://github.com/AntonioTepsich" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub></AiFillGithub>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/antotepsich/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram></BsInstagram>
                </a>
            </div>
        </div>
    )
};


export default SocialMedia


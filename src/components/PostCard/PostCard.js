import React from 'react';
import './PostCard.css';
import {apiURL} from "../../constants";

import imageNotAvailable from "../../123.png"

const PostCard = ({message, name, image, data}) => {
    let cardImage = imageNotAvailable;
    if(image) {
        cardImage = apiURL + "/uploads/" + image;
    }

    return(
        <>
            <div className="Post">
                {image !== '' ?
                    <img
                        src={cardImage}
                        alt='card' className='PostPhoto'/>
                    : <p className="img-db">Enter url of pictures ...</p>
                }
                <div>
                    <div className="PostName"><p className="rainbow-animated">{name}</p></div>
                    <div className="PostMessage">{message}</div>
                    <div className="PostData">{data}</div>
                </div>
            </div>
        </>
    )};

export default PostCard;
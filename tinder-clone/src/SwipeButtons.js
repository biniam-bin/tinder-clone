import React from 'react';
import "./SwipeButtons.css";

//import icons
import ReplyIcon from '@material-ui/icons/Reply';
import StarRateIcon from '@material-ui/icons/StarRate';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplyIcon fontSize="larg"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="larg"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="larg"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="larg"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="larg"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons

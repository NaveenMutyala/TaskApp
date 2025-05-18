import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}>
                    <div className='progress'>{progress}%</div> 
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
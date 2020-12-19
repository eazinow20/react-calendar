import React, { useState } from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import Upcomming from './Upcoming';
import ShowDetails from './ShowDetails';

const TaskBoard = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Taskboard</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <Upcomming handleShow={handleShow} />
                <InProgress handleShow={handleShow} />
                <Completed handleShow={handleShow} />
            </div>
            <div className="row">
                <ShowDetails handleClose={handleClose} show={show} />
            </div>
        </>
    );
};

export default TaskBoard;

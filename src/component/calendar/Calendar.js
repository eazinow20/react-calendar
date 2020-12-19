import React, { useState } from 'react';
import Fullcalendar from './Fullcalendar';
import Categories from './Categories';
import AddEvent from './AddEvent';

const Calendar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card-box">
                    <div className="row">
                        <div className="col-lg-3">
                            <a
                                href="#create"
                                data-toggle="modal"
                                data-target="#add-category"
                                class="btn btn-lg btn-primary btn-block waves-effect mt-2 waves-light"
                                onClick={handleShow}
                            >
                                <i className="fa fa-plus"></i> Create New
                            </a>

                            <Categories />
                        </div>

                        <div class="col-lg-9">
                            <Fullcalendar />
                        </div>
                    </div>
                    <div className="row">
                        <AddEvent show={show} handleClose={handleClose} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;

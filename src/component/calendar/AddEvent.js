import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
// import { Editor, EditorState } from 'draft-js';
import logo from './avatar.jpg';

import { categories } from '../../helper';

import 'draft-js/dist/Draft.css';
import 'react-datepicker/dist/react-datepicker.css';

const html = (
    <div className="assign-container">
        <img src={logo} alt="asdas" className="assign-image" />
        <p className="assign-name">Name</p>
    </div>
);

const options = [
    { value: '', label: html },
    { value: 'strawberry', label: html },
    { value: 'vanilla', label: html },
];

const AddEvent = ({ show, handleClose }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // const [description, setDescription] = useState(() =>
    //     EditorState.createEmpty()
    // );

    const handleStartDateChange = date => {
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date);
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                contentClassName="event-show-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card-box">
                        <form action="#" class="parsley-examples" noValidate="">
                            <div className="form-group">
                                <label htmlFor="userName">
                                    Event Name
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nick"
                                    parsley-trigger="change"
                                    required
                                    placeholder="Enter Event Name"
                                    class="form-control"
                                    id="userName"
                                />
                            </div>

                            <div
                                class="form-group"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div>
                                    <label>From</label>
                                    <div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleStartDateChange}
                                            timeInputLabel="Time:"
                                            dateFormat="MM/dd/yyyy h:mm aa"
                                            showTimeInput
                                            shouldCloseOnSelect={false}
                                            showMonthDropdown
                                            showYearDropdown
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>To</label>
                                    <div>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={handleEndDateChange}
                                            timeInputLabel="Time:"
                                            dateFormat="MM/dd/yyyy h:mm aa"
                                            showTimeInput
                                            shouldCloseOnSelect={false}
                                            showMonthDropdown
                                            showYearDropdown
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label class="mb-1 text-muted">
                                    Description
                                </label>
                                <textarea
                                    id="textarea"
                                    className="form-control"
                                    maxLength="225"
                                    rows="3"
                                    placeholder="This textarea has a limit of 225 chars."
                                    style={{
                                        marginTop: '0px',
                                        marginBottom: '0px',
                                        height: '85px',
                                    }}
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <label htmlFor="vendor">
                                    Assign Someone
                                    <span class="text-danger">*</span>
                                </label>
                                <Select options={options} />
                            </div>

                            <div class="form-group">
                                <label>Select anyone category</label>
                                <div class="button-list category-form-list">
                                    {categories.map(({ name, text }, index) => {
                                        return (
                                            <button
                                                key={index}
                                                type="button"
                                                class={`btn btn-rounded waves-effect width-md waves-light ${name}`}
                                            >
                                                {text}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* <div class="form-group text-right mb-0">
                                <button
                                    class="btn btn-primary waves-effect waves-light mr-1"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    type="reset"
                                    class="btn btn-secondary waves-effect waves-light"
                                >
                                    Cancel
                                </button>
                            </div> */}
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddEvent;

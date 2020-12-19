import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShowDetails = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>Details</Modal.Header>
            <Modal.Body>
                <div class="p-2 task-detail">
                    <div class="media mb-3">
                        <img
                            class="d-flex mr-3 rounded-circle"
                            src="assets/images/users/avatar-2.jpg"
                            alt="Generic placeholder"
                            height="48"
                        />
                        <div class="media-body">
                            <h5 class="media-heading mb-1 mt-0">
                                Michael Zenaty
                            </h5>
                            <span
                                class="badge badge-light"
                                style={{
                                    borderWidth: 'thin',
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                }}
                            >
                                Assigned
                            </span>
                        </div>
                    </div>

                    <h4>Code HTML email template for welcome email</h4>
                    <span class="badge badge-danger mb-4">Electrical</span>

                    <textarea
                        id="textarea"
                        className="form-control"
                        rows="3"
                        placeholder="This textarea has a limit of 225 chars."
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptates, illo, iste itaque voluptas corrupti
                        ratione reprehenderit magni similique? Tempore, quos
                        delectus asperiores libero voluptas quod perferendis!
                        Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                    </textarea>

                    <ul class="list-inline task-dates mb-0 mt-4">
                        <li>
                            <h5 class="mb-1">Start Date</h5>
                            <p>
                                {' '}
                                22 March 2017{' '}
                                <small class="text-muted">1:00 PM</small>
                            </p>
                        </li>

                        <li>
                            <h5 class="mb-1">Due Date</h5>
                            <p>
                                {' '}
                                17 April 2017{' '}
                                <small class="text-muted">12:00 PM</small>
                            </p>
                        </li>
                    </ul>
                    <div class="clearfix"></div>

                    <div class="assign-team mt-4">
                        <h5 class="mb-1">Team Members</h5>
                        <div>
                            <a href="#">
                                {' '}
                                <img
                                    class="rounded-circle avatar-sm"
                                    alt="64x64"
                                    src="assets/images/users/avatar-2.jpg"
                                />{' '}
                            </a>
                            <a href="#">
                                {' '}
                                <img
                                    class="rounded-circle avatar-sm"
                                    alt="64x64"
                                    src="assets/images/users/avatar-3.jpg"
                                />{' '}
                            </a>
                            <a href="#">
                                {' '}
                                <img
                                    class="rounded-circle avatar-sm"
                                    alt="64x64"
                                    src="assets/images/users/avatar-5.jpg"
                                />{' '}
                            </a>
                            <a href="#">
                                {' '}
                                <img
                                    class="rounded-circle avatar-sm"
                                    alt="64x64"
                                    src="assets/images/users/avatar-8.jpg"
                                />{' '}
                            </a>
                        </div>
                    </div>

                    <div class="attached-files mt-4">
                        <h5 class="">Attached Files </h5>
                        <div class="files-list">
                            <div class="file-box">
                                <a href="#">
                                    <img
                                        src="assets/images/attached-files/img-1.jpg"
                                        class="img-fluid img-thumbnail"
                                        alt="attached-img"
                                    />
                                </a>
                                <p class="font-13 mb-1 text-muted">
                                    <small>File one</small>
                                </p>
                            </div>
                            <div class="file-box">
                                <a href="#">
                                    <img
                                        src="assets/images/attached-files/img-2.jpg"
                                        class="img-fluid img-thumbnail"
                                        alt="attached-img"
                                    />
                                </a>
                                <p class="font-13 mb-1 text-muted">
                                    <small>Attached-2</small>
                                </p>
                            </div>
                            <div class="file-box">
                                <a href="#">
                                    <img
                                        src="assets/images/attached-files/img-3.png"
                                        class="img-fluid img-thumbnail"
                                        alt="attached-img"
                                    />
                                </a>
                                <p class="font-13 mb-1 text-muted">
                                    <small>Dribbble shot</small>
                                </p>
                            </div>
                        </div>
                    </div>
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
    );
};

export default ShowDetails;

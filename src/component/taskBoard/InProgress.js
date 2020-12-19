import React from 'react';

const tasks = [
    {
        date: '02 Nov, 2020',
        category: 'Electrical',
        task: 'Tile Flooring',
        photo: 'assets/images/users/avatar-5.jpg',
        name: 'Petey Cruiser',
    },
    {
        date: '02 Nov, 2020',
        category: 'Electrical',
        task: 'Tile Flooring',
        photo: 'assets/images/users/avatar-5.jpg',
        name: 'Petey Cruiser',
    },
    {
        date: '02 Nov, 2020',
        category: 'Electrical',
        task: 'Tile Flooring',
        photo: 'assets/images/users/avatar-5.jpg',
        name: 'Petey Cruiser',
    },
];

const InProgress = ({ handleShow }) => {
    return (
        <div class="col-lg-4">
            <div class="card-box">
                <h4 class="text-dark header-title">InProgress</h4>
                <p class="sub-header">Your awesome text goes here.</p>

                <ul class="sortable-list taskList list-unstyled" id="upcoming">
                    {tasks.map(
                        ({ date, category, task, name, photo }, index) => {
                            return (
                                <li
                                    key={index}
                                    class="bg-soft-warning"
                                    id="task1"
                                >
                                    <div class="checkbox checkbox-primary checkbox-single float-right">
                                        <input
                                            type="checkbox"
                                            aria-label="Single checkbox Two"
                                        />
                                        <label></label>
                                    </div>
                                    <b>{task}</b>
                                    <br />
                                    <span class="badge badge-danger mb-2">
                                        {category}
                                    </span>
                                    <br />
                                    <p>
                                        Due Task : <b>{date}</b>
                                    </p>
                                    <div class="mt-1">
                                        <p class="float-right mb-0 mt-1">
                                            <button
                                                className="btn btn-success btn-xs waves-effect waves-light mr-1"
                                                type="button"
                                            >
                                                <i class="mdi mdi-chat-outline"></i>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-success btn-xs waves-effect waves-light"
                                                data-toggle="modal"
                                                data-target="#task-detail-modal"
                                                onClick={handleShow}
                                            >
                                                Details
                                            </button>
                                        </p>
                                        <p class="mb-0">
                                            <a href="#group" class="text-muted">
                                                <img
                                                    src={photo}
                                                    alt="task-user"
                                                    class="avatar-sm rounded-circle mr-2"
                                                />
                                                <span class="font-weight-medium font-secondary">
                                                    {name}
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </div>
    );
};

export default InProgress;

import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import logo from './avatar.jpg';

import './style.css';

const Fullcalendar = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            events={[
                {
                    title: 'Task',
                    start: '2020-12-20T08:00:00',
                    end: '2020-12-21T12:00:00',
                },
            ]}
            eventContent={({ event }) => {
                return (
                    <div className="custom-display">
                        <div>
                            <div>
                                <p className="task-name">{event._def.title}</p>
                                <p className="task-duration">{`${formatDate(
                                    event._instance.range.start,
                                    {
                                        month: 'short',
                                        day: 'numeric',
                                    }
                                )}-${formatDate(event._instance.range.end, {
                                    month: 'short',
                                    day: 'numeric',
                                })}`}</p>
                            </div>
                            <img src={logo} alt="avatar" />
                        </div>
                    </div>
                );
            }}
            eventBackgroundColor="white"
            eventTextColor="black"
            eventBorderColor="white"
            initialView="dayGridMonth"
        />
    );
};

export default Fullcalendar;

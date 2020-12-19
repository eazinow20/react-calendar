import React from 'react';
import Calendar from './component/calendar/Calendar';
import TaskBoard from './component/taskBoard/Taskboard';

function App() {
    return (
        <div
            className="content-page"
            style={{ marginLeft: '0', marginTop: '20px' }}
        >
            <div className="content">
                <div className="container-fluid">
                    <Calendar />
                    <TaskBoard />
                </div>
            </div>
        </div>
    );
}

export default App;

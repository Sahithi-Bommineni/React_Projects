function Todolists(){
    return(
        <div className="tasks-container">
            <div className="stats" id="stats">
                <div className="stat-item">
                    <span className="stat-number" id="totalTasks">0</span>
                    <span className="stat-label">Total</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number" id="completedTasks">0</span>
                    <span className="stat-label">Completed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number" id="pendingTasks">0</span>
                    <span className="stat-label">Pending</span>
                </div>
            </div>
            <div id="tasksList">
                <div className="empty-state" id="emptyState">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <h3>No tasks yet</h3>
                    <p>Add a task above to get started!</p>
                </div>
            </div>
        </div>
    );
}
export default Todolists;
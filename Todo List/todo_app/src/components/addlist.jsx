function AddList(){
    return(
        <div className="add-task-section">
            <div className="input-group">
                <input type="text" class="task-input" placeholder="What needs to be done?" id="taskInput"/>
                <button className="add-button" type="submit">Add</button>
            </div>
        </div>
    );
}
export default AddList;
const items = ['Apple', 'Banana', 'Orange'];

function Todolists(){
    return(
        <div className="todolists">
            <ul>
                <li>
                    <input type="checkbox"/> 
                    Clean
                    <button id="delete">Delete</button>
                </li>
                <li>
                    <input type="checkbox"/> 
                    Wash
                    <button id="delete">Delete</button>
                </li>
                {items.map((item) => (
                <li>
                    <input type="checkbox"/> 
                    {item}
                    <button id="delete">Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default Todolists;
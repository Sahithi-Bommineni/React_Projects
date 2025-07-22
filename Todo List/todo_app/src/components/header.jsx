import AddList from './addlist.jsx'

function Header(){
    return(
        <div className="head">
             <header className="header">
                <h1>My ToDo App</h1>
            </header>
            <AddList/>
        </div>
           
    );
}
export default Header;
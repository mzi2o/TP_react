import { useState } from "react";

function Test() {
  const [newItem, setNewItem]= useState("v");

  function handelSubmit(e){
    e.preventDefault()
  }
    return (
        <>
            <form onSubmit={handelSubmit} action="" className="new">
                <div className="form-row">
                    <label htmlFor="item">New item</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
                </div>
                <button>Add</button>
            </form>
            <h1 className="header"> To do liste</h1>
            <ul>
                <li>
                    <label htmlFor="a">Item 1</label>
                    <input type="checkbox"/>
                    <button className="btn btn-danger">Delete</button>
                </li>
                <li>
                    <label htmlFor="a">Item 2</label>
                    <input type="checkbox"/>
                    <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
        </>
    )
}
export default Test;
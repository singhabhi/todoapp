import React, { useState } from "react";
import './TodoApp.css';
import TodoList from "./TodoList";

function TodoApp()
{

  
    // var v;
    const [value, setvalue]=useState("");
    const [item, setitem]=useState([]);

    function addvalue(event)
    {
      setvalue(event.target.value);
    }
    function addclick()
    {
       if(value!="")
       {
        setitem((oldarr) => {
            return [...oldarr,value];
          });
          setvalue("");
       }
    }
    function  deleteitem(id)
    {
       setitem((olditmes) => {
         return olditmes.filter((arrelem, index) =>{
           return index !== id;   
         });
       });
    }
    return(
    <>
      <div className="container">
          <div className="row justify-content-around">
              <div className="col-md-3">
                  <div className="main-div mt-4  rounded shadow-lg p-3 mb-5 bg-white rounded ">
                  <div className="text-center mb-5 bg-info p-1  shadow-lg  mb-5 ">
                  <h4>Todo List</h4>
                  </div>
                  <div className="text-center input-div">
                   <input type="text" name="" id="" placeholder="Add a Item " className=" " onChange={addvalue} value={value} />
                   <button type="button" class="btn btn-info rounded-circle border-top " onClick={addclick}>+</button>
                  </div>
                  <ol className="ex1">
                      {item.map((val, index) => {
                       return <TodoList 
                       Tvale={val}
                       key={index}
                       id={index}
                        onselect={deleteitem}
                       />;
                      })}
                  </ol>
                  </div>
              </div>
          </div>
      </div>
    </>
    );
   
}
export default TodoApp;
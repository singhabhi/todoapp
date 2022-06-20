import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

function TodoList(props)
{
 
 return(
 <>
  <div className="listmain">
  <li></li>
  <li> <span className="icon-s"><ClearIcon className="icon-clear" onClick={() =>{ 
      props.onselect(props.id)
  }} /></span> {props.Tvale}</li>
  </div>
 </>
 );

}
export default TodoList;
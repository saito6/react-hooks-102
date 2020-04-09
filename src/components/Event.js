import React,{useContext} from 'react';

import {
   DELETE_EVENT,
   ADD_OPERATION_LOG
} from '../actions';
import {timeCurrentISO8601} from '../utils';

import AppContext from '../contexts/AppContext';

const Event =({event})=>{
  const {dispatch} = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton=()=>{
    const result = window.confirm(`イベント(id=${id})を本当に作成しても良いですか？`);
    if(result){
      dispatch({type:'DELETE_EVENT',id});
      dispatch({
        type:'ADD_OPERATION_LOG',
        description:`イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentISO8601()
    });
    }
  }
  return(
    <tr>
    <td>{id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <td> <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button> </td>
    </tr>
  );
}

export default Event;

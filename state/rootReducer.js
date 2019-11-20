import { combineReducers } from 'redux';
import sideBar from '../state/modules/sideBar';
import tasks from '../state/modules/tasks';

export default combineReducers({
  tasks,
  sideBar
})
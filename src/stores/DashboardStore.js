import { observable, action, computed } from 'mobx';

class DashboardStore {
  
  @observable viewTitle = 'Dashboard';
  @observable tasks = [
    {
      id: 1,
      label: 'Task 1',
      completed: true
    },
    {
      id: 2,
      label: 'Task 2',
      completed: false
    },
    {
      id: 3,
      label: 'Task 3',
      completed: false
    }
  ]

  @action loadSubTitle = () => {
    return "This sub title is returned from an action in the DashboardStore"
  }

  @computed get remainingTasks() {
    return this.tasks.filter(task => !task.completed).length;
  }
  
};

const store = new DashboardStore();

export default store;
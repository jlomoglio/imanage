import { observable, action, computed } from 'mobx';

class DashboardStore {
  
  @observable githubView = "This Week";
  
  @observable viewTitle = 'Dashboard';
  @observable events = [
    {
      label: 'Group Meeting',
      when: 'In 32 minutes'
    },
    {
      label: 'Coffee Break',
      when: '10:30 AM'
    },
    {
      label: 'Public Release',
      when: '11:00 AM'
    },
    {
      label: 'Lunch',
      when: '12:30 PM'
    },
    {
      label: 'Development Meeting',
      when: '3:00 PM'
    },
  ]

  
  @action changeGithubView(view) {
    this.githubView = view;
  }
  
};

const store = new DashboardStore();

export default store;
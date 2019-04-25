import { observable, action } from 'mobx';

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

  @observable githubDataThisWeek = [
    40, 27, 51, 35, 28, 24, 19
  ];

  @observable githubDataLastWeek = [
    70, 42, 83, 65, 47, 34, 29
  ];

  @observable githubData2Weeks = [
    60, 40, 23, 45, 97, 50, 89
  ];


  
  @action changeGithubView(view) {
    this.githubView = view;
  }
  
};

const store = new DashboardStore();

export default store;
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
    19, 40, 27, 51, 35, 28, 24
  ];

  @observable githubDataLastWeek = [
    70, 42, 83, 65, 47, 34, 29
  ];

  @observable githubData2Weeks = [
    60, 40, 23, 45, 97, 50, 89
  ];

  @observable githubIssuesCreatedThisWeek = [
    {
      day: 'Sun',
      value: 60
    },
    {
      day: 'Mon',
      value: 30
    },
    {
      day: 'Tue',
      value: 80
    },
    {
      day: 'Wed',
      value: 20
    },
    {
      day: 'Thu',
      value: 50
    },
    {
      day: 'Fri',
      value: 70
    },
    {
      day: 'Sat',
      value: 90
    },
  ];

  @observable githubIssuesClosedThisWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 40
    },
    {
      day: 'Tue',
      value: 20
    },
    {
      day: 'Wed',
      value: 26
    },
    {
      day: 'Thu',
      value: 45
    },
    {
      day: 'Fri',
      value: 60
    },
    {
      day: 'Sat',
      value: 0
    },
  ];
  
  @action changeGithubView(view) {
    this.githubView = view;
  }
  
};

const store = new DashboardStore();

export default store;
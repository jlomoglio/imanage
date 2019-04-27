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

  // THIS WEEK
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
  
  @observable githubIssuesNeedTestThisWeek = [
    {
      day: 'Sun',
      value: 10
    },
    {
      day: 'Mon',
      value: 20
    },
    {
      day: 'Tue',
      value: 10
    },
    {
      day: 'Wed',
      value: 6
    },
    {
      day: 'Thu',
      value: 5
    },
    {
      day: 'Fri',
      value: 30
    },
    {
      day: 'Sat',
      value: 0
    },
  ];
  
  @observable githubIssuesFixedThisWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 90
    },
    {
      day: 'Tue',
      value: 50
    },
    {
      day: 'Wed',
      value: 76
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

  // LAST WEEK
  @observable githubIssuesCreatedLastWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 20
    },
    {
      day: 'Tue',
      value: 40
    },
    {
      day: 'Wed',
      value: 15
    },
    {
      day: 'Thu',
      value: 60
    },
    {
      day: 'Fri',
      value: 38
    },
    {
      day: 'Sat',
      value: 0
    },
  ];

  @observable githubIssuesClosedLastWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 10
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
      value: 15
    },
    {
      day: 'Fri',
      value: 20
    },
    {
      day: 'Sat',
      value: 0
    },
  ];
  
  @observable githubIssuesNeedTestLastWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 30
    },
    {
      day: 'Tue',
      value: 40
    },
    {
      day: 'Wed',
      value: 16
    },
    {
      day: 'Thu',
      value: 15,
    },
    {
      day: 'Fri',
      value: 27
    },
    {
      day: 'Sat',
      value: 0
    },
  ];
  
  @observable githubIssuesFixedLastWeek = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 60
    },
    {
      day: 'Tue',
      value: 10
    },
    {
      day: 'Wed',
      value: 26
    },
    {
      day: 'Thu',
      value: 25
    },
    {
      day: 'Fri',
      value: 30
    },
    {
      day: 'Sat',
      value: 0
    },
  ];

  // 2 WEEKS AGO
  @observable githubIssuesCreated2WeeksAgo = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 30
    },
    {
      day: 'Tue',
      value: 10
    },
    {
      day: 'Wed',
      value: 25
    },
    {
      day: 'Thu',
      value: 40
    },
    {
      day: 'Fri',
      value: 38
    },
    {
      day: 'Sat',
      value: 0
    },
  ];

  @observable githubIssuesClosed2WeeksAgo = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 15
    },
    {
      day: 'Tue',
      value: 18
    },
    {
      day: 'Wed',
      value: 16
    },
    {
      day: 'Thu',
      value: 25
    },
    {
      day: 'Fri',
      value: 30
    },
    {
      day: 'Sat',
      value: 0
    },
  ];

  @observable githubIssuesNeedTest2WeeksAgo = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 30
    },
    {
      day: 'Tue',
      value: 40
    },
    {
      day: 'Wed',
      value: 16
    },
    {
      day: 'Thu',
      value: 15,
    },
    {
      day: 'Fri',
      value: 27
    },
    {
      day: 'Sat',
      value: 0
    },
  ];

  @observable githubIssuesFixed2WeeksAgo = [
    {
      day: 'Sun',
      value: 0
    },
    {
      day: 'Mon',
      value: 20
    },
    {
      day: 'Tue',
      value: 10
    },
    {
      day: 'Wed',
      value: 16
    },
    {
      day: 'Thu',
      value: 25
    },
    {
      day: 'Fri',
      value: 10
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
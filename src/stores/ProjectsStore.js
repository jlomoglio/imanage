import { observable, action } from 'mobx';

class ProjectStore {
  @observable lead = '';
  @observable staus = '';
  @observable filtered = false;
  

  @observable leadList = [
    'Joe LoMoglio',
    'Marco James',
    'Tom Wilson',
    'Brad Jones'
  ];
  @observable statusList = [
    'Open',
    'On Hold',
    'Closed'
  ];
  @observable distinctStatusList = [];

  @observable projectsFiltered = [];
  @observable projects = [
    {
      name: 'SimGen',
      lead: 'Joe LoMoglio',
      begin: '03/10/2017',
      end: '4/02/2017',
      status: 'Closed'
    },
    {
      name: 'SimCore',
      lead: 'Joe LoMoglio',
      begin: '03/10/2017',
      end: '11/06/2017',
      status: 'Closed'
    },
    {
      name: 'SimMod',
      lead: 'Joe LoMoglio',
      begin: '04/08/2017',
      end: '10/22/2017',
      status: 'Closed'
    },
    {
      name: 'Vui-Kit',
      lead: 'Joe LoMoglio',
      begin: '02/01/2018',
      end: '6/30/2018',
      status: 'Closed'
    },
    {
      name: 'JD Construction Report Tool',
      lead: 'Joe LoMoglio',
      begin: '07/01/2018',
      end: '9/18/2018',
      status: 'Closed'
    },
    {
      name: 'The Veronica Chronicles',
      lead: 'Joe LoMoglio',
      begin: '10/01/2018',
      end: '12/30/2018',
      status: 'Closed'
    },
    {
      name: 'iManage',
      lead: 'Joe LoMoglio',
      begin: '01/05/2019',
      end: '----',
      status: 'Open'
    },
    {
      name: 'Project 1',
      lead: 'Marco James',
      begin: '03/15/2019',
      end: '----',
      status: 'Open'
    },
    {
      name: 'Project 2',
      lead: 'Tom Wilson',
      begin: '01/22/2019',
      end: '03/15/2019',
      status: 'Closed'
    },
    {
      name: 'Project 3',
      lead: 'Brad Jones',
      begin: '04/03/2019',
      end: '----',
      status: 'Open'
    },
  ];

  @action getValue = (list) => {
    if (list === 'leads') {
      return this.lead;
    }
    else if (list === 'status') {
      return this.status;
    }
  }

  @action onLeadChange = (e) => {
    this.projectsFiltered = [];
    this.lead = e.target.value;
    this.filtered = true;
    this.projects.map((project) => {
      if (project.lead === e.target.value) {
        this.projectsFiltered.push(
          {
            name: project.name,
            lead: project.lead,
            begin: project.begin,
            end: project.end,
            status: project.status
          },
        )
      }
    })

    // Gets only status values for selected project lead
    this.distinctStatusList = [...new Set(
      this.projectsFiltered.map(project => project.status)
    )]
  }

  @action onStatusChange = (e) => {
    this.projectsFiltered = [];
    this.status = e.target.value;
    this.filtered = true;
    this.projects.map((project) => {
      if (project.status === e.target.value && this.lead === '') {
        this.projectsFiltered.push(
          {
            name: project.name,
            lead: project.lead,
            begin: project.begin,
            end: project.end,
            status: project.status
          },
        )
      }
      else if (project.status === e.target.value && this.lead !== '') { 
        if (project.lead === this.lead && project.status === e.target.value) {
          this.projectsFiltered.push(
            {
              name: project.name,
              lead: project.lead,
              begin: project.begin,
              end: project.end,
              status: project.status
            },
          )
        }
      }
    })
  }

  @action clearFilters = () => {
    this.filter = '';
    this.lead = '';
    this.status = '';
    this.filtered = false;
  }
}

const store = new ProjectStore();

export default store;
import { observable, action } from 'mobx';

class ProjectStore {
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
  ];
}

const store = new ProjectStore();

export default store;
import { observable, action } from 'mobx';

class BacklogStore {
  @observable stories = [
    {
      title: 'Build Static Project View',
      id: 'S-00345',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Build Static Backlog View',
      id: 'S-00346',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Build Static Task View',
      id: 'S-00347',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Build Static Board View',
      id: 'S-00348',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Build Static Issues View',
      id: 'S-00349',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Create Checkbox Components',
      id: 'S-00350',
      project: 'iManage',
      priority: 'Med',
      points: '4'
    },
    {
      title: 'Create Scrollable Table Component',
      id: 'S-00351',
      project: 'iManage',
      priority: 'High',
      points: '10'
    },
    {
      title: 'Create Backlog MobX Store',
      id: 'S-00352',
      project: 'iManage',
      priority: 'High',
      points: '2'
    },
    {
      title: 'Wireup Data to Backlog Table',
      id: 'S-00353',
      project: 'iManage',
      priority: 'High',
      points: '5'
    },
    {
      title: 'Add Checkbox functionality',
      id: 'S-00354',
      project: 'iManage',
      priority: 'Med',
      points: '4'
    },
    {
      title: 'Replace Action Text with Buttons',
      id: 'S-00355',
      project: 'iManage',
      priority: 'Med',
      points: '4'
    },
  ];
}

const store = new BacklogStore();

export default store;
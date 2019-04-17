import { observable, action } from 'mobx';

class AppStore {
  
  @observable appView = 'Dashboard';
  @observable appSubView = '';
  @observable sidebarOpen = true;
  @observable profileMenuOpen = false;
  @observable navSubItemOpen = false;


  @action toggleProfileCollapse(view) {
    this.profileMenuOpen = !this.profileMenuOpen
    this.navSubItemOpen = false
  }
  
  @action toggleSidebarCollapse() {
    this.sidebarOpen = !this.sidebarOpen
  }

  @action toggleSubItemCollapse(sub, view) {
    if (sub) {
      this.navSubItemOpen = !this.navSubItemOpen
    }
    else {
      this.navSubItemOpen = false
      this.profileMenuOpen = false;
      this.appView = view
    }
  }

  @action setView(view) {
    this.appView = view;
  }

  @action setSubView(view, subView) {
    this.appView = view;
    this.appSubView = subView;
    this.profileMenuOpen = false;
  }
};

const store = new AppStore();

export default store;
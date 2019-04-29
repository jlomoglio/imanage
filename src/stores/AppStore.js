import { observable, action } from 'mobx';

class AppStore {
  @observable appTitle = 'iManage';
  @observable appVersion = 'v0.0.1';
  @observable appView = 'Dashboard';
  @observable appSubView = '';
  @observable appSubSubView = "" 
  @observable sidebarOpen = true; // true
  @observable sidePanelOpen = false; // false
  @observable profileMenuOpen = false;
  @observable navSubItemOpen = false;
  @observable userStatus = 'Available';

  @action toggleProfileCollapse(view) {
    this.profileMenuOpen = !this.profileMenuOpen
    this.navSubItemOpen = false
  }
  
  @action toggleSidebarCollapse() {
    this.sidebarOpen = !this.sidebarOpen
  }

  @action toggleSidePanelCollapse() {
    this.sidePanelOpen = !this.sidePanelOpen
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

    if (this.appView === 'User Profile') {
      this.profileMenuOpen = true;
    }
    else {
      this.profileMenuOpen = false
    }
  }

  @action setSubSubView(view, subView, subSubView) {
    this.appView = view;
    this.appSubView = subView;
    this.appSubSubView = subSubView;
    this.profileMenuOpen = true;
  }
};

const store = new AppStore();

export default store;
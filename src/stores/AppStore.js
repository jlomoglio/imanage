import { observable, action } from 'mobx';

class AppStore {
  @observable appTitle = 'iManage';
  @observable appVersion = 'v0.0.1';
  @observable appView = 'User Profile';
  @observable appSubView = 'My Info';
  @observable appSubSubView = "Pay Info"
  @observable sidebarOpen = true; // true
  @observable sidePanelOpen = false; // false
  @observable profileMenuOpen = false;
  @observable navSubItemOpen = false;
  @observable userStatus = 'Available';

  @observable showPersonal = false; // true
  @observable showPayInfo = true; // false
  @observable showBenefits = false;
  @observable showTimeOff = false;
  @observable showDocuments = false;
  @observable showFiles = false;

 
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
    this.profileMenuOpen = true;
  }

  @action setSubSubView(view, subView, subSubView) {
    this.appView = view;
    this.appSubView = subView;
    this.appSubSubView = subSubView;
    this.profileMenuOpen = true;

    subSubView === 'Personal' ? this.showPersonal = true : this.showPersonal = false;
    subSubView === 'Pay Info' ? this.showPayInfo = true : this.showPayInfo = false;
    subSubView === 'Benefits' ? this.showBenefits = true : this.showBenefits = false;
    subSubView === 'Time Off' ? this.showTimeOff = true : this.showTimeOff = false;
    subSubView === 'Documents' ? this.showDocuments = true : this.showDocuments = false;
    subSubView === 'Files' ? this.showFiles = true : this.showFiles = false;
  }
};

const store = new AppStore();

export default store;
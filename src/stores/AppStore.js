import { observable, action } from 'mobx';

class AppStore {
  @observable appTitle = 'iManage';
  @observable appVersion = 'v0.0.1';
  @observable appView = 'User Profile';
  @observable appSubView = 'Job Openings';
  @observable appSubSubView = "Personal" 
  @observable sidebarOpen = true; // true
  @observable sidePanelOpen = false; // false
  @observable profileMenuOpen = false;
  @observable navSubItemOpen = false;
  @observable userStatus = 'Available';

  @observable showPersonal = true; 
  @observable showPayInfo = false;
  @observable showBenefits = false;
  @observable showTimeOff = false;
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

    // if (this.subSubView === 'Personal') {
    //   this.showPersonal = true;
    //   this.showPayInfo = false;
    //   this.showBenefits = false;
    //   this.showTimeOff = false;
    //   this.showFiles = false;
    // } 
    // else if (this.subSubView === 'Pay Info') {
    //   this.showPersonal = false;
    //   this.showPayInfo = true;
    //   this.showBenefits = false;
    //   this.showTimeOff = false;
    //   this.showFiles = false;
    // }
    // else if (this.subSubView === 'Benefits') {
    //   this.showPersonal = false;
    //   this.showPayInfo = false;
    //   this.showBenefits = true;
    //   this.showTimeOff = false;
    //   this.showFiles = false;
    // }
    // else if (this.subSubView === 'Time Off') {
    //   this.showPersonal = false;
    //   this.showPayInfo = false;
    //   this.showBenefits = false;
    //   this.showTimeOff = true;
    //   this.showFiles = false;
    // }
    // else if (this.subSubView === 'Files') {
    //   this.showPersonal = false;
    //   this.showPayInfo = false;
    //   this.showBenefits = false;
    //   this.showTimeOff = false;
    //   this.showFiles = true;
    // }

    this.subSubView === 'Personal' ? this.showPersonal = true : this.showPersonal = false;
    this.subSubView === 'Pay Info' ? this.showPayInfo = true : this.showPayInfo = false;
    this.subSubView === 'Benefits' ? this.showBenefits = true : this.showBenefits = false;
    this.subSubView === 'Time Off' ? this.showTimeOff = true : this.showTimeOff = false;
    this.subSubView === 'Files' ? this.showFiles = true : this.showFiles = false;
  }
};

const store = new AppStore();

export default store;
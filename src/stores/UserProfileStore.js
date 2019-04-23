import { observable, action } from 'mobx';

// Avatar Images
import f1 from '../assets/profile-avatar/me.jpg';
import f2 from '../assets/profile-avatar/f1.png';
import f3 from '../assets/profile-avatar/f2.png';
import f4 from '../assets/profile-avatar/f3.png';
import f5 from '../assets/profile-avatar/f4.png';
import f6 from '../assets/profile-avatar/f5.png';
import f7 from '../assets/profile-avatar/f6.png';
import f8 from '../assets/profile-avatar/f7.png';
import f9 from '../assets/profile-avatar/f9.png';
import f10 from '../assets/profile-avatar/f10.png';

import m1 from '../assets/profile-avatar/m1.png';
import m2 from '../assets/profile-avatar/m2.png';
import m3 from '../assets/profile-avatar/m3.png';
import m4 from '../assets/profile-avatar/m4.png';
import m5 from '../assets/profile-avatar/m5.png';
import m6 from '../assets/profile-avatar/m6.png';
import m7 from '../assets/profile-avatar/m7.png';
import m8 from '../assets/profile-avatar/m8.png';
import m9 from '../assets/profile-avatar/m9.png';
import m10 from '../assets/profile-avatar/m10.png';

// Background Images
import bg1 from '../assets/profile-bg/profile-bg-1.png';
import bg2 from '../assets/profile-bg/profile-bg-2.png';
import bg3 from '../assets/profile-bg/profile-bg-3.png';
import bg4 from '../assets/profile-bg/profile-bg-4.png';
import bg5 from '../assets/profile-bg/profile-bg-5.png';
import bg6 from '../assets/profile-bg/profile-bg-6.png';
import bg7 from '../assets/profile-bg/profile-bg-7.png';
import bg8 from '../assets/profile-bg/profile-bg-8.png';
import bg9 from '../assets/profile-bg/profile-bg-9.png';
import bg10 from '../assets/profile-bg/profile-bg-10.png';

class UserProfileStore {
  @observable name = 'Joe LoMoglio';
  @observable title = 'Front End Developer';
  @observable location = 'Tampa, FL (Remote)';
  @observable supervisor = 'Mark Thompson';
  @observable avatar = f1;
  @observable billboardBg = '';
  @observable userStatus = 'Available';

  @observable showEditBillboardModal = false;
  @observable selectedAvatar = f1;
  @observable bg = bg7;
  @observable selectedBg = bg7;

  
  @observable avatarSelectorScrollPosition = '';
  @observable bgSelectorScrollPosition = '';

  // Avatar Image Arrays
  @observable row1 = [m1, m2, m3, m4];
  @observable row2 = [m5, m6, m7, m8];
  @observable row3 = [m9, m10, f1, f2];
  @observable row4 = [f3, f4, f5, f6];
  @observable row5 = [f7, f8, f9, f10];

  // Background Image Array
  @observable backgroundImages = [
    bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10
  ];

  // ??????
  @action updateProfile(avatar, billboardBg) {
    this.avatar = avatar;
    this.billboardBg = billboardBg;
  }
  
  // Close Modal
  @action closeEditBillBoardModal() {
    if (this.selectedAvatar !== this.avatar) {
      this.selectedAvatar = this.avatar;
    }

    this.showEditBillboardModal = false;
  }

  // Show Edit Billboard Modal
  @action showEditBillBoardModal() {
    this.showEditBillboardModal = true;
  }

  // Select Avatar
  @action toggleAvatarSelected(avatar, avatarScrollPos) {
    this.selectedAvatar = avatar;
    this.avatarSelectorScrollPosition = avatarScrollPos;
  }

  // Select Background
  @action toggleBgSelected(bg, bgScrollPos) {
    this.selectedBg = bg;
    this.bgSelectorScrollPosition = bgScrollPos;
  }

  // Save Avatar
  @action saveProfileImages(avatar, bg) {
    // Avatar
    this.avatar = avatar;
    this.selectedAvatar = avatar;

    // Background Image
    this.bg = bg;
    this.selectedBg = bg;

    // Close Modal
    this.showEditBillboardModal = !this.showEditBillboardModal;
  }


  ////////////////////////////////////////////////////////////
  // HOME PAGE
  ////////////////////////////////////////////////////////////

  @observable timeoffCardWidth = '';
  @observable whosOutCardWidth = '';
  @observable celebrateCardWidth = '';
  @observable welcomeCardWidth = '';
  @observable announcementWidth = '';
  @observable announcements = [
    {
      icon: '',
      avatar: m1,
      text: 'Marco James requested Monday, April 22nd off',
      time: '3 hrs ago'
    },
    {
      icon: 'fas fa-piggy-bank',
      avatar: '',
      text: 'You got paid! Take a look at your paystub for April 19th paycheck.',
      time: '4 hrs ago'
    },
    {
      icon: 'far fa-calendar-check',
      avatar: '',
      text: 'Employee Town Hall Monday April 22nd at 10am.',
      time: '5 hrs ago'
    },
    {
      icon: '',
      avatar: f4,
      text: "It's Jane Smith's Birthday today!!!",
      time: '8 hrs ago'
    },
    {
      icon: '',
      avatar: m6,
      text: "John Myers applied for Sr. UI Developer position.",
      time: '8.5 hrs ago'
    },
    {
      icon: 'far fa-calendar-check',
      avatar: '',
      text: 'Employee Training Module 15 Wednesday April 24th 8 am.',
      time: '1 day ago'
    },
  ];
  @observable celebrations = [
    {
      avatar: m1,
      name: 'Antonio James',
      text: 'April 12th - Happy Birthday!',
    },
    {
      avatar: f3,
      name: 'Jane Smith',
      text: 'April 19th - Happy Birthday!',
    },
    {
      avatar: m5,
      name: 'Jim Blanchard',
      text: '10 yr Employee Anniversary!',
    },
    {
      avatar: f6,
      name: 'Amy Jones',
      text: '30 yr Employee Anniversary!',
    },
    {
      avatar: m9,
      name: 'Mike Reed',
      text: 'April 11th - Happy Birthday!',
    },
  ]; 

  ////////////////////////////////////////////////////////////
  // MY INFO: Pay Info
  ////////////////////////////////////////////////////////////

  @observable payInfoModalShown = false;

  @observable mainchartData = [
    { key: 'Your Cash', value: 61, color: '#E64C65' },
    { key: 'Taxes', value: 28, color: '#11A8AB' },
    { key: 'Deductions', value: 11, color: '#4FC4F6' }
  ];


  @observable paystubData = [
    {
      for: 'For Mar 1 - Mar 15',
      paydate: 'March 15th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '32913.68'
      }
    },
    {
      for: 'For Mar 15 - Mar 31',
      paydate: 'March 15th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '28799.47'
      }
    },

    {
      for: 'For Apr 1 - Apr 15',
      paydate: 'April 15th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '24685.26'
      }
    },
    {
      for: 'For Apr 15 - Apr 31',
      paydate: 'April 30th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '20571.05'
      }
    },

    {
      for: 'For May 1 - May 15',
      paydate: 'May 15th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '16456.84'
      }
    },
    {
      for: 'For May 15 - May 31',
      paydate: 'May 30th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '12342.63'
      }
    },

    {
      for: 'For Jun 1 - Jun 15',
      paydate: 'June 15th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '8228.42'
      }
    },
    {
      for: 'For Jun 15 - Jun 31',
      paydate: 'June 30th, 2019',
      paystub: {
        gross: '5872.68',
        tax: '1084.35',
        deductions: '674.12',
        net: '4114.21',
        ytdNet: '4114.21'
      }
    },
  ];

  // Show PayInfo Modal
  @action showPayInfoModal() {
    this.payInfoModalShown = true;
  }

  // Close PayInfo Modal
  @action closePayInfoModal() {
    this.payInfoModalShown = !this.payInfoModalShown;
  }



  ////////////////////////////////////////////////////////////
  // MY INFO: FILES
  ////////////////////////////////////////////////////////////

  @observable fileList = [
    {
      type: 'word',
      name: '2019 Employee Handbook',
      created: '02/23/2019'
    },
    {
      type: 'pdf',
      name: '2019 Form W-4',
      created: '02/23/2019'
    },
    {
      type: 'alt',
      name: 'Accident Injury Report',
      created: '02/23/2019'
    },
    {
      type: 'pdf',
      name: 'Disciplainary Action Form',
      created: '02/23/2019'
    },
    {
      type: 'excel',
      name: 'Expense Reimbursement Form',
      created: '02/23/2019'
    },
    {
      type: 'pdf',
      name: 'Form 1099',
      created: '02/23/2019'
    },
    {
      type: 'word',
      name: 'Harassment Policy 10-2018',
      created: '02/23/2019'
    },
    {
      type: 'pdf',
      name: 'HIPPA Privacy Rules',
      created: '02/23/2019'
    },
    {
      type: 'powerpoint',
      name: 'New Employee Onboarding',
      created: '02/23/2019'
    },
  ];

  ////////////////////////////////////////////////////////////
  // JOB POSTING
  ////////////////////////////////////////////////////////////

  @observable categories = [
    {
      label: 'Accounting / Finance',
      count: '1'
    },
    {
      label: 'Business Management',
      count: '1'
    },
    {
      label: 'Creative / Design',
      count: '1'
    },
    {
      label: 'Customer Service',
      count: '3'
    },
    {
      label: 'Development',
      count: '10'
    },
    {
      label: 'Engineering',
      count: '4'
    },
    {
      label: 'Human Resources',
      count: '1'
    },
    {
      label: 'IT Software Development',
      count: '1'
    },
    {
      label: 'Legal',
      count: '1'
    },
    {
      label: 'Logistics',
      count: '0'
    },
    {
      label: 'Marketing',
      count: '0'
    },
    {
      label: 'Product / Operations',
      count: '1'
    },
    {
      label: 'Project Management',
      count: '1'
    },
    {
      label: 'Quality Assurance',
      count: '1'
    },
    {
      label: 'Sales',
      count: '1'
    },
    {
      label: 'Security',
      count: '1'
    },
    {
      label: 'Warehouse',
      count: '1'
    },
  ];
};

const store = new UserProfileStore();

export default store;
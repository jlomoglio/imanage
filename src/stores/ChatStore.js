import { observable, action } from 'mobx';

import avatarJane from '../assets/avatar-jane-smith.jpg';
import avatarFrank from '../assets/avatar-frank-morrow.jpg';
import avatarTed from '../assets/avatar-ted-anderson.jpg';
import avatarMark from '../assets/avatar-mark-wilson.jpg';
import avatarMarco from '../assets/avatar-marco-james.jpg';
import avatarMarvin from '../assets/avatar-marvin-elmore.jpg';

class ChatStore {
  
  @observable teamMembers = [
    {
      img: avatarJane,
      name: 'Jane Smith',
      title: 'UX Designer',
      status: 'online',
      numMsg: '3'
    },
    {
      img: avatarFrank,
      name: 'Frank Morrow',
      title: 'Full Stack Developer',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarTed,
      name: 'Ted Anderson',
      title: 'Front End Developer',
      status: 'offline',
      numMsg: ''
    },
    {
      img: avatarMark,
      name: 'Mark Wilson',
      title: 'Back End Developer',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarMarco,
      name: 'Marco James',
      title: 'Front End Engineer',
      status: 'online',
      numMsg: '4'
    },
    {
      img: avatarMarvin,
      name: 'Marvin Elmore',
      title: 'Front End Developer',
      status: 'online',
      numMsg: ''
    }
  ];
  @observable currentChatMember = '';
  @observable currentChatMemberStatus = '';
  @observable currentChatMemberImage = '';
  @observable showChatScreen = false;

  @observable janeMessages = [
    { msg: 'Hey, you there?' },
    { msg: 'How was the meeting?' },
    { msg: 'Let me know when you are free' }
  ];

  @observable marcoMessages = [
    { msg: 'Hey bud did you get the proposal?' },
    { msg: 'Look at section 4.3, not sure if we can do what they are asking for' },
    { msg: 'Where are you?' },
    { msg: "Let me know when you get back" }
  ];

  @action selectMember(member, status, image) {
    this.currentChatMember = member;
    this.currentChatMemberStatus = status;
    this.currentChatMemberImage = image;
    this.showChatScreen = true;
  }

  @action closeChatWindow() {
    this.showChatScreen = false;
  }
  
  @action addGroup = () => {
    return "This sub title is returned from an action in the DashboardStore"
  }

  @action addMember = () => {
    return "This sub title is returned from an action in the DashboardStore"
  }

   
};

const store = new ChatStore();

export default store;
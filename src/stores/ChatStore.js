import { observable, action } from 'mobx';
import UserProfileStore from '../stores/UserProfileStore';

import avatarJane from '../assets/avatar-jane-smith.jpg';
import avatarFrank from '../assets/avatar-frank-morrow.jpg';
import avatarTed from '../assets/avatar-ted-anderson.jpg';
import avatarMark from '../assets/avatar-mark-wilson.jpg';
import avatarMarco from '../assets/avatar-marco-james.jpg';
import avatarMarvin from '../assets/avatar-marvin-elmore.jpg';
//import avatarJoe from '../assets/Me_Vector.jpg';

import avatarMike from '../assets/avatar-marvin-elmore.jpg';
import avatarKim from '../assets/avatar-marvin-elmore.jpg';
import avatarJeff from '../assets/avatar-marvin-elmore.jpg';
import avatarJason from '../assets/avatar-marvin-elmore.jpg';
import avatarSusan from '../assets/avatar-marvin-elmore.jpg';
import avatarJill from '../assets/avatar-marvin-elmore.jpg';

class ChatStore {
  
  @observable chatGroups = [
    'General',
    'Sales',
    'Development',
  ];
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
    },
  ];
  @observable users = [
    {
      img: avatarMike,
      name: 'Mike Wallace',
      title: 'Database Developer',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarKim,
      name: 'Kim Jones',
      title: 'Database Developer',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarJeff,
      name: 'Jeff DeSalle',
      title: 'Server Admin',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarJason,
      name: 'Jason Newsome',
      title: 'QA Tester',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarSusan,
      name: 'Susan James',
      title: 'QA Tester',
      status: 'online',
      numMsg: ''
    },
    {
      img: avatarJill,
      name: 'Jill Jones',
      title: 'UX Designer',
      status: 'online',
      numMsg: ''
    },
  ];
  
  @observable currentChatMember = '';
  @observable currentChatMemberStatus = '';
  @observable currentChatMemberImage = '';
  @observable currentChatGroup = '';
  @observable showChatScreen = false;
  @observable showGroupChatScreen = false;
  @observable showChatSettingsScreen = false;
  @observable showChatList = true;
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
  @observable groupMessagesGeneral = [
    { 
      memeber: 'Joe LoMoglio',
      image: UserProfileStore.avatar,
      status: 'online',
      msg: 'So what do you want to do for lunch?' 
    },
    { 
      memeber: 'Marco James',
      image: avatarMarco,
      status: 'online',
      msg: 'How about going to Ginza for Sushi' 
    },
    { 
      memeber: 'Marvin Elmore',
      image: avatarMarvin,
      status: 'online',
      msg: 'Sounds good to me' 
    },
    { 
      memeber: 'Jane Smith',
      image: avatarJane,
      status: 'online',
      msg: 'I got plans for lunch already' 
    },
    { 
      memeber: 'Ted Anderson',
      image: avatarTed,
      status: 'online',
      msg: 'Yeah thats works for me' 
    },
  ];
  @observable groupMessagesSales = [
    { 
      memeber: 'Joe LoMoglio',
      image: UserProfileStore.avatar,
      status: 'online',
      msg: 'Can you send me the sales report from last month?' 
    },
    { 
      memeber: 'Jane Smith',
      image: avatarJane,
      status: 'online',
      msg: 'Sure give me a few minutes' 
    },
    { 
      memeber: 'Joe LoMoglio',
      image: UserProfileStore.avatar,
      status: 'online',
      msg: 'Cool thank you' 
    },
    { 
      memeber: 'Jane Smith',
      image: avatarJane,
      status: 'online',
      msg: 'Your welcome' 
    },
  ];
  @observable groupMessagesDevelopment = [
    { 
      memeber: 'Joe LoMoglio',
      image: UserProfileStore.avatar,
      status: 'online',
      msg: 'Hey guys can we have a quick meeting' 
    },
    { 
      memeber: 'Jane Smith',
      image: avatarJane,
      status: 'online',
      msg: 'Sure' 
    },
    { 
      memeber: 'Marco James',
      image: avatarMarco,
      status: 'online',
      msg: 'Yeah give me 15 minutes' 
    },
    { 
      memeber: 'Marvin Elmore',
      image: avatarMarvin,
      status: 'online',
      msg: 'Yeah, but Frank and Ted are meeting with HR' 
    },
    { 
      memeber: 'Joe LoMoglio',
      image: UserProfileStore.avatar,
      status: 'online',
      msg: '@Marvin we can fill them in later' 
    },
  ];


  @action selectMember(member, status, image) {
    this.currentChatMember = member;
    this.currentChatMemberStatus = status;
    this.currentChatMemberImage = image;
    this.showChatScreen = true;
    this.showChatList = false;
  }

  @action selectChatGroup(group) {
    this.currentChatGroup = group;
    this.showGroupChatScreen = true;
    this.showChatList = false;
  }

  @action selectChatSettings() {
    this.showChatSettingsScreen = true;
    this.showGroupChatScreen = false;
    this.showChatScreen = false;
    this.showChatList = false;
  }

  @action closeChatWindow() {
    this.showChatScreen = false;
    this.showGroupChatScreen = false;
    this.showChatSettingsScreen = false;
    this.showChatList = true;
  }
  
  @action addGroup = (group) => {
    this.chatGroups.push(group);
  }

  @action addUser = (img, name, title, status) => {
    this.teamMembers.push({
      img: img,
      name: name,
      title: title,
      status: status,
      numMsg: ''
    });
  }

   
};

const store = new ChatStore();

export default store;
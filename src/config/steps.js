const steps = [
  {
    id: '1',
    message: 'Bienvenue sur la boutique Geek Goodies',
    trigger: 2,
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '2',
  },
  {
    id: '4',
    user: true,
    trigger: '2',
  },
  {
    id: '5',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '2',
  },
  {
    id: '6',
    user: true,
    trigger: '2',
  },
  {
    id: '7',
    message: 'Hi {previousValue}, nice to meet you!',
  },
  {
    id: '8',
    user: true,
  }
];

export default steps;
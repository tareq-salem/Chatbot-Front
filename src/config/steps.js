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
  }
];

export default steps;
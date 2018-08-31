export const initialState = {
  courses: [
    {id:0,name:'React Fundamentals', description: 'React Fundamentals',session:0, duration: 5, trainer: 'Mohan Shukla'},
    {id:1,name:'Redux Fundamentals', description: 'Redux Fundamentals',session:1, duration: 2, trainer: 'Amit Kumar'},
    {id:2,name:'React Architecture', description: 'React Architecture',session:2, duration: 10, trainer: 'Abhishek Kumar'},
  ],
  sessions: [
    {id:0,name:'React Basics', description: 'React Basics',course:0, duration: 5, trainer: 'Mohan Shukla'},
    {id:1,name:'Redux', description: 'Redux',course:1, duration: 2, trainer: 'Amit Kumar'},
    {id:2,name:'React Architecture', description: 'React Architecture',course:2, duration: 10, trainer: 'Abhishek Kumar'},
  ]
}
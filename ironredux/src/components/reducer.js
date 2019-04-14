import { SHOWDATA } from './types'

const initialState = {
  data: [
    // {
    //   name: 'mir'
    // },
    // {
    //   name: 'feli'
    // },
    // {
    //   name: 'andre'
    // }
  ],
  count: 0
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE': 
      return {count: state.count + 1};
    case 'POTATO':
      return {count: state.count - 1};
    case SHOWDATA:
      return {
        data: [
          {
            name: 'bla'
          },
          {
            name: 'chartreuse'
          },
          {
            name: 'ironhack'
          }
        ]
      }
    default:
      return state;
  }
};
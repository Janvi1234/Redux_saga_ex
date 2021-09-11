const color='white'
 
export const reducer = (state=color,action) =>{
       switch(action.type){
         case "COLOR_CHANGE":{
          return {color:action.payload}
         }
         default:{return state}
       }
}
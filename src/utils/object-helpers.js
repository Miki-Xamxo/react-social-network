
export const updateObjectInArray = (items, actionId, newObjProps) => {
  return items.map(u => {
            if(u.id === actionId){
              return{...u, ...newObjProps}
            }
            return u;
          })
}
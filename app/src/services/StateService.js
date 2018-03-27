class StateService {
  addArrayItem = (state, property, matchedId, obj) => {
    let newState = { ...state };
    let item = newState[property];
    item[matchedId] = obj;
    return newState;
  };
}

export default new StateService();

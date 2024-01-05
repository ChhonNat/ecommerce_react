
// export const DataCardUsingAction = (state, action) => {
//     state.DataCardUsingAction = action.payload;
// };


// Actions/UpdateDataCard/DataCardUsing.js
export const DataCardUsingAction = (newData) => ({
    type: 'UPDATE_DATA_CARD_USING',
    payload: newData,
  });
  
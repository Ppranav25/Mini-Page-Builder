export function addText(data){
    return {
      type: "ADD_TEXT",
      payload: data
    }
}
export function deleteText(data){
    return {
      type: "DELETE_TEXT",
      payload: data
    }
}
export function setModalState(data){
    return {
      type: "MODAL_STATE",
      payload: data
    }
}
export function addAllTexts(data){
    return {
      type: "ADD_ALL_TEXT",
      payload: data
    }
}
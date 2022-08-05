export default function useInputHandleChange(e, dispatch) {
  return dispatch({ type: e.target.name, value: e.target.value });
}

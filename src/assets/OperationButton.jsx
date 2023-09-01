import { ACTIONS } from "../App";

export default function DigitButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className="operator"
    >
      {operation}
    </button>
  );
}

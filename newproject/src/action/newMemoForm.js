import { MEMO_ERROR, MEMO_FAILURE, MEMO_PENDING} from './types';
import axios from 'axios'
import tokenConfig from './userAction'
import { returnErrors } from './errorActions'

export const memo = (newMemo) => (dispatch, getState) => {
    dispatch({ type: MEMO_FAILURE })
    const body = JSON.stringify(newMemo)
    axios.post(`${process.env.REACT_APP_API}/newMemo`, newMemo, tokenConfig(getState))
        .then(res => dispatch({
            type: MEMO_PENDING,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "MEMO_ERROR"))
            dispatch({
                type: MEMO_ERROR
            })
        })
}
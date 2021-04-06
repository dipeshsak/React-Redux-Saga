// import { delay } from "@redux-saga";
import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects"

function* ageUpAsync(){
    yield delay(4000);
    yield put({type:'INC_ASYNC',value:1});
}


export function* watchAgeUp(){
     yield takeEvery('INC',ageUpAsync);
    //yield takeLatest('INC',ageUpAsync);
}
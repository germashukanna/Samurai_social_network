import {followTC} from "./Users-reducer";
import {getAPI} from "../api/Users-api";
import {ResponseApiType, ResultCodeEnumType} from "../api/api";

jest.mock('../api/Users-api')
const getAPIMock = getAPI

const result: ResponseApiType = {
    resultCode: ResultCodeEnumType.Success,
    messages: [],
    data: {}
}



test('follow should be success', async () => {
// @ts-ignore
    getAPIMock.follow.mockReturnValue(Promise.resolve(result))
    const thunk = followTC(1)
    const dispatchMock = jest.fn()
   await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})

import {follow} from "./Users-reducer";
import {getAPI} from "../Api/Users-api";
import {ResponseApiType, ResultCodeEnumType} from "../Api/api";

jest.mock('../Api/Users-api')
const getAPIMock = getAPI

const result: ResponseApiType = {
    resultCode: ResultCodeEnumType.Success,
    messages: [],
    data: {}
}



test('follow should be success', async () => {
// @ts-ignore
    getAPIMock.follow.mockReturnValue(Promise.resolve(result))
    const thunk = follow(1)
    const dispatchMock = jest.fn()
   await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})

import {followSuccess, unfollowSuccess, UserPageType, usersReducer} from "./Users-reducer";

let state: UserPageType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, fullName: "Ann 0", followed: false, photos: {small: null, large: null},
                status: 'status 0', photoUrl: '',
                location: [{city: 'Minsk', country: 'Belarus'}]
            },
            {
                id: 1, fullName: "Ann 1", followed: false, photos: {small: null, large: null},
                status: 'status 1', photoUrl: '',
                location: [{city: 'Minsk', country: 'Belarus'}]
            },
            {
                id: 2, fullName: "Ann 2", followed: true, photos: {small: null, large: null},
                status: 'status 2', photoUrl: '',
                location: [{city: 'Minsk', country: 'Belarus'}]
            },
            {
                id: 3, fullName: "Ann 3", followed: true, photos: {small: null, large: null},
                status: 'status 3', photoUrl: '',
                location: [{city: 'Minsk', country: 'Belarus'}]
            },
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        portionSize: 10,
        filter: {
            term: '',
            friend: null as null | false
        }
    }
})


test('follow should be success', () => {

    const action = followSuccess(1)

    const newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(true)
})
test('unfollow should be success', () => {

    const action = unfollowSuccess(3)

    const newState = usersReducer(state, action)

    expect(newState.users[2].followed).toBe(true)
    expect(newState.users[3].followed).toBe(false)
})


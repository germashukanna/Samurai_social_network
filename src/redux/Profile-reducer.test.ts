import profileReducer, {addPostActionCreactor, deletePostActionCreactor, ProfilePageType} from "./Profile-reducer";

const state: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 11},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: '',
    isOwner: false,

};

test('new post shold be added', () => {

    const action = addPostActionCreactor('it-kamasutra.com')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('new post name should de correct', () => {

    const action = addPostActionCreactor('it-kamasutra.com')

    const newState = profileReducer(state, action)

    expect(newState.posts[2].post).toBe('it-kamasutra.com')
})

test('after deleting length should be correct', () => {

    const action = deletePostActionCreactor(1)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

test('after deleting length shouldn"t be decrement if id is incorrect', () => {

    const action = deletePostActionCreactor(1000)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

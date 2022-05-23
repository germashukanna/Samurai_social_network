import React from 'react';
import './App.css';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import New from "./components/New/New";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainerToStore} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {ReduxStoreType} from "./redux/redux-store";
import {UsersContainerToStore} from "./components/Users/UsersContainer";



type AppPropsType = {
    store: ReduxStoreType

}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar state={state.sidebarPage}/>
                <div className={'.app-wrapper-content'}>
                    <Routes>
                        <Route path={"/dialogs"}
                               element={<SuperDialogsContainer/>}/>
                        <Route path={"/profile"}
                               element={<ProfileContainerToStore/>}/>
                        <Route path={"/profile/:userId?"}
                               element={<ProfileContainerToStore/>}/>
                        <Route path={"/new"} element={<New/>}/>
                        <Route path={"/Music"} element={<Music/>}/>
                        <Route path={"/settings"} element={<Settings/>}/>
                        <Route path={"/users"} element={<UsersContainerToStore/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        {/*<Route path={"/sidebar"} element={<SidebarItem key={1} img={""} name={""}/>}*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;

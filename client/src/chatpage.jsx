import React from "react";
import "./chatpagestyle.css";
import {ReactComponent as UserPFP} from "./img/user-profile-pic.svg";
import {ReactComponent as ViperPFP} from "./img/viper-profile-pic.svg";
import {ReactComponent as SettingsBtn} from "./img/settings-btn.svg";


export const ChatPage = () => {
    return (
        <div className="chat-page">
            <div className="overlap">
                <div className="background">
                    <img src = {require("./img/viper-art.png")} className="viper-art" alt="Viper art" />
                </div>
                <div className="input-field">
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <div className="text-wrapper">ask a question</div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="div">
                        <div className="settings-UI">
                            <div className="text-wrapper-2">settings</div>
                            <SettingsBtn  className="settings-button" alt="Settings button"/>
                        </div>
                        <div className="chat">
                            <p className="p">who is the best initiator in NA?</p>
                            <div className="chat-2" />
                        </div>
                        <div className="chat-3">
                            <div className="text-wrapper-3">is yay washed?</div>
                            <div className="chat-4" />
                        </div>
                        <div className="chat-5">
                            <div className="chat-6" />
                            <div className="text-wrapper-3">team builder</div>
                        </div>
                        <div className="text-wrapper-4">Chats</div>
                    </div>
                </div>
                <div className="viper-message">
                    <div className="overlap-2">
                        <div className="message-bubble" />
                        <p className="if-you-can-clone">
                            If you can clone KangKang, the best player
                            <br />
                            in the world then create a team of 5<br />
                            Kang Kangs. If not, consider Riehns,
                            <br />
                            Valyn, Aspas, Nats, and Shanks.
                        </p>
                    </div>
                    <ViperPFP className="viper-profile-pic" alt="Viper profile pic" />
                    <div className="text-wrapper-5">1:45AM 9/16/2024</div>
                </div>
                <div className="viper-message-2">
                    <div className="overlap-3">
                        <div className="message-bubble-2" />
                        <div className="text-wrapper-6">UUUHHHHHH you’re braindead</div>
                    </div>
                    <ViperPFP className="img" alt="Viper profile pic"/>
                    <div className="text-wrapper-7">1:57AM 9/16/2024</div>
                </div>
                <div className="user-message">
                    <div className="overlap-4">
                        <div className="message-bubble-3" />
                        <div className="text-wrapper-8">You’re delusional.</div>
                    </div>
                    <UserPFP className="user-profile-pic" alt="User profile pic"/>
                    <div className="text-wrapper-9">1:54AM 9/16/2024</div>
                </div>
            </div>
        </div>
    );
}
export default ChatPage;

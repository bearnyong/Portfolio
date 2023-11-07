import profile from "../images/profile/profile.png"
import github from "../images/profile/github.png"
import kakaotalk from "../images/profile/kakaotalk.png"
import kakaotalkProfile from "../images/profile/kakaotalkProfile.png"
import mail from "../images/profile/mail.png"

import "../css/profile.css"

function Profile() {

    return (
        <>
            <aside className="aside">
                <object>
                    <img class="profile-img" src={profile} />
                    <h3>고민영</h3>
                    <h4>Ko, Min-young</h4>
                    <div>
                        {/* github */}
                        <a href="https://github.com/bearnyong" target="_blank">
                            <img src={github}/>
                        </a>
                        {/* kakao */}
                        <img class="kakao" src={kakaotalk}/>
                        <img class="kakao-profile" src={kakaotalkProfile} />
                        {/* mail */}
                        <a href="mailto:rhalsdud216@gmail.com" target="_blank">
                            <img src={mail} />
                        </a>
                    </div>
                </object>
            </aside>
        </>
    )
}

export default Profile;
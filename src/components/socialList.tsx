
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg"
const SocialList = () => {
    return (
        <div className="flex gap-10">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src={youtube} alt="youtube icon" />
            </a>
        </div>
    )
}

export default SocialList;
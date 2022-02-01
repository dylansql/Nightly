import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <Link to={`/posts`}>
                <img src={`https://res.cloudinary.com/ddid7dngp/image/upload/v1643682930/icons8-home-50_g1tz3t.png`} style={{height: '30px', width: '30px'}}/>
            </Link>
            <Link to="https://github.com/dylansql/Nightly">
                <img src={`https://res.cloudinary.com/ddid7dngp/image/upload/v1643682931/icons8-search-50_fpwvar.png`} style={{height: '30px', width: '30px'}}/>
            </Link>
            <Link to={`/help`}>
                <img src={`https://res.cloudinary.com/ddid7dngp/image/upload/v1643682930/question_hnkzl0.png`} style={{height: '30px', width: '30px'}}/>
            </Link>
            <a target="_blank" href="https://www.canva.com/design/DAEslC6dR78/u-6XIZvgMrTG9nHNOt3uMQ/view?utm_content=DAEslC6dR78&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
                <img src={`https://res.cloudinary.com/ddid7dngp/image/upload/v1643682931/kisspng-computer-icons-document-file-format-5b1f61c707d804.3827383015287833030321_vo19jd.png`} style={{height: '30px', width: '30px'}}/>
            </a>
            <a target="_blank" href="https://dylansql.netlify.app/">
                <img src={`https://res.cloudinary.com/ddid7dngp/image/upload/v1643682930/laptop_uzigib.png`} style={{height: '30px', width: '30px'}}/>
            </a>
        </div>
    )
}

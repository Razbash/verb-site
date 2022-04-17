import Image from '../../assets/banner.png';

const Banner = (props) => {
    return(
        <div id="gtco-header"
            className="gtco-cover"
            role="banner"
            style={{'backgroundImage': `url(${props.image ? props.image : Image})`}}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 text-left">
                        <div className="display-t">
                            <div className="display-tc animate-box" data-animate-effect="fadeInUp">
                                <span className="date-post">{props.date ? props.date : null}</span>
                                <h1 className="mb30">{props.name ? props.name : "Stay up to date with the latest world events. Click the button to start learning"}</h1>
                                <p><a href={props.href ? props.href : "#gtco-main"} className="text-link">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
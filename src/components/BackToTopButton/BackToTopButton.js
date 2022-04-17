import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', function() {
            setActive(window.pageYOffset > 1000 ? true : false);
        });

        return () => {
            document.removeEventListener('scroll', function() {
                setActive(window.pageYOffset > 1000 ? true : false);
            });
        }
    }, []);

    const meta = `gototop js-top ${active ? "active" : null}`;

    return(
        <div className={meta}>
            <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
        </div>
    )
}

export default BackToTopButton;
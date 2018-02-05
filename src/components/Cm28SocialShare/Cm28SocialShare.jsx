import React from 'react';

class Cm28SocialShare extends React.Component {
    render() {

        return (
            <div className="cm cm-social-share">
                <ul>
                    <li>
                        <a href="#" className='googleplus' target="_blank" rel="noopener" title="Follow us on Google Plus" onClick="window.open('https://www.linkedin.com/cws/share?url={{PAGE_URL_GOES_HERE}}', 'newwindow', 'width=600, height=350'); return false;">

                        </a>
                    </li>
                    <li>
                        <a href="#" className='fb' target="_blank" rel="noopener" title="Like us on Facebook" onClick="window.open('https://www.facebook.com/dialog/share?app_id={{APP_ID_GOES_HERE}}&amp;href={{PAGE_URL_GOES_HERE}}', 'newwindow', 'width=600, height=350'); return false;">

                        </a>
                    </li>
                    <li>
                        <a href="#" className='twitter' target="_blank" rel="noopener" title="Tweet us on Twitter" onClick="window.open('https://twitter.com/intent/tweet?url={{PAGE_URL_GOES_HERE}}', 'newwindow', 'width=600, height=350'); return false;">

                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Cm28SocialShare;

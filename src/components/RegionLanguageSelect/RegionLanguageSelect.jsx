import React from 'react';

if (process.env.BROWSER) {
    require("./RegionLanguageSelect.scss");
}

class RegionLanguageSelect extends React.Component {
    render() {

        function showHide() {
            let x = document.getElementById("nav-region-dropdown__form");
            if (x.style.display === "") {
                x.style.display = "block";
            } else if (x.style.display === "none"){
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

        return (
            <nav className={`nav-region-dropdown ${this.props.additionalClass}`}>
                <h4 onClick={showHide}  className="nav-region-dropdown__cta">{this.props.cta}</h4>
                <form id="nav-region-dropdown__form" className="nav-region-dropdown__form" action={this.props.formAction}>
                    <label className="nav-region-dropdown__label" htmlFor="nav-region-dropdown__region">
                        <span>Select a region:</span>
                        <select id="nav-region-dropdown__region" data-placeholder="Choose a Region..." className="nav-region-dropdown__select nav-region-dropdown__region">
                            <optgroup label="International">
                                <option value="/intl/home" selected>Cochlear International</option>
                                <option value="/intl/careers">Careers at Cochlear</option>
                                <option value="/intl/about">About Cochlear</option>
                                <option value="/intl/contact">Contact Us</option>
                                <option value="/intl/about/investor">Investor Centre</option>
                            </optgroup>
                            <optgroup label="North America">
                                <option value="/us">United States &amp; Canada</option>
                            </optgroup>
                            <optgroup label="South America">
                                <option value="/la">Latin America</option>
                                <option value="/br">Brazil</option>
                            </optgroup>
                            <optgroup label="Middle East &amp; Africa">
                                <option value="/me">Middle East</option>
                                <option value="/uk/africa">Africa</option>
                            </optgroup>
                            <optgroup label="Europe">
                                <option value="/at">Austria</option>
                                <option value="/cz">Czech Republic</option>
                                <option value="/dk">Denmark</option>
                                <option value="/fi">Finland</option>
                                <option value="/fr">France</option>
                                <option value="/de">Germany</option>
                                <option value="/hu">Hungary</option>
                                <option value="/il">Israel</option>
                                <option value="/it">Italy</option>
                                <option value="/nl">Netherlands</option>
                                <option value="/no">Norway</option>
                                <option value="/ro">Romania</option>
                                <option value="/es">Spain</option>
                                <option value="/sv">Sweden</option>
                                <option value="/ch">Switzerland</option>
                                <option value="/tr">Turkey</option>
                                <option value="/uk">UK/Ireland</option>
                            </optgroup>
                            <optgroup label="Other Eastern Europe">
                                <option value="/ru">Other Eastern Europe</option>
                            </optgroup>
                            <optgroup label="Asia Pacific">
                                <option value="/au">Australia/New Zealand</option>
                                <option value="/in">India</option>
                                <option value="/sg">Singapore</option>
                                <option value="/cn">China: 中文</option>
                                <option value="/jp">Japan: 日本語</option>
                                <option value="/kr">Korea: 한글</option>
                                <option value="/hk">Hong Kong/Taiwan Region</option>
                                <option value="/id">Indonesia</option>
                                <option value="/my">Malaysia</option>
                                <option value="/ph">Philippines</option>
                                <option value="/th">Thailand</option>
                                <option value="/vn">Vietnam</option>
                            </optgroup>
                        </select>
                    </label>
                    <label className="nav-region-dropdown__label" htmlFor="nav-region-dropdown__language">
                        <span>Select a language:</span>
                        <select id="nav-region-dropdown__language" data-placeholder="Choose a Language..." className="nav-region-dropdown__select nav-region-dropdown__language">
                            <option value="AF">Afrikanns</option>
                            <option value="SQ">Albanian</option>
                            <option value="AR">Arabic</option>
                            <option value="HY">Armenian</option>
                            <option value="EU">Basque</option>
                            <option value="BN">Bengali</option>
                            <option value="BG">Bulgarian</option>
                            <option value="CA">Catalan</option>
                            <option value="KM">Cambodian</option>
                            <option value="ZH">Chinese (Mandarin)</option>
                            <option value="HR">Croation</option>
                            <option value="CS">Czech</option>
                            <option value="DA">Danish</option>
                            <option value="NL">Dutch</option>
                            <option value="EN" selected>English</option>
                            <option value="ET">Estonian</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finnish</option>
                            <option value="FR">French</option>
                            <option value="KA">Georgian</option>
                            <option value="DE">German</option>
                            <option value="EL">Greek</option>
                            <option value="GU">Gujarati</option>
                            <option value="HE">Hebrew</option>
                            <option value="HI">Hindi</option>
                            <option value="HU">Hungarian</option>
                            <option value="IS">Icelandic</option>
                            <option value="ID">Indonesian</option>
                            <option value="GA">Irish</option>
                            <option value="IT">Italian</option>
                            <option value="JA">Japanese</option>
                            <option value="JW">Javanese</option>
                            <option value="KO">Korean</option>
                            <option value="LA">Latin</option>
                            <option value="LV">Latvian</option>
                            <option value="LT">Lithuanian</option>
                            <option value="MK">Macedonian</option>
                            <option value="MS">Malay</option>
                            <option value="ML">Malayalam</option>
                            <option value="MT">Maltese</option>
                            <option value="MI">Maori</option>
                            <option value="MR">Marathi</option>
                            <option value="MN">Mongolian</option>
                            <option value="NE">Nepali</option>
                            <option value="NO">Norwegian</option>
                            <option value="FA">Persian</option>
                            <option value="PL">Polish</option>
                            <option value="PT">Portuguese</option>
                            <option value="PA">Punjabi</option>
                            <option value="QU">Quechua</option>
                            <option value="RO">Romanian</option>
                            <option value="RU">Russian</option>
                            <option value="SM">Samoan</option>
                            <option value="SR">Serbian</option>
                            <option value="SK">Slovak</option>
                            <option value="SL">Slovenian</option>
                            <option value="ES">Spanish</option>
                            <option value="SW">Swahili</option>
                            <option value="SV">Swedish </option>
                            <option value="TA">Tamil</option>
                            <option value="TT">Tatar</option>
                            <option value="TE">Telugu</option>
                            <option value="TH">Thai</option>
                            <option value="BO">Tibetan</option>
                            <option value="TO">Tonga</option>
                            <option value="TR">Turkish</option>
                            <option value="UK">Ukranian</option>
                            <option value="UR">Urdu</option>
                            <option value="UZ">Uzbek</option>
                            <option value="VI">Vietnamese</option>
                            <option value="CY">Welsh</option>
                            <option value="XH">Xhosa</option>
                        </select>
                    </label>
                    <button className="nav-region-dropdown__submit">{this.props.submitText}</button>
                </form>
            </nav>
        );
    }
}

export default RegionLanguageSelect;
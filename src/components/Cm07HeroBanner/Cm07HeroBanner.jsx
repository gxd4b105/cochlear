import React from "react";

if (process.env.BROWSER) {
    require("./Cm07HeroBanner.scss");
}


class Cm07HeroBanner extends React.Component {
    render () {

        return (
            /* `${this.props.additionalClass}` */
            <section className={`cm cm-hero-banner ${this.props.additionalClass}`}>
                {/* <% if vars[:path] != false %> */}
                <Link prefetch href={`${this.props.path}`}>
                <a>
                    {/*  <% else %>  */}

                    {/* <% end %>  */}
                    {/* <% if vars[:image] != false %> */}
                    <div className='image intrinsic'>
                        <div className='intrinsic-wrap intrinsic-16x9'>
                            <div className='intrinsic-el img' style={{backgroundImage:'url('+this.props.image+')'}}>
                                <span className='vh'>{this.props.imageAlt}</span>
                            </div>
                        </div>
                    </div>
                    {/* <% end %>  */}

                    <div className='content'>
                        <h1>{this.props.title}</h1>

                        <p>{this.props.description}</p>

                        {/* <% if vars[:path] != false %>  */}
                        <span className='faux-link'>Read more <span className='vh'> about {this.props.title}</span></span>
                        {/* <% end %>  */}
                    </div>
                    {/* <% if vars[:path] != false %>  */}
                </a>
                </Link>
                {/* <% else %>  */}

                {/*  <% end %> */}
            </section>

        );
    }
}

Cm07HeroBanner.defaultProps = {
    title: "CM07 Hero Banner",
    path: "#",
    description:"Aliquam eget ornare nisl. Pellentesque varius magna eu sodales fringilla. Nam feugiat tincidunt orci fringilla pharetra. Aenean a turpis in nunc commodo posuere. Nullam molestie velit leo.",
    image: "http://fed.donlineclients.com/assets/img/placeholder/cm-16x9-l.jpg",
    imageAlt: "Landing page banner alt text",
    additionalClass: "is-large"
}

export default Cm07HeroBanner;
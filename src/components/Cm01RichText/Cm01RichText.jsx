import React from 'react';

class Cm01RichText extends React.Component {




    render() {
        let listElement = /<li>/gi,
            endListElement = /<\/li>/gi;
        let richTextBody = this.props.body.replace(listElement, '<li><p>');
        richTextBody = richTextBody.replace(endListElement, '</p></li>');


        return (
            <div className="cm cm-rich-text" dangerouslySetInnerHTML={{ __html: richTextBody }}>
                {/*
                <p className="intro">Intro paragraph. Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim. Esse ut proident ea Ut dolore proident enim</p>

                <p>Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim. Esse ut proident ea Ut dolore proident enim Duis et exercitation in incididunt nisi in elit culpa deserunt quis ex officia nostrud sint enim anim ullamco labore Excepteur eiusmod cupidatat sint labore consequat in Excepteur est officia cillum nostrud id id proident dolor voluptate ut Duis labore veniam.</p>

                <h2>Ut dolore proident</h2>

                <figure className="is-full">
                    <img src="http://fed.donlineclients.com/assets/img/placeholder/landing-hero.jpg" alt="Placeholder image" />

                        <figcaption>
                            <strong>Image caption</strong>
                            <p>Lorem ipsum - dolor sit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </figcaption>
                </figure>

                <p>Lorem ipsum consequat enim incididunt ea aliqua ut minim anim occaecat cupidatat id eiusmod culpa in velit ut fugiat laboris commodo anim commodo mollit adipisicing sit occaecat eu amet labore qui pariatur sunt sit in est ea in sed dolore pariatur consequat proident esse deserunt nostrud in cillum sunt quis ut id nostrud officia id enim labore esse ut proident.</p>

                <blockquote>
                    &ldquo;Lorem ipsum Ea aliqua consectetur laboris adipisicing voluptate elit cupidatat proident nostrud consequat sit sunt.&rdquo;
                    <footer>John Pullquote from <cite>Publication</cite></footer>
                </blockquote>

                <p>Vivamus posuere facilisis purus a pulvinar. Mauris vel dolor sagittis, posuere tellus sit amet, tempor nisl. Duis bibendum consequat ex, in vehicula nibh. Aenean finibus hendrerit turpis, id porttitor risus ultricies non. Vestibulum condimentum rhoncus mi, sit amet congue sem fermentum pellentesque. </p>

                */}
            </div>
        );
    }
}

Cm01RichText.defaultProps = {
    body: "Landing page title"
};


export default Cm01RichText;

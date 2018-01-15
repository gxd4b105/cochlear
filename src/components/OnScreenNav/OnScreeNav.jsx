import React from 'react';

if (process.env.BROWSER) {
    require("./OnScreenNav.scss");
}

class OnScreeNav extends React.Component {
    render() {


        const children = this.props.children;

        {/*
                <%
                vars = {
                :currentPagePath => '/' + current_page.path,
                :hasLogin => false
            }.deep_merge!(locals)

                def get_menu_classes(lvl, path, checkChildren=false)
                classes = []

                if lvl.path == path
                    classes.push('is-active')
		end

		if !lvl.pages.nil?
			if checkChildren
				classes.push('has-children')
			end

			if dd_nav_isChildActive(path, lvl.pages)
				classes.push('is-active-parent')
			end
		end

		return classes
	end
%> */}

        return (
            <nav className={`nav-onscreen js-onscreen ${this.props.additionalClass}`}>
                <ul className="nav cf">
                    {/*
                    <% data.nav.main.each_with_index do |lvl1, lvl1Index| %>
                    <%
                        lvl1Class = get_menu_classes(lvl1, vars[:currentPagePath])
                    %>
                    */}
                    {React.Children.map(children, (child) => {
                        return  child
                    })}
                </ul>
                {/* <% if vars[:hasLogin] == true %> */}
                    <a href="#" className="icon-button login">Login</a>
                {/* <% end %> */}
            </nav>
        );
    }
}

export default OnScreeNav;


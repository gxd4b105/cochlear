import React from 'react';

class ContentHeader extends React.Component {
    render() {

        return (
            <header className="content-header">
                {/*
                <% if vars[:usePadding] %><div class="l-padding"><% end %>
                <h1><%= vars[:heading] %></h1>
                <% if vars[:subheading] %>
                <%= partial(vars[:subheading][:path], :locals => vars[:subheading][:locals]) %>
                <% end %>
                <% if !vars[:tags].nil? && vars[:tags].length > 0 %>
                <div class="collection-item-tags">
                    <strong>Tagged in:</strong>
                    <ul>
                        <% vars[:tags].each do | item | %>
                        <li><a href="<%= item[:path] %>"><%= item[:title] %></a></li>
                        <% end %>
                    </ul>
                </div>
                <% end %>
                <% if vars[:usePadding] %></div><% end %>
                */}
                <header className="content-header">
                    <h1>{this.props.title}</h1>
                </header>
            </header>
        );
    }
}

ContentHeader.defaultProps = {
    title: "Content Header"
};

export default ContentHeader;

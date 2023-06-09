  import React from 'react'
  import Button from 'elements/Button'
  import BrandIcon from 'parts/IconText'
  
  export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    };

    return (
      <header className="spacing-sm">
        <div className="container"> 
            <nav className="navbar navbar-expand-lg navbar-light">
                <BrandIcon/>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item active${getNavLinkClass("/")}`}>
                        <Button className="nav-link" type="link" href="/">
                            Home
                        </Button>
                    </li>
                    <li className={`nav-item${getNavLinkClass("/browseby")}`}>
                        <Button className="nav-link" type="link" href="/browseby">
                            Browse By
                        </Button>
                    </li>
                    <li className={`nav-item${getNavLinkClass("/stories")}`}>
                        <Button className="nav-link" type="link" href="/stories">
                            Stories
                        </Button>
                    </li>
                    <li className={`nav-item${getNavLinkClass("/agent")}`}>
                        <Button className='nav-link' type='link' href='/agent'>
                            Agents
                        </Button>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
      </header>
    )
  }
  
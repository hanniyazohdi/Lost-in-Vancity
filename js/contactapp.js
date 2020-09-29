const Highlight = ({children, color}) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className="relative z-2">{children}</span>
    </span>
)

const ContactInfo = () => 
<div className="m-auto-ns f3 f3-m f3-l tc w-80-l normal">

    <div className="mb3 mb4-ns">
        Are you a BIPOC business in the greater Vancouver area? We would love to feature you on the website. Send us an email <Highlight color="pink"><a href="mailto:hanniyazohdi80@gmail.com" className="white no-underline">here</a></Highlight> with a photo and description of your business, and it will be up in no time. 
    </div>

    <div className="mb3">
        Comments, questions, concerns? Feel free to shoot us an <Highlight color="yellow"><a href="mailto:hanniyazohdi80@gmail.com" className="white no-underline">email</a></Highlight> and we will get back to you ASAP. In the meantime, check out this <Highlight color="blue"><a href="https://linktr.ee/blacklivesmatter" className="white no-underline">#BlackLivesMatter linktree</a></Highlight> for petitions, fundraisers, and other educational sources.
    </div>

</div>

const NavItem = ({className, href, children, logo}) => (
        <li className={`mh2-ns f6 f4-l tc ${className}`}>
            <a href={href} className='white no-underline'>
                {/* here we check for the logo prop, if we have it we render out our logo, otherwise we just render out our regular navigation text (children prop)*/}
                {logo ? <img src="../images/logofinal.svg" className="db center logo" /> : children}
            </a>
        </li>
)

const Nav = () => (
    <nav className="pt3 pt4-ns mb4 mb0-ns">
        <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
        {menu.map(item => (
            <NavItem {...item} /> 
        ))}
        </ul>
    </nav>
);

const ContactApp = () => (
    <div>

       <div className="min-vh-100 ph4 flex flex-column">
            <Nav />
            <ContactInfo />
       </div>

    </div>
)


ReactDOM.render(<ContactApp/>, document.getElementById('root'));

const Highlight = ({children, color}) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className="relative z-2">{children}</span>
    </span>
)

const Intro = () => 
<div className="m-auto-ns f3 f3-m f3-l tc w-80-l normal">

    <div className="mb3 mb4-ns">
    <Highlight color="aqua">Lost in Vancity</Highlight> is a directory of <Highlight color="blue">Black</Highlight> and <Highlight color="blue">Indigenous</Highlight>-owned places to shop, 
    dine in and <Highlight color="yellow">explore</Highlight>, in Vancouver, British Columbia. 
    </div>

    <div>
    From museums and galleries, to <Highlight color="pink">vegan restaurants</Highlight> and <Highlight color="pink">cute cafes</Highlight>, 
    Vancouver is the gift that keeps on giving. <Highlight color="yellow">Support BIPOC!</Highlight>
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

const Overlay = ({showInfo, title, link, description}) => (
    <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
        style={{
        // we do a test to see whether our showinfo state is true
        // transform is none if true, otherwise -100%
        transform: showInfo ? 'none' : 'translateY(-100%)'
        }}>
        <div>
            <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">
            { link ? <a href={link}>{title}</a> : title }
            </h1>
            <p className="lh-title lh-copy-ns mv0 black f6 measure-1">{description}</p>
        </div>
    </div>
)

// we can also create components as classes, which give us more advanced functionality and features
// such as the component lifecycle and react's in-built state

class Attraction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showInfo: false
        };
        // here we tell our toggleinfo about this by using bind
        // otherwise things like setState will not work
        this.toggleInfo = this.toggleInfo.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }

    toggleInfo(){
        this.setState((prevState, props) => ({
            // here we invert our showinfo boolean by using the previous state and the ! mark
            showInfo: !prevState.showInfo 
        }));
    }

    closeInfo(){
        // here we use setState the usual way because we don't need access to the previous state, 
        // we're just force setting the showInfo to be false
        this.setState(() => ({
            showInfo: false
        }));
    }

    render(){
        // destructuring is a shorter way of saying const title = this.props.title
        const {title, link, description, image, className} = this.props;
        const {showInfo} = this.state;

        return(
            <div className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
            onMouseOver={this.toggleInfo}
            onMouseOut={this.closeInfo}>

            {/* here we remember to  pass down all of our props and state */}
            <div className="relative">
                <Overlay {...this.props} {...this.state}/>
                
            <img src={`../images/${image}`} className="db"></img>
            </div>

        </div>
        );
    }
}

const App = () => (
    <div>

       <div className="min-vh-100 ph4 flex flex-column">
            <Nav />
            <Intro />
       </div>

       <div className="flex flex-wrap container">
            {attractions.map(attraction => 
                <Attraction {...attraction}/>
            )}
       </div>

    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<p className="headerLogo">developed<span>by</span>dave</p>
				<div className="headerMain txt absoluteCenter">
					<h1 className="headerTitle">Front end developer.</h1>
					<p className="headerSlogan">SPACEHOLDER FOR HILARIOUS YET INSIGHTFUL TAGLINE</p>
				</div>
			</header>
		);
	}
}


class Skill extends React.Component {
	render() {
		return (
			<figure>
				<img src={this.props.src} />
				<figcaption>{this.props.name}</figcaption>
			</figure>
		)
	}
}


class SkillsetSection extends React.Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{ imageUrl: "assets/WebTechnologies/html5-logo.png", name: "HTML5" },
				{ imageUrl: "assets/WebTechnologies/css3-logo.png", name: "CSS3" },
				{ imageUrl: "assets/WebTechnologies/es6-logo.png", name: "Javascript" },
				{ imageUrl: "assets/WebTechnologies/jquery-logo.png", name: "jQuery" },
				{ imageUrl: "assets/WebTechnologies/coffeescript-logo.png", name: "Coffeescript" },
				{ imageUrl: "assets/WebTechnologies/react-logo.png", name: "ReactJS" },
				{ imageUrl: "assets/WebTechnologies/bootstrap-logo.png", name: "Bootstrap" },
				{ imageUrl: "assets/WebTechnologies/sass-logo.png", name: "Sass" },
				{ imageUrl: "assets/WebTechnologies/gulp-logo.jpg", name: "GulpJS" },
				{ imageUrl: "assets/WebTechnologies/git-logo.png", name: "GIT" },
				{ imageUrl: "assets/WebTechnologies/node-logo.jpg", name: "NodeJS" },
				{ imageUrl: "assets/WebTechnologies/mongodb-logo.png", name: "MongoDB" }
			]
		}
	}

	render() {
		const SKILL_LIST = this._getSkills();
		return (
			<section className="skillsetSection">
				<p>I am a self-taught front-end web developer with a great deal of enthusiasm and am looking forward to taking my first steps in a professional role. I love seeing static designs come alive with HTML5 snd CSS3, and problem-solving using clean, elegant and efficient javascript.</p>
				<hr />
				<div className="skillset">{SKILL_LIST}</div>
			</section>
		);
	}

	_getSkills() {
		return this.state.skills.map((skill) => {
			return ( <Skill
				name={skill.name}
				src={skill.imageUrl} />
			);
		});
	}
}


class AboutMe extends React.Component {
	render() {
		return (
			<section className="aboutMe">
				<ul id="carousel">
					<li className="slide slide1">
						<div className="slideRow slide1Pic"></div>
						<div className="slideRow">
							<h4>Hello there.<br/>I'm Dave Dronsfield</h4>
							<p>I'm looking for a new position in an exciting company seeking driven people, who love what they do.</p>
							<p>Would this face suit a desk near you?</p>
						</div>
					</li>

					<a className="sweetlands" href="http://daviddronsfield.github.io/funQuiz/index.html" target="_tab">
						<li className="slide slide2">
							<div className="slideRow">
								<img className="sweetlandsLogo" src="assets/logo.svg" alt="The Sweetlands Quiz logo" />
							</div>
							<div className="slideRow">
								<h4>Which Sweet Lands character are you?</h4>
								<img className="sweetlandsCharacter" src="assets/cupcake.svg" alt="A graphic showing a Sweetlands character" />
							</div>
						</li>
					</a>

					<li className="slide slide3">
						<div className="slide3Text">
							<p>Interested in hiring me? I'd love to hear from you.</p>
							<a href="mailto:d.a.dronsfield@gmail.com?subject=Email Via Website">email me</a>
						</div>
					</li>

					<li className="slide slide4">
						<div className="slideRow slide1Pic"></div>
						<div className="slideRow">
							<h4>Hello there.<br/>I'm Dave Dronsfield</h4>
							<p>I'm looking for a new position in an exciting company that wants to attract driven people, who love what they do.</p>
							<p>Would this face suit a desk near you?</p>
						</div>
					</li>
				</ul>
			</section>
		);
	}
}


class Widget extends React.Component {
	render() {
		return (
			<section className="widgetContainer">
				<div id="widget">
					<figure className="front">
						<div className="widgetCopy">SELECT FORMAT</div>
					</figure>
					<figure className="bottom">
						<a href="assets/cv/CurriculumVitae.docx"><img src="assets/cv/word-icon.png" /></a>
						<a href="assets/cv/CurriculumVitae.pages"><img src="assets/cv/pages-icon.png" /></a>
						<a href="assets/cv/CurriculumVitae.pdf" target="_tab"><img src="assets/cv/pdf-icon.png" /></a>
					</figure>
				</div>
			</section>
		);
	}
}


class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="row footer-stuff">
					<div className="columns three info">
						<div className="centerInfo">
							<strong>FIND ME ON</strong>
							<ul>
								<li>
									<img className="githubLogo" src="assets/githubLogo.svg" />
									<a className="furtherInfo" href="https://github.com/DavidDronsfield">GitHub</a>
								</li>
								<li>
									<img className="linkedinLogo" src="assets/linkedinLogo.svg" />
									<a className="furtherInfo" href="https://www.linkedin.com/in/david-dronsfield-021442a5?trk=hp-identity-name">LinkedIn</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="columns five info">
						<strong>GET IN TOUCH</strong>
						<ul>
							<li>
								<img className="emailLogo" src="assets/emailLogo.png" />
								<a className="furtherInfo" href="mailto:d.a.dronsfield@gmail.com?subject=Email Via Website">d.a.dronsfield@gmail.com</a>
							</li>
							<li>
								<img className="iphoneLogo" src="assets/iphoneLogo.png" />
								<a className="furtherInfo" href="tel:+447599199429">07599199429</a>
							</li>
						</ul>
					</div>
					<div className="cv columns four">
						<strong>DOWNLOAD MY CV</strong>
						<Widget />
					</div>
				</div>
			</footer>
		);
	}
}


class SectionContainer extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="contentContainer">
					<div className="content">
						<SkillsetSection />
					</div>
					<AboutMe />
				</div>
				<Footer />
			</div>
		)
	}
}


ReactDOM.render(<SectionContainer />, document.getElementById("target"));
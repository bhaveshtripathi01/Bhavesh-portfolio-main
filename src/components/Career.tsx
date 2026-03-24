import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
           <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Project blaze</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
       Engineered and deployed full stack web application features using React.js and Node.js, reducing page load time by
30% through targeted code refactoring and query optimization.
 Designed and integrated RESTful APIs with Express.js, enabling seamless data exchange between front-end and
back-end services across 3+ application modules.
 Optimized application performance through code refactoring and database query optimization, achieving 20% faster
load times.
            </p>
          </div>
        </div>
      </div>

  );
};

export default Career;

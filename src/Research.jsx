import React from 'react';
import './App.css';

export default function Research() {
  const papers = [
    {
      title: "Employment outcomes for individuals with intellectual and developmental disabilities: A literature review",
      author: "Hussain A. Almalky",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0190740919308503"
    },
    {
      title: "Comparing employment, employment services, and employment goals in propensity-matched samples of people with intellectual and developmental disabilities with and without autism",
      author: "Michael D. Broda (VCU)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10961952/"
    },
    {
      title: "Employment and choice-making for adults with intellectual disability, autism, and down syndrome",
      author: "Kelsey L. Bush, Marc J. Tassé (The Ohio State University)",
      url: "https://nisonger.osu.edu/wp-content/uploads/2019/01/Bush-Tass%C3%A9-2017-RIDD.pdf"
    },
    {
      title: "Choice Making and Individuals with Significant Disabilities",
      author: "Jacob Wolf, Kristin Joannou (University of Kansas)",
      url: "https://digitalshowcase.lynchburg.edu/cgi/viewcontent.cgi?article=1101&context=lc-journal-of-special-education"
    },
    {
      title: "A practitioner’s guide to emphasizing choice-making opportunities in behavioral services provided to individuals with intellectual and developmental disabilities",
      author: "Adithyan Rajaraman, Jennifer L. Austin, Holly C. Gover",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9897779/"
    },
    {
      title: "Kansas Inservice Training System: Resource 933",
      author: "KSDE TASN",
      url: "https://ksdetasn.org/resources/933"
    }
  ];

  return (
    <div className="research-container">
      <div className="research-header">
        <h2>Research & Citations</h2>
        <p>Foundational studies supporting our mission for inclusive employment.</p>
      </div>

      <div className="citations-list">
        {papers.map((paper, index) => (
          <div key={index} className="citation-card">
            <a href={paper.url} target="_blank" rel="noreferrer" className="citation-title">
              {paper.title}
            </a>
            <p className="citation-author">by {paper.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
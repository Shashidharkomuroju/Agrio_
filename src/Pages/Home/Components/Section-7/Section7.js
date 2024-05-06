import React from 'react'

const Section7 = () => {
  return (
    <section className='section7'>
        <div className="section7-content">
            <h5>From the Blog</h5>
            <h2>News & Articles</h2>
        </div>
        <div className="section7-cards">
            <div className="card1">
                <img src={require("../../../../assets/team.png")} alt="" />
                <div className="card">
                    <h5>Kevin Smith</h5>
                    <p>Farmer</p>
                </div>
            </div>
            <div className="card2">
                <img src={require("../../../../assets/team2.png")} alt="" />
                <div className="card1">
                    <h5>Jessica Brown</h5>
                    <p>Farmer</p>
                </div>
            </div>
            <div className="card3">
                <img src={require("../../../../assets/team3.png")} alt="" />
                <div className="card2">
                    <h5>David Martin</h5>
                    <p>Farmer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section7
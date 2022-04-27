import React from 'react'
import './middlebar.css'

function Middlebar() {
  return (
    <div className="middleBar">
        <div className="middleBarCont">
          <div className="middleBarMain">
            Welcome
          </div>
          <div className="MiddleBarMainText">
          qyubqwdiuciuwhduiqwvu buqvhoiqoi ohwuqj uhwguinvj uiwhefunn uwhegiwnvi niuhwiugho ioiuhvwioejio nobviw
          fwhebwjen iwjiowjjoi jiowrijwri ho nvkniu hdknslaeu objk abilhuijui hiueah i nahlih sgnsiuh ui ub ueis hi
           ahbh bnakjn konoian lni oiahoan iaenoi;a ian oian oin lknijnoiaelmm kj
          </div>
        </div>

        <div className="middleBarDetails">
          <div className="middleBarMainDet">
            <div className="middleBarMainDetails">
              <img
                className="middleBarImg"
                src={process.env.PUBLIC_URL + '/images/gym.jpg'}
                alt="image here"
              />
              <span className="middleBarCaption">
                Best Interiors
              </span>
              <span className="middleBarCaption1">
                ofheol doihvouiwenj uhvoiuWHL NUHBUWeh
                ihuibhsio huhb idhuowrhiofh  uhwro hvehy
              </span>
            </div>
            <div className="middleBarMainDetails">
              <img
                className="middleBarImg"
                src={process.env.PUBLIC_URL + '/images/event.jpg'}
                alt="image here"
              />
              <span className="middleBarCaption">
                Delicious Food
              </span>
              <span className="middleBarCaption1">
                ofheol doihvouiwenj uhvoiuWHL NUHBUWeh
                ihuibhsio huhb idhuowrhiofh  uhwro hvehy
              </span>
            </div>

            <div className="middleBarMainDetails">
              <img
                className="middleBarImg"
                src={process.env.PUBLIC_URL + '/images/restaurant.jpg'}
                alt="image here"
              />
              <span className="middleBarCaption">
                Specials
              </span>
              <span className="middleBarCaption1">
                ofheol doihvouiwenj uhvoiuWHL NUHBUWeh
                ihuibhsio huhb idhuowrhiofh  uhwro hvehy
              </span>


            </div>
          </div>
        </div>
    </div>
  )
}

export default Middlebar

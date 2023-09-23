import React from "react";
import { ButtonFilledNA } from "../../components/ButtonFilledNA";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <img className="productschoolosx" alt="Productschoolosx" src="/img/productschoolos2x-1.png" />
          <img className="productanswrx" alt="Productanswrx" src="/img/productanswr2x-1.png" />
          <img className="productcodrx" alt="Productcodrx" src="/img/productcodr2x-1.png" />
          <img className="line" alt="Line" src="/img/line-3.svg" />
          <p className="WHO-WE-ARE">
            <span className="text-wrapper">WHO</span>
            <span className="span"> WE ARE ?</span>
          </p>
          <div className="frame">
            <img className="img" alt="Line" src="/img/line-3.svg" />
            <img className="line-2" alt="Line" src="/img/line-3.svg" />
            <p className="OUR-POPULAR">
              <span className="text-wrapper">OUR </span>
              <span className="text-wrapper-2">POPULAR INSTRUCTORS</span>
            </p>
          </div>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur. Id lacus enim ultrices turpis scelerisque nulla. Leo aliquam mi
            justo pulvinar a congue et. Nec amet ac quam nisi tristique suscipit quam quis. Turpis maecenas quis dui sed
            tortor sagittis vel sed facilisis.
          </p>
          <div className="group">
            <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-2.png" />
            <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-3.png" />
            <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-4.png" />
            <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-5.png" />
            <img className="ellipse-6" alt="Ellipse" src="/img/ellipse-6.png" />
            <img className="ellipse-7" alt="Ellipse" src="/img/ellipse-7.png" />
            <img className="ellipse-8" alt="Ellipse" src="/img/ellipse-8.png" />
          </div>
          <div className="frame-2" />
          <img className="surface-laptop" alt="Surface laptop" src="/img/surface-laptop-studio.png" />
          <p className="your-pathway-to">YOUR PATHWAY TO SMARTER LEARNING</p>
          <p className="text-wrapper-3">Engage, learn, and grow with our AI Tutor powered by GPT-4, “Compass”</p>
          <ButtonFilledNA
            className="enabled-button"
            labelTextClassName="button-filled-n-a-enabled"
            text="Ask Compass"
          />
          <div className="frame-3" />
          <p className="text-wrapper-4">@2023 TutorCompass Inc. All Rights Reserved.</p>
          <div className="frame-4">
            <div className="div-wrapper">
              <div className="text-wrapper-5">About us</div>
            </div>
            <div className="group-wrapper">
              <div className="group-2">
                <div className="text-wrapper-5">Terms of Service</div>
              </div>
            </div>
            <div className="text-wrapper-6">Privacy Policy</div>
            <div className="text-wrapper-6">Cookie Notice</div>
          </div>
          <img className="logo" alt="Logo" src="/img/logo-1-1-1.png" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="nav-bar">
            <div className="navbar">
              <div className="text-wrapper-7">Home</div>
              <div className="text-wrapper-8">About</div>
              <div className="text-wrapper-9">Courses</div>
              <div className="text-wrapper-10">Contact</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-11">Sign In</div>
              </div>
            </div>
            <img className="logo-2" alt="Logo" src="/img/logo-1-1.png" />
          </div>
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="rectangle-2" />
            <img
              className="kisspng-student"
              alt="Kisspng student"
              src="/img/kisspng-student-reading-book-education-college-high-school-stude.png"
            />
            <p className="lifelong-learning-is">
              <span className="text-wrapper-12">Lifelong Learning Is A </span>
              <span className="text-wrapper-13">New Trend</span>
            </p>
            <p className="text-wrapper-14">
              We are dedicated to providing you with a sublime learning experience that is both immersive and
              interactive.
            </p>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-15">Join Now</div>
          </div>
        </div>
        <div className="frame-6">
          <div className="overlap-4">
            <img className="x" alt="X" src="/img/x0020-1.png" />
            <div className="text-wrapper-16">Discover</div>
            <p className="text-wrapper-17">Choose the faculty of your choice to learn from.</p>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-18">Learn</div>
            <p className="text-wrapper-19">Unlock your potential with personalized learning experiences.</p>
            <img className="online-learning" alt="Online learning" src="/img/online-learning-concept.svg" />
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-20">24x7 Doubt Support</div>
            <p className="text-wrapper-21">No doubt is a small doubt. We are always here to clear your concepts.</p>
            <img className="group-3" alt="Group" src="/img/group.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

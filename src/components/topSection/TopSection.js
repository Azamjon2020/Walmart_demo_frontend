import React from "react";
import "./TopSection.css";
function TopSection() {
  return (
    <div className="topSection">
      <div className="topSectionWrapper">
        <div className="topSectionItem">
          <div className="top__section__pro">
            <h3>Reserve pickup or delivery</h3>
            <button>See times</button>
          </div>
          <div className="top__section__view">
            <div>
              <h3>Popular services</h3>
              <span>View All</span>
            </div>
            <div>
              <ul>
                <li>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-64d0/k2-_f0d316e7-25a9-4436-a60d-2efd62702aa3.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt=""
                  />
                  Pharmacy
                </li>
                <li>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-15ce/k2-_ad628e1a-53e3-4f61-9359-a2660f4792af.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt=""
                  />
                  Auto Care <br /> Center
                </li>
                <li>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-7115/k2-_72d8477e-8b41-404f-b891-c6ee5b6e68ff.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt=""
                  />
                  Custom Cakes
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="topSectionItem">
          <h3>Top-trending toys</h3>
          <div className="top__section__grid">
            <img
              src="https://i5.walmartimages.com/asr/ac3e7423-74d9-4325-a46e-57296f20d05b.25f7559542f3e2523bbb2b61a9162f50.jpeg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/cc1f53fa-6433-473e-a150-7fb38edfb59d.f41fc132a10654e31d626488a9d2cd61.jpeg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/c19dddc6-999f-4153-8a6a-bf4bfa89bda0.17be906b733dcae6294a16b9d256baa1.jpeg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/8f23315b-cdf0-4cd0-b184-56a997436f53.c647c036ac68daa90a932f43c718367b.jpeg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
              alt=""
            />
          </div>
        </div>
        <div className="topSectionItem">
          <h3>Valentine’s Day finds</h3>
          <div className="top__section__grid">
            <div>
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-7a76/k2-_6068606a-b26b-45d8-94c8-f71d68741324.v1.jpg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
                alt=""
              />
              <p>Shop all</p>
            </div>
            <div>
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-45d4/k2-_c1486842-2347-4235-a47b-2933f2aed80e.v1.jpg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
                alt=""
              />
              <p>Candy from $1</p>
            </div>
            <div>
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-2cdd/k2-_dbad7f27-9619-40a6-b8af-8fc44fd36dc3.v1.jpg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
                alt=""
              />
              <p>Kid's faves from $1</p>
            </div>

            <div>
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-2f5a/k2-_79e1ef27-77a1-4f03-898a-fd4b00f5f17c.v1.jpg?odnHeight=112&odnWidth=112&odnBg=FFFFFF"
                alt=""
              />
              <p>Cards from $1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="topSectionbottom">
        <img
          src=" https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-white.svg"
          alt=""
        />
        <h4>
          Members get free shopping* with no order minimum! *Restrictions apply.
        </h4>
        <span>Try free 30-day trial</span>
      </div>
      <h2 className="topSectionbottom__heading">Build your cart</h2>
    </div>
  );
}

export default TopSection;

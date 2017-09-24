import React, { PureComponent } from 'react';

export default class Content extends PureComponent {
  componentWillMount() {
    // $(document).ready(function () {
    //   /*
    //   var defaults = {
    //       containerID: 'toTop', // fading element id
    //     containerHoverID: 'toTopHover', // fading element hover id
    //     scrollSpeed: 1200,
    //     easingType: 'linear' 
    //     };
    //   */

    //   $().UItoTop({ easingType: 'easeOutQuart' });

    // });
  }
  render() {
    return <div className="content ">
      <div className="about-section ">
        <div className="container ">
          <h3>关于我们</h3>
          <div className="about-grids ">
            <div className="col-md-5 about-img wow bounceInRight animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <img src="images/img1.jpg " className="img-responsive " alt="/ " />
            </div>
            <div className="col-md-7 about-grid wow bounceInLeft animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <p>关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们</p>
              <p>关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们.
						</p>

            </div>
            <div className="clearfix "></div>
          </div>
        </div>
      </div>
      <div className="service-section ">
        <div className="container ">
          <h3>提供的服务</h3>
          <div className="service-grids ">
            <div className="col-md-4 service-grid wow bounceInLeft animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <img src="images/icon1.png " className="img-responsive " alt="/ " />
              <h4>服务一</h4>
              <p>服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一服务一</p>
            </div>
            <div className="col-md-4 service-grid wow fadeInUpBig animated animated " data-wow-delay="0.4s ">
              <img src="images/icon2.png " className="img-responsive " alt="/ " />
              <h4>服务二</h4>
              <p>服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二服务二</p>
            </div>
            <div className="col-md-4 service-grid wow bounceInRight animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <img src="images/icon3.png " className="img-responsive " alt="/ " />
              <h4>服务三</h4>
              <p>服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三服务三</p>
            </div>
            <div className="clearfix "></div>
          </div>
        </div>
      </div>
      <div className="work-section wow bounceIn animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
        <div className="container ">
          <h3>技术交流</h3>
          <div className="latest-grids ">
            <div className="latest-grid1 ">
              <div className="col-md-3 latest-grid work ">
                <a href="images/img2.jpg " className="swipebox ">
                  <img src="images/img2.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img3.jpg " className="swipebox ">
                  <img src="images/img3.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img4.jpg " className="swipebox ">
                  <img src="images/img4.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img5.jpg " className="swipebox ">
                  <img src="images/img5.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a></div>
              <div className="clearfix "></div>
            </div>
            <div className="latest-grid2 ">
              <div className="col-md-3 latest-grid work ">
                <a href="images/img6.jpg " className="swipebox ">
                  <img src="images/img6.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img7.jpg " className="swipebox ">
                  <img src="images/img7.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img8.jpg " className="swipebox ">
                  <img src="images/img8.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="col-md-3 latest-grid work ">
                <a href="images/img9.jpg " className="swipebox "><img src="images/img9.jpg " className="img-responsive " alt="/ " />
                  <div className="textbox ">
                    <img src="images/magnify.png " className="img-responsive " alt="/ " />
                  </div>
                </a>
              </div>
              <div className="clearfix "></div>
            </div>
            <div className="clearfix "></div>
          </div>
        </div>
      </div>
      <div className="news-section ">
        <div className="container ">
          <h3>自主创业</h3>
          <div className="news-grids ">
            <div className="col-md-4 news-grid wow bounceInLeft animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <img src="images/img10.jpg " className="img-responsive " alt="/ " />
              <h4><a href="# ">我的产品</a></h4>
              <p className="date ">2017年9月10日 <a href="# ">5条评论</a></p>
              <p>我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品我的产品</p>
              <a href="# " className="button hvr-shutter-in-vertical ">查看更多</a>
            </div>
            <div className="col-md-4 news-grid wow fadeInDown Big animated animated " data-wow-delay="0.4s ">
              <img src="images/img11.jpg " className="img-responsive " alt="/ " />
              <h4><a href="# ">我的设备</a></h4>
              <p className="date ">2017年9月10日 <a href="# ">0条评论</a></p>
              <p>我的设备我的设备我的设备我的设备我的设备我的设备我的设备我的设备我的设备我的设备我的设备我的设备 </p>
              <a href="# " className="button hvr-shutter-in-vertical ">查看更多</a>
            </div>
            <div className="col-md-4 news-grid wow bounceInRight animated " data-wow-delay="0.4s " style={{ visibility: 'visible', animationDelay: '0.4s' }}>
              <img src="images/img12.jpg " className="img-responsive " alt="/ " />
              <h4><a href="# ">我的自白</a></h4>
              <p className="date ">2017年9月10日 <a href="# ">140条评论</a></p>
              <p>我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白我的自白</p>
              <a href="# " className="button hvr-shutter-in-vertical ">查看更多</a>
            </div>
            <div className="clearfix "></div>
          </div>
        </div>
      </div>
    </div>
  }
}
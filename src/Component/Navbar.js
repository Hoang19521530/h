import React ,{Component} from 'react';
class Navbar extends Component {
    render(){
      return (
        <nav>     
            <div id='parent-with-flex-direction-row'>
                <div id='logo'>
                      VietTraveller
                </div>
                <div class="child">
                    <ul>
                        <li><a href='#'>Trang chủ</a></li>
                        <li><a href='#'>Kinh nghiệm du lịch</a></li>
                        <li><a href='#'>Khám phá Việt Nam</a></li>  
                        <li><a href='#'>Giới thiệu</a>
                            <ul class="sub-menu">
                                <li><a href="#">Tông quan</a></li>
                                <li><a href="#">Liên hệ</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <div id='account'>
                    <a href='#'>Account</a>
                </div>     
            </div>
        </nav>);
  }
};

export default Navbar;
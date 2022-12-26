import React, {Component} from 'react';
class Footer extends Component {
    render(){
        return(
            <div class="footer">
                    <div class="footerlogo">
                        <h1>VietTraveller</h1>
                    </div>
                    <div class="footercontent">
                        <div className="foot1">
                            <h2 class="contentheader1">Trang web preview du lịch Việt Nam</h2>
                            <ul>
                                <li><a href='#'>Tap chí du lịch</a></li>
                                < li><a href='#'>Cẩm nang du lịch</a></li>
                            </ul>
                        </div>
                        <div className="foot2">
                            <h2 class="contentheader2">Chính sách và quy định</h2>
                            <ul>
                                <li><a href='#'>Điều khoản và điều kiện</a></li>
                                <li><a href='#'>Quy định về xác nhận thông tin</a></li>
                                <li><a href='#'>Chính sách bảo mật thông tin</a></li>
                                <li><a href='#'>Quy chế hoạt động</a></li>
                            </ul>
                        </div>
                        <div class="footimg">
                            <h2>Về chúng tôi</h2>
                                <div class="footicon">
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-twitter-square"></i></a>
                        
                                </div>
                        </div>
                    </div>
                   

            </div>
            );
        }
}
export default Footer
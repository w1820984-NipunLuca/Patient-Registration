import { Footer as FooterLink, Link } from 'govuk-react';
import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <FooterLink>
                <Link href="#">Terms and conditions </Link>
                <Link href="#">Contact us </Link>
            </FooterLink>
        </div>
    )
  }
}
 
export default Footer;

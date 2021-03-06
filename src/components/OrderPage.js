import React from 'react';

import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

export default function OrderPage(props) {
  //
  console.log(props.children);
  return (
    <div className="OrderPageLayout">
      <nav className="blue">
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">
            Galvanize Delivers
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <a href="order.html">Order Delivery</a>
            </li>
          </ul>

          <a href="order.html" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <main id="pageContent">
        <div className="container">
          <div className="row">
            <section className="col l7 s12">
              <h4>Menu</h4>
              <div id="menuitems">
                <MenuComponent items={props.menuItems} />
              </div>
            </section>

            <section className="col l5 s12">
              <h4>Order</h4>
              <OrderTableComponent items={props.orderItems} />
              <OrderFormComponent item={props.customerInfo} />

              {/* {props.orderItems}

              {props.customerInfo} */}
            </section>
          </div>
        </div>
      </main>
      <footer id="pageFooter" className="page-footer blue">
        <div className="container">
          <div id="pageFooter-tagLine" className="white-text">
            <span>Galvanize Delivers</span>
            <span>Find Dining, Delivered.</span>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div>© 2017 Galvanize Delivers</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { ButtonContainer2 } from "./Styles";
import { Link } from "react-router-dom";
import { ModalContainer } from "./Styles";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-2"
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: Rp. {price}</h5>
                      <Link to="/" className="mr-3">
                        <ButtonContainer2 onClick={() => closeModal()}>
                          Continue Shopping
                        </ButtonContainer2>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer2 cart onClick={() => closeModal()}>
                          Go to Cart
                        </ButtonContainer2>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

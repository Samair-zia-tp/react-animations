import React from "react";
import { CSSTransition, Transition } from "react-transition-group";

import "./Modal.css";

// we can set different timings for entering and exiting the animation

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      //one way of adding trunck of classes
      // classNames='fade-slide' // clasname is up to us, it itslef add these classes as per the state of the tranisition - fade-slide-enter, fade-slide-enter-active, fade-slide-exit, fade-slide-exit-active
      //second way our own custom classes for every state
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed'
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;

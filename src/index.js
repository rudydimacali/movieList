import FormContainer from "./js/components/container/FormContainer";
import App from "./js/components/container/App";
import React, { Component } from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("movie-list");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

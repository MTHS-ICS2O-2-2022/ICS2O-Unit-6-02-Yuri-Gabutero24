// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //process
  if (localStorage.cookies) {
    localStorage.cookies = Number(localStorage.cookies) + 1
  } else {
    localStorage.cookies = 1
  }

  //output
  document.getElementById('score').innerHTML = "You have " + localStorage.cookies + " cookies!"
}
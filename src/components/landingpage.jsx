import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Jumbotron,
  Container,
  Carousel,
  Card,
  CardDeck,
  CardColumns,
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BiDollar, BiPaperPlane } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import $ from "jquery";
import "../index.css";
const LandingPage = () => {
  $(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $("#stars li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            $(this).removeClass("hover");
          });
      });

    /* 2. Action to perform on click */
    $("#stars li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star");

      for (var i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
      }

      for (var i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }

      // JUST RESPONSE (Not needed)
      var ratingValue = parseInt(
        $("#stars li.selected").last().data("value"),
        10
      );
      var msg = "";
      if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
      } else {
        msg =
          "We will improve ourselves. You rated this " +
          ratingValue +
          " stars.";
      }
      responseMessage(msg);
    });
  });

  function responseMessage(msg) {
    $(".success-box").fadeIn(200);
    $(".success-box div.text-message").html("<span>" + msg + "</span>");
  }
  const ratingChanged = (rating) => {
    alert(`You have Given ${rating} Stars`);
  };
  return (
    <div>
      <Grid contained>
        <Grid
          contained
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            backgroundColor: "whitesmoke",
          }}
        >
          <h1
            style={{ textAlign: "center", color: "black", marginTop: "30px" }}
          >
            <strong>SELLERS</strong>
          </h1>
          <hr />
          <Navbar bg="light" variant="dark">
            <Nav className="mx-auto">
              <Nav.Link href="/products" style={{ color: "black" }}>
                T-Shirts
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "black" }}>
                Hoodies
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "black" }}>
                Products
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "black" }}>
                Albums
              </Nav.Link>
              <Nav.Link href="/products" style={{ color: "black" }}>
                <AiFillShopping size="1rem" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Grid>
      </Grid>
      <Grid contained style={{ marginTop: "10px" }}>
        <Grid contained>
          <CardDeck className="card">
            <CardColumns>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/kiyw9e80/jacket/5/j/p/m-1355807-001-under-armour-original-imafym3dbgrz2fwa.jpeg?q=50"
                />
                <Card.Body>
                  <h2>Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 7000 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
                />
                <Card.Body>
                  <h2>Denim Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 600 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
                />
                <Card.Body>
                  <h2> Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 800 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </CardColumns>
            <Card style={{ width: "50%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
              />
              <Card.Body>
                <h2>Black Jacket</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 670 Pkr</p>

                <Button variant="info" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "50%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
              />
              <Card.Body>
                <h2> Jacket</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 900 Pkr</p>

                <Button variant="info" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "50%" }}>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0268/9715/4090/products/IMG_3010copy_720x.jpg?v=1607344521"
              />
              <Card.Body>
                <h2>Green Jacket</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 800 Pkr</p>

                <Button variant="info" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "50%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
              />
              <Card.Body>
                <h2>Black Jacket</h2>
                <section class="rating-widget">
                  <div class="rating-stars text-center">
                    <ul id="stars">
                      <li class="star" title="Poor" data-value="1">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="star" title="Fair" data-value="2">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Good" data-value="3">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="Excellent" data-value="4">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                      <li class="star" title="WOW!!!" data-value="5">
                        <i class="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="success-box">
                    <div class="clearfix"></div>
                    <img
                      alt="tick image"
                      width="32"
                      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <div class="text-message"></div>
                    <div class="clearfix"></div>
                  </div>
                </section>
                <p>RS : 67000 Pkr</p>

                <Button variant="info" className="cardButton">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
            <CardColumns>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
                />
                <Card.Body>
                  <h2>Black Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 67000 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
                />
                <Card.Body>
                  <h2>Black Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 67000 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "50%" }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim1.flixcart.com/image/800/960/k01b8280/jacket/a/g/r/l-leather-jacket-black-l-zeppi-original-imaf9g68cwnatgnk.jpeg?q=50"
                />
                <Card.Body>
                  <h2>Black Jacket</h2>
                  <section class="rating-widget">
                    <div class="rating-stars text-center">
                      <ul id="stars">
                        <li class="star" title="Poor" data-value="1">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star" title="Fair" data-value="2">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Good" data-value="3">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="Excellent" data-value="4">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                        <li class="star" title="WOW!!!" data-value="5">
                          <i class="fa fa-star fa-fw"></i>
                        </li>
                      </ul>
                    </div>

                    <div class="success-box">
                      <div class="clearfix"></div>
                      <img
                        alt="tick image"
                        width="32"
                        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                      />
                      <div class="text-message"></div>
                      <div class="clearfix"></div>
                    </div>
                  </section>
                  <p>RS : 67000 Pkr</p>

                  <Button variant="info" className="cardButton">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </CardColumns>
          </CardDeck>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;

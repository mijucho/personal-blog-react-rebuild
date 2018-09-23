import React from "react";

const BlogDetail = props => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-top
        "
      id="blogDetail"
    >
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Xero Invoice Reducer</p>
                <p class="subtitle">Create summarised invoices with ease</p>
                <figure id="blogDetailImg" class="image is-4by3">
                  <a
                    href="https://github.com/leslie-alldridge/xero-duplicate-invoice-reducer"
                    target="_blank"
                  >
                    <img src="/duplicate.png" />
                  </a>
                </figure>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Xero Bulk Voiding Tool</p>
                <p class="subtitle">Void invoices in bulk</p>
                <figure id="blogDetailImg" class="image is-4by3">
                  <a
                    href="https://github.com/leslie-alldridge/xero-bulk-void-invoice-tool-v1"
                    target="_blank"
                  >
                    <img src="/void2.png" />
                  </a>
                </figure>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">BackPack Tracker</p>
                <p class="subtitle">Keep track of belongings with ease</p>
                <figure id="blogDetailImg" class="image is-4by3">
                  <a
                    href="https://backpack-tracker.herokuapp.com/"
                    target="_blank"
                  >
                    <img src="/start.png" />
                  </a>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="container is-fluid">
        <div id="symbols" class="notification">
          <figure onClick={props.showHTML} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/html2.png" />
            <div class="textHide">
              <p class="textInfo">HTML5</p>
            </div>
          </figure>
          <figure onClick={props.showCSS} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/css2.png" />
            <div class="textHide">
              <p class="textInfo">CSS3</p>
            </div>
          </figure>
          <figure onClick={props.showReact} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/react2.png" />
            <div class="textHide">
              <p class="textInfo"> React</p>
            </div>
          </figure>
          <figure onClick={props.showNode} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/node2.png" />
            <div class="textHide">
              <p class="textInfo">NodeJS</p>
            </div>
          </figure>
          <figure onClick={props.showPython} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/p2.png" />
            <div class="textHide">
              <p class="textInfo">Python</p>
            </div>
          </figure>
          <figure onClick={props.showJS} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/js2.png" />
            <div class="textHide">
              <p class="textInfo">Javascript</p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

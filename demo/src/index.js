import React from "react";
import { render } from "react-dom";

import LastImage from "../../src";

const Demo = () => (
  <div>
    <h1>Last Image</h1>
    <LastImage
      images={[
        {
          width: 2048,
          height: 1536,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/5875b635908cc1aa27f0986cc81428ad0195f759_bryant.png"
        },
        {
          width: 1024,
          height: 768,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/27735deeaa46cb21157b7ba669b4991a66ad09b2_bryant.png"
        },
        {
          width: 682,
          height: 512,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/fc7395d3edc19b161b6b4269624ff27fa1fffa6d_bryant.png"
        },
        {
          width: 20,
          height: 15,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/50a2ec0236c49534f4fb15f392f917176b1be6b0_bryant.png"
        }
      ]}
      alt="A photo of the last image I'll ever need"
      style={{ height: "300px" }}
      imgStyle={{ objectPosition: "top" }}
    />
    <LastImage
      images={[
        {
          width: 2048,
          height: 1536,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/06978ac6c87028703cb24ddc05ade59696c79e36_shannon-shaw-opener.jpg"
        },
        {
          width: 1024,
          height: 768,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/8b5a4114dd97712734431516541e649ba05ff6d3_shannon-shaw-opener.jpg"
        },
        {
          width: 682,
          height: 512,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/9b3a4240e55ea191c3ddc3877ef350ae1677f330_shannon-shaw-opener.jpg"
        },
        {
          width: 20,
          height: 15,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/2216048a53f4a82db21ac1d53811328bda450f4f_shannon-shaw-opener.jpg"
        }
      ]}
      alt="A photo of the second last image I'll ever need"
      lazy={false}
    />
    <LastImage
      images={[
        {
          width: 2048,
          height: 1536,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/e4d6004261af48deb076db58633d8bbe58e450d0_nekocase.jpg"
        },
        {
          width: 1024,
          height: 768,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/bcbcc4935117180b477a2d3d88f5a63f20b458f0_nekocase.jpg"
        },
        {
          width: 682,
          height: 512,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/8448cd7731a7802d229294cee04d3c91d8fb5d28_nekocase.jpg"
        },
        {
          width: 20,
          height: 15,
          url:
            "https://calgary-folk-music-festival.cdn.prismic.io/calgary-folk-music-festival/86c531a3f6d8e2f1954bfc9484dc4c38818e81c3_nekocase.jpg"
        }
      ]}
      alt="A photo of the third last image I'll ever need"
    />
  </div>
);

render(<Demo />, document.querySelector("#demo"));

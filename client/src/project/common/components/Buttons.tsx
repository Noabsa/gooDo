import React from "react";
import styled from "styled-components";

import { SIZES, COLORS, PROPS } from "../styles";

let theme = "light";

interface IconProps {
  icon: string;
  iStyle: keyof IconsIStyle;
  tag: string;
}
interface Icons {
  [icon: string]: IconsIStyle;
}
interface IconsIStyle {
  duo?: () => JSX.Element;
  thin?: () => JSX.Element;
  solid?: () => JSX.Element;
}

const Icon = ({ icon, iStyle, tag }: IconProps) => {
  const CheckedButtonSolid = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path d="m 235.3,331.3 c -6.2,6.3 -16.4,6.3 -22.6,0 l -64,-64 c -6.3,-6.2 -6.3,-16.4 0,-22.6 6.2,-6.3 16.4,-6.3 22.6,0 L 224,297.4 340.7,180.7 c 6.2,-6.3 16.4,-6.3 22.6,0 6.3,6.2 6.3,16.4 0,22.6 z M 512,256 C 512,397.4 397.4,512 256,512 114.6,512 0,397.4 0,256 0,114.6 114.6,0 256,0 397.4,0 512,114.6 512,256 Z M 256,32 C 132.3,32 32,132.3 32,256 32,379.7 132.3,480 256,480 379.7,480 480,379.7 480,256 480,132.3 379.7,32 256,32 Z" />
    </svg>
  );
  const CheckedButtonThin = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path d="m 229.7,325.7 c -3.2,3.1 -8.2,3.1 -11.4,0 l -64,-64 c -3.1,-3.2 -3.1,-8.2 0,-11.4 3.2,-3.1 8.2,-3.1 11.4,0 L 224,308.7 346.3,186.3 c 3.2,-3.1 8.2,-3.1 11.4,0 3.1,3.2 3.1,8.2 0,11.4 l -93.46056,93.46056 z M 512,256 C 512,397.4 397.4,512 256,512 114.6,512 0,397.4 0,256 0,114.6 114.6,0 256,0 397.4,0 512,114.6 512,256 Z M 256,16.000001 C 123.5,16.000001 16,123.5 16,256 16,388.5 123.5,496 256,496 388.5,496 496,388.5 496,256 496,123.5 388.5,16.000001 256,16.000001 Z" />
    </svg>
  );
  const CheckedButtonDuo = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="sec-color"
        d="M 0,256 C 0,114.6 114.6,0 256,0 397.4,0 512,114.6 512,256 512,397.4 397.4,512 256,512 114.6,512 0,397.4 0,256 Z m 371.8,-44.2 c 10.9,-10.9 10.9,-28.7 0,-39.6 -10.9,-10.9 -28.7,-10.9 -39.6,0 L 224,280.4 179.8,236.2 c -10.9,-10.9 -28.7,-10.9 -39.6,0 -10.9,10.9 -10.9,28.7 0,39.6 l 64,64 c 10.9,10.9 28.7,10.9 39.6,0 z"
      />
      <path
        className="prim-color"
        d="m 235.3,331.3 c -6.2,6.3 -16.4,6.3 -22.6,0 l -64,-64 c -6.3,-6.2 -6.3,-16.4 0,-22.6 6.2,-6.3 16.4,-6.3 22.6,0 L 224,297.4 340.7,180.7 c 6.2,-6.3 16.4,-6.3 22.6,0 6.3,6.2 6.3,16.4 0,22.6 z M 512,256 C 512,397.4 397.4,512 256,512 114.6,512 0,397.4 0,256 0,114.6 114.6,0 256,0 397.4,0 512,114.6 512,256 Z M 256,32 C 132.3,32 32,132.3 32,256 32,379.7 132.3,480 256,480 379.7,480 480,379.7 480,256 480,132.3 379.7,32 256,32 Z"
      />
    </svg>
  );
  const FlagDuo = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="sec-color"
        d="M 64 352 L 433 213.6 c 9 -3.4 15 -12 15 -21.6 s -6 -18.2 -15 -21.6 L 64 32 V 352 Z"
      />
      <path
        className="prim-color"
        d="M 32 16 C 32 7.2 24.8 0 16 0 S 0 7.2 0 16 V 32 V 64 V 320 v 32 V 496 c 0 8.8 7.2 16 16 16 s 16 -7.2 16 -16 V 350.9 L 432.9 213.2 c 9.1 -3.1 15.1 -11.6 15.1 -21.2 s -6.1 -18.1 -15.1 -21.2 L 32 33.1 V 16 Z m 0 50.9 L 396.1 192 L 32 317.1 V 66.9 Z"
      />
    </svg>
  );
  const TrashDuo = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="four-color" /* filler */
        d="M 416 448 C 416 483.3 387.3 512 352 512 H 96 C 60.65 512 32 483.3 32 448 V 96 H 416 V 448 Z M 144 176 C 144 167.2 136.8 160 128 160 C 119.2 160 112 167.2 112 176 V 400 C 112 408.8 119.2 416 128 416 C 136.8 416 144 408.8 144 400 V 176 Z M 240 176 C 240 167.2 232.8 160 224 160 C 215.2 160 208 167.2 208 176 V 400 C 208 408.8 215.2 416 224 416 C 232.8 416 240 408.8 240 400 V 176 Z M 336 176 C 336 167.2 328.8 160 320 160 C 311.2 160 304 167.2 304 176 V 400 C 304 408.8 311.2 416 320 416 C 328.8 416 336 408.8 336 400 V 176 Z"
      />
      <path
        className="prim-color" /* lines */
        d="M 144 400 C 144 408.8 136.8 416 128 416 C 119.2 416 112 408.8 112 400 V 176 C 112 167.2 119.2 160 128 160 C 136.8 160 144 167.2 144 176 V 400 Z M 240 400 C 240 408.8 232.8 416 224 416 C 215.2 416 208 408.8 208 400 V 176 C 208 167.2 215.2 160 224 160 C 232.8 160 240 167.2 240 176 V 400 Z M 336 400 C 336 408.8 328.8 416 320 416 C 311.2 416 304 408.8 304 400 V 176 C 304 167.2 311.2 160 320 160 C 328.8 160 336 167.2 336 176 V 400 Z M 310.1 22.56 L 336.9 64 H 432 C 440.8 64 448 71.16 448 80 C 448 88.84 440.8 96 432 96 H 416 V 432 C 416 476.2 380.2 512 336 512 H 112 C 67.82 512 32 476.2 32 432 V 96 H 16 C 7.164 96 0 88.84 0 80 C 0 71.16 7.164 64 16 64 H 111.1 L 137 22.56 C 145.8 8.526 161.2 0 177.7 0 H 270.3 C 286.8 0 302.2 8.526 310.1 22.56 V 22.56 Z M 148.9 64 H 299.1 L 283.8 39.52 C 280.9 34.84 275.8 32 270.3 32 H 177.7 C 172.2 32 167.1 34.84 164.2 39.52 L 148.9 64 Z M 64 432 C 64 458.5 85.49 480 112 480 H 336 C 362.5 480 384 458.5 384 432 V 96 H 64 V 432 Z"
      />
      <path
        className="terc-color" /* lid */
        d="M 284.2 0 C 296.3 0 307.4 6.848 312.8 17.69 L 320 32 H 416 C 433.7 32 448 46.33 448 64 C 448 81.67 433.7 96 416 96 H 32 C 14.33 96 0 81.67 0 64 C 0 46.33 14.33 32 32 32 H 128 L 135.2 17.69 C 140.6 6.848 151.7 0 163.8 0 H 284.2 Z"
      />
    </svg>
  );
  const CaretSolid = () => (
    <svg viewBox="-100 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 246.6 278.6 c 12.5 -12.5 12.5 -32.8 0 -45.3 l -128 -128 c -9.2 -9.2 -22.9 -11.9 -34.9 -6.9 s -19.8 16.6 -19.8 29.6 l 0 256 c 0 12.9 7.8 24.6 19.8 29.6 s 25.7 2.2 34.9 -6.9 l 128 -128 Z"
      />
    </svg>
  );
  const CaretBaseDuo = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <g transform="rotate(90 256 256)">
        <path
          className="prim-color"
          d="M 48.01 319.1 h 351.1 c 41.62 0 63.49 -49.63 35.37 -80.38 l -175.1 -192.1 c -19 -20.62 -51.75 -20.62 -70.75 0 L 12.64 239.6 C -15.48 270.2 6.393 319.1 48.01 319.1 Z"
        />
        <path
          className="sec-color"
          d="M 447.1 432 c 0 26.39 -21.6 47.99 -47.99 47.99 H 48.01 c -26.39 0 -47.99 -21.6 -47.99 -47.99 c 0 -26.39 21.6 -47.98 47.99 -47.98 h 351.1 C 426.4 384 447.1 405.6 447.1 432 Z"
        />
      </g>
    </svg>
  );
  const SubtaskSolid = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 144 320 C 144 346.5 165.5 368 192 368 H 224 V 352 C 224 316.7 252.7 288 288 288 H 448 C 483.3 288 512 316.7 512 352 V 416 C 512 451.3 483.3 480 448 480 H 288 C 252.7 480 224 451.3 224 416 V 400 H 192 C 147.8 400 112 364.2 112 320 V 224 H 64 C 28.65 224 0 195.3 0 160 V 96 C 0 60.65 28.65 32 64 32 H 448 C 483.3 32 512 60.65 512 96 V 160 C 512 195.3 483.3 224 448 224 H 144 V 320 Z M 448 64 H 64 C 46.33 64 32 78.33 32 96 V 160 C 32 177.7 46.33 192 64 192 H 448 C 465.7 192 480 177.7 480 160 V 96 C 480 78.33 465.7 64 448 64 Z M 448 320 H 288 C 270.3 320 256 334.3 256 352 V 416 C 256 433.7 270.3 448 288 448 H 448 C 465.7 448 480 433.7 480 416 V 352 C 480 334.3 465.7 320 448 320 Z"
      />
    </svg>
  );
  const Share = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 448 128 C 448 181 405 224 352 224 C 298.1 224 256 181 256 128 C 256 74.98 298.1 32 352 32 C 405 32 448 74.98 448 128 Z M 192 256 C 192 309 149 352 96 352 C 42.98 352 0 309 0 256 C 0 202.1 42.98 160 96 160 C 149 160 192 202.1 192 256 Z M 256 384 C 256 330.1 298.1 288 352 288 C 405 288 448 330.1 448 384 C 448 437 405 480 352 480 C 298.1 480 256 437 256 384 Z"
      />
      <path
        className="sec-color"
        d="M 191.3 244.1 C 188.5 221.8 178.1 201.8 162.6 186.9 L 256.7 139.9 C 259.5 162.2 269.9 182.2 285.4 197.1 L 191.3 244.1 Z M 285.4 314.9 C 269.9 329.8 259.5 349.8 256.7 372.1 L 162.6 325.1 C 178.1 310.2 188.5 290.2 191.3 267.9 L 285.4 314.9 Z"
      />
    </svg>
  );
  const Fork = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 0 80 C 0 35.82 35.82 0 80 0 C 124.2 0 160 35.82 160 80 C 160 124.2 124.2 160 80 160 C 35.82 160 0 124.2 0 80 Z M 80 104 C 93.25 104 104 93.25 104 80 C 104 66.75 93.25 56 80 56 C 66.75 56 56 66.75 56 80 C 56 93.25 66.75 104 80 104 Z M 288 80 C 288 35.82 323.8 0 368 0 C 412.2 0 448 35.82 448 80 C 448 124.2 412.2 160 368 160 C 323.8 160 288 124.2 288 80 Z M 368 104 C 381.3 104 392 93.25 392 80 C 392 66.75 381.3 56 368 56 C 354.7 56 344 66.75 344 80 C 344 93.25 354.7 104 368 104 Z M 160 432 C 160 476.2 124.2 512 80 512 C 35.82 512 0 476.2 0 432 C 0 387.8 35.82 352 80 352 C 124.2 352 160 387.8 160 432 Z M 80 408 C 66.75 408 56 418.7 56 432 C 56 445.3 66.75 456 80 456 C 93.25 456 104 445.3 104 432 C 104 418.7 93.25 408 80 408 Z"
      />
      <path
        className="sec-color"
        d="M 112 241.1 C 130.8 230.2 152.7 224 176 224 H 272 C 307.3 224 336 195.3 336 160 V 153.3 C 345.8 157.6 356.6 160 368 160 C 379.4 160 390.2 157.6 400 153.3 V 160 C 400 230.7 342.7 288 272 288 H 176 C 140.7 288 112 316.7 112 352 V 358.7 C 102.2 354.4 91.38 352 80 352 C 68.62 352 57.8 354.4 48 358.7 V 153.3 C 57.8 157.6 68.62 160 80 160 C 91.38 160 102.2 157.6 112 153.3 V 241.1 Z"
      />
    </svg>
  );
  const Octocat = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 165.9 397.4 c 0 2 -2.3 3.6 -5.2 3.6 c -3.3 0.3 -5.6 -1.3 -5.6 -3.6 c 0 -2 2.3 -3.6 5.2 -3.6 c 3 -0.3 5.6 1.3 5.6 3.6 Z m -31.1 -4.5 c -0.7 2 1.3 4.3 4.3 4.9 c 2.6 1 5.6 0 6.2 -2 s -1.3 -4.3 -4.3 -5.2 c -2.6 -0.7 -5.5 0.3 -6.2 2.3 Z m 44.2 -1.7 c -2.9 0.7 -4.9 2.6 -4.6 4.9 c 0.3 2 2.9 3.3 5.9 2.6 c 2.9 -0.7 4.9 -2.6 4.6 -4.6 c -0.3 -1.9 -3 -3.2 -5.9 -2.9 Z M 244.8 8 C 106.1 8 0 113.3 0 252 c 0 110.9 69.8 205.8 169.5 239.2 c 12.8 2.3 17.3 -5.6 17.3 -12.1 c 0 -6.2 -0.3 -40.4 -0.3 -61.4 c 0 0 -70 15 -84.7 -29.8 c 0 0 -11.4 -29.1 -27.8 -36.6 c 0 0 -22.9 -15.7 1.6 -15.4 c 0 0 24.9 2 38.6 25.8 c 21.9 38.6 58.6 27.5 72.9 20.9 c 2.3 -16 8.8 -27.1 16 -33.7 c -55.9 -6.2 -112.3 -14.3 -112.3 -110.5 c 0 -27.5 7.6 -41.3 23.6 -58.9 c -2.6 -6.5 -11.1 -33.3 2.6 -67.9 c 20.9 -6.5 69 27 69 27 c 20 -5.6 41.5 -8.5 62.8 -8.5 s 42.8 2.9 62.8 8.5 c 0 0 48.1 -33.6 69 -27 c 13.7 34.7 5.2 61.4 2.6 67.9 c 16 17.7 25.8 31.5 25.8 58.9 c 0 96.5 -58.9 104.2 -114.8 110.5 c 9.2 7.9 17 22.9 17 46.4 c 0 33.7 -0.3 75.4 -0.3 83.6 c 0 6.5 4.6 14.4 17.3 12.1 C 428.2 457.8 496 362.9 496 252 C 496 113.3 383.5 8 244.8 8 Z M 97.2 352.9 c -1.3 1 -1 3.3 0.7 5.2 c 1.6 1.6 3.9 2.3 5.2 1 c 1.3 -1 1 -3.3 -0.7 -5.2 c -1.6 -1.6 -3.9 -2.3 -5.2 -1 Z m -10.8 -8.1 c -0.7 1.3 0.3 2.9 2.3 3.9 c 1.6 1 3.6 0.7 4.3 -0.7 c 0.7 -1.3 -0.3 -2.9 -2.3 -3.9 c -2 -0.6 -3.6 -0.3 -4.3 0.7 Z m 32.4 35.6 c -1.6 1.3 -1 4.3 1.3 6.2 c 2.3 2.3 5.2 2.6 6.5 1 c 1.3 -1.3 0.7 -4.3 -1.3 -6.2 c -2.2 -2.3 -5.2 -2.6 -6.5 -1 Z m -11.4 -14.7 c -1.6 1 -1.6 3.6 0 5.9 c 1.6 2.3 4.3 3.3 5.6 2.3 c 1.6 -1.3 1.6 -3.9 0 -6.2 c -1.4 -2.3 -4 -3.3 -5.6 -2 Z"
      />
    </svg>
  );
  const LinkedIn = () => (
    <svg viewBox="0 0 512 512" className={tag}>
      <path
        className="prim-color"
        d="M 100.28 448 H 7.4 V 148.9 h 92.88 Z M 53.79 108.1 C 24.09 108.1 0 83.5 0 53.8 a 53.79 53.79 0 0 1 107.58 0 c 0 29.7 -24.1 54.3 -53.79 54.3 Z M 447.9 448 h -92.68 V 302.4 c 0 -34.7 -0.7 -79.2 -48.29 -79.2 c -48.29 0 -55.69 37.7 -55.69 76.7 V 448 h -92.78 V 148.9 h 89.08 v 40.8 h 1.3 c 12.4 -23.5 42.69 -48.3 87.88 -48.3 c 94 0 111.28 61.9 111.28 142.3 V 448 Z"
      />
    </svg>
  );
  const icons: Icons = {
    checkedButton: {
      solid: CheckedButtonSolid,
      thin: CheckedButtonThin,
      duo: CheckedButtonDuo,
    },
    flag: { duo: FlagDuo },
    trash: { duo: TrashDuo },
    caret: { solid: CaretSolid },
    subtask: { solid: SubtaskSolid },
    caretBase: { duo: CaretBaseDuo },
    share: { duo: Share },
    fork: { duo: Fork },
    octocat: { solid: Octocat },
    linkedin: { solid: LinkedIn },
  };
  return icons[icon][iStyle]?.() as JSX.Element;
};

interface ButtonStyledProps {
  readonly size: string;
}
interface ButtonProps {
  icon: string;
  iStyle: keyof IconsIStyle;
  size: keyof typeof SIZES;
  type: string;
  transform?: string;
  state?: string;
  index?: number;
  onClick?: () => void;
}
const ButtonStyled = styled.div<ButtonStyledProps>`
  &.button {
    aspect-ratio: 1;
    height: ${({ size }) => SIZES[size] * 20}px;

    &:hover {
      cursor: pointer;
    }
  }
  .button {
    &__checkTask {
      .prim-color {
        fill: ${COLORS.black}70;
      }
      .sec-color {
        fill: ${COLORS.black}10;
      }
      :hover {
        filter: drop-shadow(0px 0px 2px ${COLORS[theme].hueL});

        .prim-color {
          filter: drop-shadow(2px 2px 2px ${COLORS.black}99);
        }
        .sec-color {
          fill: ${COLORS.white};
        }
      }
      &--active {
        .prim-color {
          fill: ${COLORS[theme].shade};
        }
        .sec-color {
          fill: ${COLORS[theme].hueR}70;
        }
        :hover {
          filter: drop-shadow(0px 0px 2px ${COLORS[theme].hueL});
          .prim-color {
            filter: drop-shadow(2px 2px 2px black);
          }
          .sec-color {
            fill: ${COLORS[theme].hueR};
          }
        }
      }
    }
    &__icon {
      .prim-color,
      .terc-color {
        fill: ${COLORS.black}70;
      }
      .sec-color,
      .four-color {
        fill: ${COLORS.black}10;
      }
      :hover {
        filter: drop-shadow(0px 0px 2px ${COLORS[theme].hueL});
        .prim-color {
          fill: ${COLORS[theme].shade};
        }
        .sec-color,
        .four-color {
          fill: ${COLORS[theme].hot}50;
          fill: ${COLORS.white};
        }
        .terc-color {
          fill: ${COLORS.black}80;
        }
      }
      &--active {
        .prim-color,
        .terc-color {
          fill: ${COLORS[theme].shade};
        }
        .sec-color {
          fill: ${COLORS[theme].hot}90;
        }
        .four-color {
          fill: ${COLORS[theme].hot}40;
        }
        :hover {
          filter: drop-shadow(0px 0px 2px ${COLORS[theme].hueL});
          .prim-color,
          .terc-color {
            filter: drop-shadow(2px 2px 2px ${COLORS[theme].hueL});
          }
          .sec-color {
            fill: ${COLORS[theme].hot};
          }
          .four-color {
            fill: ${COLORS[theme].hot}60;
          }
        }
      }
    }
    &__static,
    &__static--active {
      .prim-color {
        fill: ${COLORS.black}50;
      }
      .sec-color {
        fill: ${COLORS.black}10;
      }
      :hover,
      &--active:hover {
        cursor: default;
      }
    }
    &__social,
    &__social--active {
      border-radius: ${PROPS.borderRadius}px;
      border: 2px solid ${COLORS[theme].hueR};
      padding: 15%;
      .prim-color {
        fill: ${COLORS[theme].shade};
      }
      .sec-color {
        fill: ${COLORS.black}80;
      }
      :hover {
        filter: drop-shadow(0px 0px 2px ${COLORS[theme].hueL});
        background-color: white;

        .prim-color {
          fill: ${COLORS[theme].brand};
        }
      }
    }
  }
  .rotate {
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
`;
const Button = ({
  icon,
  iStyle,
  size,
  type,
  transform,
  state,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} className={`button`} size={size}>
      <Icon
        icon={icon}
        iStyle={iStyle}
        tag={`button__${type}${(state && "--" + state) || ""} ${
          (state && transform) || "no-transform"
        }`}
      />
    </ButtonStyled>
  );
};
export { Icon, Button };

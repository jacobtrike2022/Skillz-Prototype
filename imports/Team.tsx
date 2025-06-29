import svgPaths from "./svg-gnb1d8b9n7";
import imgImg from "figma:asset/f578f9c2a181ef669150341163e63e6e9da01878.png";
import imgImg1 from "figma:asset/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png";
import imgImg2 from "figma:asset/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png";
import imgImg3 from "figma:asset/410c340aa057242400c608368f918307cdd72438.png";
import imgImg4 from "figma:asset/6528ea7852c4088f59481c9e231938f441876daf.png";
import imgImg5 from "figma:asset/bec21fc75386a86210d32bec8ca98fcb2380d21e.png";
import imgImg6 from "figma:asset/1ecb12199697dd16c82152392c0b02a04bd85271.png";

function Frame() {
  return (
    <div className="h-3 relative shrink-0 w-[15px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_267)">
            <path
              d={svgPaths.p3a3c08f0}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_267">
            <path d="M0 0H15V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 overflow-clip p-0 top-[1.5px] w-[15px]"
      data-name="Frame"
    >
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-3 relative shrink-0 w-[15px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_255)">
            <path
              d={svgPaths.p32d52480}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_255">
            <path d="M0 0H15V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-[23px] overflow-clip p-0 top-[1.5px] w-[15px]"
      data-name="Frame"
    >
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-3 relative shrink-0 w-[13.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_237)">
            <path
              d={svgPaths.p27cd07f0}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_237">
            <path d="M0 0H13.5V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-[46px] overflow-clip p-0 top-[1.5px] w-[13.5px]"
      data-name="Frame"
    >
      <Frame4 />
    </div>
  );
}

function Div() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[310.5px] top-2 w-[59.5px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Div1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[390px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-5 not-italic text-[#ffffff] text-[12px] text-left top-[7.56px] w-6">
        <p className="block leading-[16px]">9:41</p>
      </div>
      <Div />
    </div>
  );
}

function Div2() {
  return (
    <div
      className="absolute bg-[rgba(34,197,94,0.2)] h-5 left-[76.5px] rounded-[9999px] top-0 w-[58.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[12px] text-green-400 text-left top-[2.28px] w-[46px]">
        <p className="block leading-[normal]">7 Active</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-9 w-[192.938px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-0 w-[74px]">
        <p className="block leading-[20px]">Store #478</p>
      </div>
      <Div2 />
    </div>
  );
}

function Div4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-14 left-0 top-0 w-[192.938px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-0 not-italic text-[#ffffff] text-[24px] text-left top-[-3.76px] w-[193px]">
        <p className="block leading-[32px]">Team Dashboard</p>
      </div>
      <Div3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_783)">
            <path
              d={svgPaths.p1868abf0}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_783">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 p-0 top-[3px] w-3.5"
      data-name="svg"
    >
      <Frame6 />
    </div>
  );
}

function I() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[13px] top-2 w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] left-[302px] rounded-[9999px] size-10 top-2"
      data-name="button"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I />
    </div>
  );
}

function Div5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-14 left-6 top-4 w-[342px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div4 />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-20 left-0 top-8 w-[390px]"
      data-name="header"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div5 />
    </div>
  );
}

function H2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-[21px] top-[21px] w-[308px]"
      data-name="h2"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-[2.18px] w-[161px]">
        <p className="block leading-[normal]">Team Performance</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-[45.969px] not-italic text-[#ff4500] text-[24px] text-center top-[-0.72px] translate-x-[-50%] w-12">
        <p className="block leading-[normal]">87%</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-8 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[48.297px] not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-[94px]">
        <p className="block leading-[normal]">Completion Rate</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div6 />
      <Div7 />
    </div>
  );
}

function Div9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-[47.641px] not-italic text-[24px] text-center text-green-400 top-[-0.72px] translate-x-[-50%] w-[30px]">
        <p className="block leading-[normal]">42</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-8 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[47.641px] not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-[66px]">
        <p className="block leading-[normal]">Tasks Done</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[108px] top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div9 />
      <Div10 />
    </div>
  );
}

function Div12() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-[47.313px] not-italic text-[24px] text-blue-400 text-center top-[-0.72px] translate-x-[-50%] w-9">
        <p className="block leading-[normal]">6.8</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-8 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[47.25px] not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-[61px]">
        <p className="block leading-[normal]">Avg Rating</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[216px] top-0 w-[92px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div12 />
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[21px] top-[65px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div8 />
      <Div11 />
      <Div14 />
    </div>
  );
}

function Canvas() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[150px] left-0 top-0 w-[300px]"
      data-name="canvas"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div16() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-20 left-[21px] top-[129px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Canvas />
    </div>
  );
}

function Div17() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[230px] left-5 rounded-2xl top-4 w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_0px_20px_0px_rgba(255,69,0,0.3)]" />
      <H2 />
      <Div15 />
      <Div16 />
    </div>
  );
}

function Div18() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-[21px] top-[21px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-[0.36px] w-[139px]">
        <p className="block leading-[28px]">Active Members</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[247.281px] not-italic text-[14px] text-gray-400 text-left top-[3.8px] w-[66px]">
        <p className="block leading-[20px]">7/9 online</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-12 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg}')` }}
    >
      <div className="absolute border-2 border-[#ff4500] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div19() {
  return (
    <div
      className="absolute bg-green-500 left-9 rounded-[9999px] size-4 top-9"
      data-name="div"
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div20() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img />
      <Div19 />
    </div>
  );
}

function Div21() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[85.391px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[88px]">
        <p className="block leading-[normal]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[85.391px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[73px]">
        <p className="block leading-[normal]">Team Lead</p>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[85.391px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div21 />
      <Div22 />
    </div>
  );
}

function Div24() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-3 top-3 w-[145.391px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div20 />
      <Div23 />
    </div>
  );
}

function Div25() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[49px] not-italic text-[#ff4500] text-[14px] text-right top-px translate-x-[-100%] w-[29px]">
        <p className="block leading-[normal]">95%</p>
      </div>
    </div>
  );
}

function Div26() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-5 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[53px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[53px]">
        <p className="block leading-[normal]">8/8 tasks</p>
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[247.969px] top-[18px] w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div25 />
      <Div26 />
    </div>
  );
}

function Div28() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[72px] left-0 rounded-xl top-0 w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div24 />
      <Div27 />
    </div>
  );
}

function Img1() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-12 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg1}')` }}
    >
      <div className="absolute border-2 border-green-400 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div29() {
  return (
    <div
      className="absolute bg-green-500 left-9 rounded-[9999px] size-4 top-9"
      data-name="div"
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div30() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img1 />
      <Div29 />
    </div>
  );
}

function Div31() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[111.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[117px]">
        <p className="block leading-[normal]">Mike Rodriguez</p>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[111.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[105px]">
        <p className="block leading-[normal]">Sales Associate</p>
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[111.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div31 />
      <Div32 />
    </div>
  );
}

function Div34() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-3 top-3 w-[171.156px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div30 />
      <Div33 />
    </div>
  );
}

function Div35() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[49px] not-italic text-[14px] text-green-400 text-right top-px translate-x-[-100%] w-[29px]">
        <p className="block leading-[normal]">88%</p>
      </div>
    </div>
  );
}

function Div36() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-5 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[53px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[53px]">
        <p className="block leading-[normal]">7/8 tasks</p>
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[247.969px] top-[18px] w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div35 />
      <Div36 />
    </div>
  );
}

function Div38() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[72px] left-0 rounded-xl top-[84px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div34 />
      <Div37 />
    </div>
  );
}

function Img2() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-12 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg2}')` }}
    >
      <div className="absolute border-2 border-solid border-yellow-400 inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div39() {
  return (
    <div
      className="absolute bg-green-500 left-9 rounded-[9999px] size-4 top-9"
      data-name="div"
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-3 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_774)">
            <path
              d={svgPaths.p23bb9280}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_774">
            <path d="M0 0H10.5V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 p-0 top-[1.5px] w-[10.5px]"
      data-name="svg"
    >
      <Frame7 />
    </div>
  );
}

function I1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[2.75px] top-0 w-[10.5px]"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div40() {
  return (
    <div
      className="absolute bg-[#ff4500] left-[-4px] rounded-[9999px] size-4 top-[-4px]"
      data-name="div"
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I1 />
    </div>
  );
}

function Div41() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img2 />
      <Div39 />
      <Div40 />
    </div>
  );
}

function Div42() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[104.328px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[108px]">
        <p className="block leading-[normal]">Emma Watson</p>
      </div>
    </div>
  );
}

function Div43() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[104.328px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[105px]">
        <p className="block leading-[normal]">Sales Associate</p>
      </div>
    </div>
  );
}

function Div44() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[104.328px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div42 />
      <Div43 />
    </div>
  );
}

function Div45() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-3 top-3 w-[164.328px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div41 />
      <Div44 />
    </div>
  );
}

function Div46() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[49px] not-italic text-[14px] text-right text-yellow-400 top-px translate-x-[-100%] w-[29px]">
        <p className="block leading-[normal]">82%</p>
      </div>
    </div>
  );
}

function Div47() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-5 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[53px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[53px]">
        <p className="block leading-[normal]">6/8 tasks</p>
      </div>
    </div>
  );
}

function Div48() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[247.969px] top-[18px] w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div46 />
      <Div47 />
    </div>
  );
}

function Div49() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[72px] left-0 rounded-xl top-[168px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div45 />
      <Div48 />
    </div>
  );
}

function Img3() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-12 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg3}')` }}
    >
      <div className="absolute border-2 border-blue-400 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div50() {
  return (
    <div
      className="absolute bg-green-500 left-9 rounded-[9999px] size-4 top-9"
      data-name="div"
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div51() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-12 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img3 />
      <Div50 />
    </div>
  );
}

function Div52() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[98.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[102px]">
        <p className="block leading-[normal]">Alex Johnson</p>
      </div>
    </div>
  );
}

function Div53() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[98.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[105px]">
        <p className="block leading-[normal]">Sales Associate</p>
      </div>
    </div>
  );
}

function Div54() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[60px] top-0.5 w-[98.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div52 />
      <Div53 />
    </div>
  );
}

function Div55() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-3 top-3 w-[158.844px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div51 />
      <Div54 />
    </div>
  );
}

function Div56() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-12 not-italic text-[14px] text-blue-400 text-right top-px translate-x-[-100%] w-7">
        <p className="block leading-[normal]">75%</p>
      </div>
    </div>
  );
}

function Div57() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-5 w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[53px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[53px]">
        <p className="block leading-[normal]">6/8 tasks</p>
      </div>
    </div>
  );
}

function Div58() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[247.969px] top-[18px] w-[48.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div56 />
      <Div57 />
    </div>
  );
}

function Div59() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[72px] left-0 rounded-xl top-[252px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div55 />
      <Div58 />
    </div>
  );
}

function Div60() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[324px] left-[21px] top-[65px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div28 />
      <Div38 />
      <Div49 />
      <Div59 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[21px] top-[405px] w-[308px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[159.062px] not-italic text-[#ff4500] text-[14px] text-center top-[8.9px] translate-x-[-50%] w-[159px]">
        <p className="block leading-[normal]">View All Team Members</p>
      </div>
    </div>
  );
}

function Div61() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[462px] left-5 rounded-2xl top-[266px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div18 />
      <Div60 />
      <Button1 />
    </div>
  );
}

function H3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-[21px] top-[21px] w-[308px]"
      data-name="h2"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-[2.18px] w-[153px]">
        <p className="block leading-[normal]">Live Collaboration</p>
      </div>
    </div>
  );
}

function Div62() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-12 w-[199.188px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[133px]">
        <p className="block leading-[normal]">Started 15 mins ago</p>
      </div>
    </div>
  );
}

function Div63() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[68px] left-0 top-0 w-[199.188px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.24px] w-[161px]">
        <p className="block leading-[24px]">Visual Merchandising Update</p>
      </div>
      <Div62 />
    </div>
  );
}

function Div64() {
  return (
    <div
      className="absolute bg-[rgba(255,69,0,0.2)] h-10 left-[199.188px] rounded-[9999px] top-0 w-[74.813px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[#ff4500] text-[12px] text-left top-[4.28px] w-[11px]">
        <p className="block leading-[normal]">In</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[#ff4500] text-[12px] text-left top-[20.28px] w-[51px]">
        <p className="block leading-[normal]">Progress</p>
      </div>
    </div>
  );
}

function Div65() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[68px] left-[17px] top-[17px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div63 />
      <Div64 />
    </div>
  );
}

function Img4() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg3}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div66() {
  return (
    <div
      className="absolute bg-[#ff4500] left-[18.375px] opacity-[0.0521322] rounded-[9999px] size-[23.249px] top-[-9.625px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div67() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-8 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img4 />
      <Div66 />
    </div>
  );
}

function Img5() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-6 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg4}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div68() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-14"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div67 />
      <Img5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-3.5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_771)">
            <path
              d={svgPaths.pf9e4a00}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_771">
            <path d="M0 0H17.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[2.75px] w-[17.5px]"
      data-name="Frame"
    >
      <Frame8 />
    </div>
  );
}

function Div69() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[68px] top-1.5 w-[147.547px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[21.5px] not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[131px]">
        <p className="block leading-[normal]">2 members working</p>
      </div>
    </div>
  );
}

function Div70() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[17px] top-[97px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div68 />
      <Div69 />
    </div>
  );
}

function Div71() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.44px] w-[51px]">
        <p className="block leading-[16px]">Progress</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[249.969px] not-italic text-[#ffffff] text-[12px] text-left top-[-0.44px] w-[25px]">
        <p className="block leading-[16px]">65%</p>
      </div>
    </div>
  );
}

function Div72() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#4a0072] h-1.5 left-0 rounded-[9999px] to-[#ff4500] top-0 w-[178.094px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div73() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-1.5 left-0 rounded-[9999px] top-5 w-[274px]"
      data-name="div"
    >
      <div className="h-1.5 overflow-clip relative w-[274px]">
        <Div72 />
      </div>
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div74() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[26px] left-[17px] top-[141px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div71 />
      <Div73 />
    </div>
  );
}

function Div75() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#4a007233] h-[184px] left-0 rounded-xl to-[#ff450033] top-0 w-[308px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,69,0,0.3)] border-solid inset-0 pointer-events-none rounded-xl" />
      <Div65 />
      <Div70 />
      <Div74 />
    </div>
  );
}

function Div76() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[205.422px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[126px]">
        <p className="block leading-[normal]">Started 8 mins ago</p>
      </div>
    </div>
  );
}

function Div77() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[205.422px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[0.12px] w-[221px]">
        <p className="block leading-[24px]">Inventory Count - Electronics</p>
      </div>
      <Div76 />
    </div>
  );
}

function Div78() {
  return (
    <div
      className="absolute bg-[rgba(34,197,94,0.2)] h-6 left-[225.312px] rounded-[9999px] top-0 w-[48.688px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-2 not-italic text-[12px] text-green-400 text-left top-[4.28px] w-9">
        <p className="block leading-[normal]">Active</p>
      </div>
    </div>
  );
}

function Div79() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[17px] top-[17px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div77 />
      <Div78 />
    </div>
  );
}

function Img6() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg1}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div80() {
  return (
    <div
      className="absolute bg-green-500 h-[23.786px] left-[18.107px] opacity-[0.0148272] rounded-[9999px] top-[-9.893px] w-[23.787px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div81() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 size-8 top-0"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img6 />
      <Div80 />
    </div>
  );
}

function Img7() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-6 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg5}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img8() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-12 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg6}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div82() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-20"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div81 />
      <Img7 />
      <Img8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-3.5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_771)">
            <path
              d={svgPaths.pf9e4a00}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_771">
            <path d="M0 0H17.5V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3.5 items-center justify-center left-0 overflow-clip p-0 top-[2.75px] w-[17.5px]"
      data-name="Frame"
    >
      <Frame10 />
    </div>
  );
}

function Div83() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[92px] top-1.5 w-[147.547px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[21.5px] not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[131px]">
        <p className="block leading-[normal]">3 members working</p>
      </div>
    </div>
  );
}

function Div84() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-[17px] top-[73px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div82 />
      <Div83 />
    </div>
  );
}

function Div85() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-0 not-italic text-[#ffffff] text-[12px] text-left top-[-0.44px] w-[51px]">
        <p className="block leading-[16px]">Progress</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[249.969px] not-italic text-[#ffffff] text-[12px] text-left top-[-0.44px] w-[25px]">
        <p className="block leading-[16px]">42%</p>
      </div>
    </div>
  );
}

function Div86() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#22c55e] h-1.5 left-0 rounded-[9999px] to-[#3b82f6] top-0 w-[115.078px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div87() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-1.5 left-0 rounded-[9999px] top-5 w-[274px]"
      data-name="div"
    >
      <div className="h-1.5 overflow-clip relative w-[274px]">
        <Div86 />
      </div>
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div88() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[26px] left-[17px] top-[117px] w-[274px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div85 />
      <Div87 />
    </div>
  );
}

function Div89() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#22c55e33] h-40 left-0 rounded-xl to-[#3b82f633] top-[200px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(74,222,128,0.3)] border-solid inset-0 pointer-events-none rounded-xl" />
      <Div79 />
      <Div84 />
      <Div88 />
    </div>
  );
}

function Div90() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[360px] left-[21px] top-[65px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div75 />
      <Div89 />
    </div>
  );
}

function Div91() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[446px] left-5 rounded-2xl top-[748px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <H3 />
      <Div90 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[259.219px] top-1 w-[48.781px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[26.5px] not-italic text-[#ff4500] text-[14px] text-center top-[0.9px] translate-x-[-50%] w-[53px]">
        <p className="block leading-[normal]">View All</p>
      </div>
    </div>
  );
}

function Div92() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-[21px] top-[21px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-[0.36px] w-44">
        <p className="block leading-[28px]">Weekly Leaderboard</p>
      </div>
      <Button2 />
    </div>
  );
}

function Div93() {
  return (
    <div
      className="absolute bg-yellow-500 left-3 rounded-[9999px] size-8 top-[18px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.094px] not-italic text-[#0a0a0b] text-[14px] text-left top-[7px] w-[7px]">
        <p className="block leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-14 rounded-[9999px] size-10 top-3.5"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg}')` }}
    >
      <div className="absolute border-2 border-solid border-yellow-500 inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div94() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[88px]">
        <p className="block leading-[normal]">Sarah Chen</p>
      </div>
    </div>
  );
}

function Div95() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[73px]">
        <p className="block leading-[normal]">Team Lead</p>
      </div>
    </div>
  );
}

function Div96() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[108px] top-3 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div94 />
      <Div95 />
    </div>
  );
}

function Div97() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-[46px] not-italic text-[18px] text-right text-yellow-500 top-[2.18px] translate-x-[-100%] w-[46px]">
        <p className="block leading-[normal]">1,250</p>
      </div>
    </div>
  );
}

function Div98() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-7 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[48.016px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[35px]">
        <p className="block leading-[normal]">points</p>
      </div>
    </div>
  );
}

function Div99() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[250.953px] top-3 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div97 />
      <Div98 />
    </div>
  );
}

function Div100() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#eab30833] h-[68px] left-0 rounded-xl to-[#ff450033] top-0 w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div93 />
      <Img9 />
      <Div96 />
      <Div99 />
    </div>
  );
}

function Div101() {
  return (
    <div
      className="absolute bg-gray-400 left-3 rounded-[9999px] size-8 top-[18px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.094px] not-italic text-[#0a0a0b] text-[14px] text-left top-[7px] w-[9px]">
        <p className="block leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-14 rounded-[9999px] size-10 top-3.5"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg1}')` }}
    >
      <div className="absolute border-2 border-gray-400 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div102() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[117px]">
        <p className="block leading-[normal]">Mike Rodriguez</p>
      </div>
    </div>
  );
}

function Div103() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[105px]">
        <p className="block leading-[normal]">Sales Associate</p>
      </div>
    </div>
  );
}

function Div104() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[108px] top-3 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div102 />
      <Div103 />
    </div>
  );
}

function Div105() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-[42px] not-italic text-[18px] text-gray-400 text-right top-[2.18px] translate-x-[-100%] w-[42px]">
        <p className="block leading-[normal]">1,180</p>
      </div>
    </div>
  );
}

function Div106() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-7 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[48.016px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[35px]">
        <p className="block leading-[normal]">points</p>
      </div>
    </div>
  );
}

function Div107() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[250.953px] top-3 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div105 />
      <Div106 />
    </div>
  );
}

function Div108() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[68px] left-0 rounded-xl top-20 w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div101 />
      <Img10 />
      <Div104 />
      <Div107 />
    </div>
  );
}

function Div109() {
  return (
    <div
      className="absolute bg-orange-600 left-3 rounded-[9999px] size-8 top-[18px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[12.094px] not-italic text-[#ffffff] text-[14px] text-left top-[7px] w-[9px]">
        <p className="block leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Img11() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-14 rounded-[9999px] size-10 top-3.5"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg2}')` }}
    >
      <div className="absolute border-2 border-orange-600 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div110() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.56px] w-[108px]">
        <p className="block leading-[normal]">Emma Watson</p>
      </div>
    </div>
  );
}

function Div111() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-6 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[0.9px] w-[105px]">
        <p className="block leading-[normal]">Sales Associate</p>
      </div>
    </div>
  );
}

function Div112() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[108px] top-3 w-[142.953px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div110 />
      <Div111 />
    </div>
  );
}

function Div113() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-[42px] not-italic text-[18px] text-orange-600 text-right top-[2.18px] translate-x-[-100%] w-[42px]">
        <p className="block leading-[normal]">1,120</p>
      </div>
    </div>
  );
}

function Div114() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-7 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[48.016px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[35px]">
        <p className="block leading-[normal]">points</p>
      </div>
    </div>
  );
}

function Div115() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-[250.953px] top-3 w-[45.047px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div113 />
      <Div114 />
    </div>
  );
}

function Div116() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[68px] left-0 rounded-xl top-40 w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <Div109 />
      <Img11 />
      <Div112 />
      <Div115 />
    </div>
  );
}

function Div117() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[228px] left-[21px] top-[65px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div100 />
      <Div108 />
      <Div116 />
    </div>
  );
}

function Div118() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[314px] left-5 rounded-2xl top-[1214px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div92 />
      <Div117 />
    </div>
  );
}

function Main() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[1528px] left-0 top-28 w-[390px]"
      data-name="main"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div17 />
      <Div61 />
      <Div91 />
      <Div118 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-4 relative shrink-0 w-[18px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_768)">
            <path
              d={svgPaths.p2a5f7c00}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_768">
            <path d="M0 0H18V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[11px] overflow-clip p-0 top-[11px] w-[18px]"
      data-name="Frame"
    >
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_765)">
            <path
              d={svgPaths.p203b4600}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_765">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-[115.328px] overflow-clip p-0 size-4 top-[11px]"
      data-name="Frame"
    >
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-4 relative shrink-0 w-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_780)">
            <path
              d={svgPaths.pacdad00}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_780">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[216.656px] overflow-clip p-0 top-[11px] w-5"
      data-name="Frame"
    >
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-4 relative shrink-0 w-5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_29_777)">
            <path
              d={svgPaths.p1b4569c0}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_29_777">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-[319.984px] overflow-clip p-0 top-[21px] w-5"
      data-name="Frame"
    >
      <Frame18 />
    </div>
  );
}

function Div119() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[60px] left-5 top-[13px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[60px] leading-[0] left-[3.984px] not-italic text-[12px] text-gray-400 text-left top-[43.2px] w-[34px]">
        <p className="block leading-[24px]">Home</p>
      </div>
      <Frame13 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[60px] leading-[0] left-[107.984px] not-italic text-[12px] text-gray-400 text-left top-[43.2px] w-[33px]">
        <p className="block leading-[24px]">Tasks</p>
      </div>
      <Frame15 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[60px] leading-[0] left-[212.641px] not-italic text-[12px] text-gray-400 text-left top-[43.2px] w-[29px]">
        <p className="block leading-[24px]">Skills</p>
      </div>
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.8)] h-[85px] left-0 top-[1655px] w-[390px]"
      data-name="nav"
    >
      <div className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Div119 />
    </div>
  );
}

function Div120() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[1740px] left-0 top-0 w-[390px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
      <Header />
      <Main />
      <Nav />
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#0a0a0b] h-[1740px] relative shrink-0 w-[390px]"
      data-name="body"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div120 />
    </div>
  );
}

export default function Team() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg size-full"
      data-name="team"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Body />
      </div>
      <div className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}
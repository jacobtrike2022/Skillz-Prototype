import svgPaths from "./svg-53qwqld3ba";
import imgImg from "figma:asset/410c340aa057242400c608368f918307cdd72438.png";
import imgImg1 from "figma:asset/6528ea7852c4088f59481c9e231938f441876daf.png";

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

function Frame6() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 16"
      >
        <g id="Frame">
          <path d="M10 16H0V0H10V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p31e57680}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 p-0 top-[3px] w-2.5"
      data-name="svg"
    >
      <Frame6 />
    </div>
  );
}

function I() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[15px] top-2 w-2.5"
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
      className="absolute bg-[rgba(255,255,255,0.05)] left-0 rounded-[9999px] size-10 top-0.5"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I />
    </div>
  );
}

function Div2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-7 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[138.578px] not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-[121px]">
        <p className="block leading-[normal]">Visual Merchandising</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-10 top-0 w-[270px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-[134.625px] not-italic text-[#ffffff] text-[18px] text-center top-[0.36px] translate-x-[-50%] w-[103px]">
        <p className="block leading-[28px]">Task Details</p>
      </div>
      <Div2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p7a1ad80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 p-0 top-[3px] w-3.5"
      data-name="svg"
    >
      <Frame7 />
    </div>
  );
}

function I1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-[13px] top-2 w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] left-[310px] rounded-[9999px] size-10 top-0.5"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I1 />
    </div>
  );
}

function Div4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-11 left-5 top-4 w-[350px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
      <Div3 />
      <Button1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[77px] left-0 top-8 w-[390px]"
      data-name="header"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none" />
      <Div4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_249)">
            <path
              d={svgPaths.pdbcbe00}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_249">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3.5 top-[2.75px]"
      data-name="Frame"
    >
      <Frame8 />
    </div>
  );
}

function Div5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-[38px] w-[256.641px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[22px] not-italic text-[14px] text-gray-400 text-left top-0 w-[126px]">
        <p className="block leading-[20px]">2:00 PM - 4:00 PM</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[146.719px] not-italic text-[14px] text-gray-400 text-left top-[0.4px] w-2">
        <p className="block leading-[20px]">•</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[3px] not-italic text-[#ff4500] text-[14px] text-left top-5 w-[82px]">
        <p className="block leading-[20px]">High Priority</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img1() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat left-6 rounded-[9999px] size-8 top-0"
      data-name="img"
      style={{ backgroundImage: `url('${imgImg1}')` }}
    >
      <div className="absolute border-2 border-[#0a0a0b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-14"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img />
      <Img1 />
    </div>
  );
}

function Div7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-24 w-[256.641px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div6 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[68px] not-italic text-[14px] text-gray-400 text-left top-[5.8px] w-[84px]">
        <p className="block leading-[20px]">{`Alex & Sarah`}</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-32 left-0 top-0 w-[256.641px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-14 leading-[0] left-0 not-italic text-[#ffffff] text-[20px] text-left top-[-1px] w-[309px]">
        <p className="block leading-[28px]">Visual merchandising update</p>
      </div>
      <Div5 />
      <Div7 />
    </div>
  );
}

function Div9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[51.359px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-[53.313px] not-italic text-[#ff4500] text-[24px] text-right top-[-0.72px] translate-x-[-100%] w-[50px]">
        <p className="block leading-[normal]">45%</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-8 w-[51.359px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[55px] not-italic text-[12px] text-gray-400 text-right top-[0.28px] translate-x-[-100%] w-[55px]">
        <p className="block leading-[normal]">Complete</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-[241.641px] top-[38px] w-[51.359px]"
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
      className="absolute bg-[rgba(0,0,0,0)] h-32 left-[21px] top-[21px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div8 />
      <Div11 />
    </div>
  );
}

function Div13() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#4a0072] h-2 left-0 rounded-[9999px] to-[#ff4500] top-0 w-[138.594px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_19.331px_0px_rgba(255,69,0,0.58)]" />
    </div>
  );
}

function Div14() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-2 left-0 rounded-[9999px] top-0 w-[308px]"
      data-name="div"
    >
      <div className="h-2 overflow-clip relative w-[308px]">
        <Div13 />
      </div>
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div15() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-2 left-[21px] top-[165px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_252)">
            <path
              d={svgPaths.p1bec5900}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_252">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-3.5 top-[0.75px]"
      data-name="svg"
    >
      <Frame10 />
    </div>
  );
}

function I2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[39.859px] top-2.5 w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-[rgba(255,69,0,0.2)] h-9 left-0 rounded-xl top-0 w-48"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <I2 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-[109.359px] not-italic text-[#ff4500] text-[14px] text-center top-[8.9px] translate-x-[-50%] w-[95px]">
        <p className="block leading-[normal]">Show Me How</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_243)">
            <path
              d={svgPaths.p103bb600}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_243">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-3.5 top-[0.75px]"
      data-name="svg"
    >
      <Frame11 />
    </div>
  );
}

function I3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-4 top-2.5 w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-9 left-[204px] rounded-xl top-0 w-[46px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <I3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_240)">
            <path
              d={svgPaths.p3ced6500}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_240">
            <path d="M0 0H14V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-3.5 top-[0.75px]"
      data-name="svg"
    >
      <Frame12 />
    </div>
  );
}

function I4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-4 top-2.5 w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-9 left-[262px] rounded-xl top-0 w-[46px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-xl" />
      <I4 />
    </div>
  );
}

function Div16() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-9 left-[21px] top-[189px] w-[308px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Div17() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[246px] left-5 rounded-2xl top-[125px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div12 />
      <Div15 />
      <Div16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-3 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_234)">
            <path
              d={svgPaths.p9ef4800}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_234">
            <path d="M0 0H10.5V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 p-0 top-[1.5px] w-[10.5px]"
      data-name="svg"
    >
      <Frame13 />
    </div>
  );
}

function I5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[6.75px] top-1 w-[10.5px]"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg5 />
    </div>
  );
}

function Div18() {
  return (
    <div
      className="absolute bg-green-500 left-0 rounded-[9999px] size-6 top-1"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I5 />
    </div>
  );
}

function Div19() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.24px] w-44">
        <p className="block leading-[24px]">Review current window displays</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[221.969px] not-italic text-[12px] text-green-400 text-left top-[-0.44px] w-[63px]">
        <p className="block leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_231)">
            <path
              d={svgPaths.p3573700}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_231">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[1.5px]"
      data-name="Frame"
    >
      <Frame14 />
    </div>
  );
}

function Div20() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[142.75px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame15 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-4 not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[136px]">
        <p className="block leading-[16px]">Completed 30 mins ago</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-3 relative shrink-0 w-[13.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_228)">
            <path
              d={svgPaths.pc680f00}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_228">
            <path d="M0 0H13.5V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 overflow-clip p-0 top-[1.5px] w-[13.5px]"
      data-name="Frame"
    >
      <Frame16 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[173.781px] top-0 w-[106.219px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-16 not-italic text-[#ff4500] text-[12px] text-center top-[0.28px] translate-x-[-50%] w-[93px]">
        <p className="block leading-[normal]">Show Reference</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-[108px] w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div20 />
      <Button5 />
    </div>
  );
}

function Div22() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[124px] left-9 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div19 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[57.6px] w-[290px]">
        <p className="block leading-[20px]">
          Document existing layout and identify areas for improvement
        </p>
      </div>
      <Div21 />
    </div>
  );
}

function Div23() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[124px] left-[17px] top-[17px] w-[316px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div18 />
      <Div22 />
    </div>
  );
}

function Div24() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[158px] left-0 rounded-2xl top-11 w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div23 />
    </div>
  );
}

function Div25() {
  return (
    <div
      className="absolute bg-[#ff4500] left-1.5 rounded-[9999px] size-2 top-1.5"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div26() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-[0.576914] rounded-[9999px] size-6 top-1"
      data-name="div"
    >
      <div className="absolute border-2 border-[#ff4500] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Div25 />
    </div>
  );
}

function Div27() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[1.24px] w-[191px]">
        <p className="block leading-[24px]">
          Update seasonal product placement
        </p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[0] left-[225.891px] not-italic text-[#ff4500] text-[12px] text-left top-[2.12px] w-[54px]">
        <p className="block leading-[16px]">In Progress</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-3 relative shrink-0 w-[10.5px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_234)">
            <path
              d={svgPaths.p9ef4800}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_234">
            <path d="M0 0H10.5V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 p-0 top-[1.5px] w-[10.5px]"
      data-name="svg"
    >
      <Frame18 />
    </div>
  );
}

function I6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[2.75px] top-0 w-[10.5px]"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg6 />
    </div>
  );
}

function Div28() {
  return (
    <div
      className="absolute bg-green-500 left-0 rounded-[9999px] size-4 top-0.5"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I6 />
    </div>
  );
}

function Div29() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[13px] top-0 w-[251px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div28 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-6 not-italic text-[14px] text-gray-400 text-left top-[-0.2px] w-[148px]">
        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
          Clear existing displays
        </p>
      </div>
    </div>
  );
}

function Div30() {
  return (
    <div
      className="absolute bg-[#ff4500] left-[5px] rounded-[9999px] size-1 top-[5px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div31() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-[0.791392] rounded-[9999px] size-4 top-0.5"
      data-name="div"
    >
      <div className="absolute border border-[#ff4500] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Div30 />
    </div>
  );
}

function Div32() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[13px] top-7 w-[251px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div31 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-6 not-italic text-[#ffffff] text-[14px] text-left top-[-0.2px] w-[170px]">
        <p className="block leading-[20px]">Arrange new spring items</p>
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 rounded-[9999px] size-4 top-0.5"
      data-name="div"
    >
      <div className="absolute border border-gray-500 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div34() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-5 left-[13px] top-14 w-[251px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div33 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-5 leading-[0] left-6 not-italic text-[14px] text-gray-400 text-left top-[-0.2px] w-[161px]">
        <p className="block leading-[20px]">Add pricing and signage</p>
      </div>
    </div>
  );
}

function Div35() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[76px] left-4 top-[108px] w-[264px]"
      data-name="div"
    >
      <div className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Div29 />
      <Div32 />
      <Div34 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[16.877px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_225)">
            <path
              d={svgPaths.p11438700}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_225">
            <path d="M0 0H16.8774V16.8774H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-[16.877px] items-center justify-center left-[-2.439px] overflow-clip p-0 top-[-0.939px] w-[16.878px]"
      data-name="Frame"
    >
      <Frame19 />
    </div>
  );
}

function Div36() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[123.406px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame20 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-4 not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[114px]">
        <p className="block leading-[16px]">Started 15 mins ago</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-3 relative shrink-0 w-[9px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_258)">
            <path
              d={svgPaths.p128d1900}
              fill="var(--fill-0, #FF4500)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_258">
            <path d="M0 0H9V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 overflow-clip p-0 top-[1.5px] w-[9px]"
      data-name="Frame"
    >
      <Frame21 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[194.297px] top-0 w-[85.703px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame22 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[51.5px] not-italic text-[#ff4500] text-[12px] text-center top-[0.28px] translate-x-[-50%] w-[77px]">
        <p className="block leading-[normal]">Show Tutorial</p>
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-[196px] w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div36 />
      <Button6 />
    </div>
  );
}

function Div38() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[212px] left-9 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div27 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[57.6px] w-[277px]">
        <p className="block leading-[20px]">
          Reorganize front displays with new spring collection items
        </p>
      </div>
      <Div35 />
      <Div37 />
    </div>
  );
}

function Div39() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[212px] left-[17px] top-[17px] w-[316px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div26 />
      <Div38 />
    </div>
  );
}

function Div40() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[246px] left-0 rounded-2xl top-[218px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,69,0,0.3)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_0px_20px_0px_rgba(255,69,0,0.3)]" />
      <Div39 />
    </div>
  );
}

function Div41() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 rounded-[9999px] size-6 top-1"
      data-name="div"
    >
      <div className="absolute border border-gray-500 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div42() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[0.12px] w-[221px]">
        <p className="block leading-[24px]">Photography for social media</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[235.953px] not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[47px]">
        <p className="block leading-[16px]">Pending</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_231)">
            <path
              d={svgPaths.p3573700}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_231">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[1.5px]"
      data-name="Frame"
    >
      <Frame23 />
    </div>
  );
}

function Div43() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[140.719px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame24 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-4 not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[136px]">
        <p className="block leading-[16px]">Starts after current task</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_222)">
            <path
              d={svgPaths.p26be3500}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_222">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[1.5px]"
      data-name="Frame"
    >
      <Frame25 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[172.594px] top-0 w-[107.406px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame26 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-16 not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-24">
        <p className="block leading-[normal]">Photo Guidelines</p>
      </div>
    </div>
  );
}

function Div44() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-[84px] w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div43 />
      <Button7 />
    </div>
  );
}

function Div45() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[100px] left-9 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div42 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[33.6px] w-[247px]">
        <p className="block leading-[20px]">{`Capture new display setup for store's Instagram account`}</p>
      </div>
      <Div44 />
    </div>
  );
}

function Div46() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[100px] left-[17px] top-[17px] w-[316px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div41 />
      <Div45 />
    </div>
  );
}

function Div47() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[134px] left-0 opacity-70 rounded-2xl top-[480px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div46 />
    </div>
  );
}

function Div48() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 rounded-[9999px] size-6 top-1"
      data-name="div"
    >
      <div className="absolute border border-gray-500 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div49() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 not-italic text-[#ffffff] text-[16px] text-left top-[0.12px] w-[141px]">
        <p className="block leading-[24px]">Final quality check</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[235.953px] not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[47px]">
        <p className="block leading-[16px]">Pending</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_231)">
            <path
              d={svgPaths.p3573700}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_231">
            <path d="M0 0H12V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 overflow-clip p-0 size-3 top-[1.5px]"
      data-name="Frame"
    >
      <Frame27 />
    </div>
  );
}

function Div50() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-0 w-[68.031px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame28 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-4 not-italic text-[12px] text-gray-400 text-left top-[-0.44px] w-[55px]">
        <p className="block leading-[16px]">Final step</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-3 relative shrink-0 w-[9px]" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 12"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_219)">
            <path
              d={svgPaths.p114da200}
              fill="var(--fill-0, #9CA3AF)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_219">
            <path d="M0 0H9V12H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-3 items-center justify-center left-0 overflow-clip p-0 top-[1.5px] w-[9px]"
      data-name="Frame"
    >
      <Frame29 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-[218.312px] top-0 w-[61.688px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-4 leading-[0] left-[39.5px] not-italic text-[12px] text-center text-gray-400 top-[0.28px] translate-x-[-50%] w-[53px]">
        <p className="block leading-[normal]">Checklist</p>
      </div>
    </div>
  );
}

function Div51() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-[84px] w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div50 />
      <Button8 />
    </div>
  );
}

function Div52() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[100px] left-9 top-0 w-[280px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div49 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-10 leading-[0] left-0 not-italic text-[14px] text-gray-400 text-left top-[33.6px] w-[283px]">
        <p className="block leading-[20px]">
          Review completed setup and ensure brand standards compliance
        </p>
      </div>
      <Div51 />
    </div>
  );
}

function Div53() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[100px] left-[17px] top-[17px] w-[316px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div48 />
      <Div52 />
    </div>
  );
}

function Div54() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.05)] h-[134px] left-0 opacity-70 rounded-2xl top-[630px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Div53 />
    </div>
  );
}

function Div55() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[764px] left-5 top-[391px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 not-italic text-[#ffffff] text-[18px] text-left top-[0.36px] w-[79px]">
        <p className="block leading-[28px]">Subtasks</p>
      </div>
      <Div24 />
      <Div40 />
      <Div47 />
      <Div54 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_27_213)">
            <path
              d={svgPaths.p921bd00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_27_213">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 p-0 top-0 w-3.5"
      data-name="svg"
    >
      <Frame31 />
    </div>
  );
}

function I7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-[19.641px] top-[19px] w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg7 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="absolute bg-[#ff4500] h-20 left-0 rounded-2xl top-0 w-[200px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-2xl" />
      <I7 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[111.141px] not-italic text-[#ffffff] text-[16px] text-center top-[17.56px] translate-x-[-50%] w-[139px]">
        <p className="block leading-[normal]">Mark Current Step</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[100.047px] not-italic text-[#ffffff] text-[16px] text-center top-[41.56px] translate-x-[-50%] w-[73px]">
        <p className="block leading-[normal]">Complete</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p12366cc0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-4 items-center justify-center left-0 p-0 top-0 w-3.5"
      data-name="svg"
    >
      <Frame32 />
    </div>
  );
}

function I8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-6 top-[31px] w-3.5"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg8 />
    </div>
  );
}

function Button10() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-20 left-[212px] rounded-2xl top-0 w-[62px]"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-2xl" />
      <I8 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path
            d={svgPaths.p3d134980}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 p-0 size-4 top-0"
      data-name="svg"
    >
      <Frame33 />
    </div>
  );
}

function I9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-6 top-[31px] w-4"
      data-name="i"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg9 />
    </div>
  );
}

function Button11() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-20 left-[286px] rounded-2xl top-0 w-16"
      data-name="button"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-2xl" />
      <I9 />
    </div>
  );
}

function Div56() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-20 left-5 top-[21px] w-[350px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Div57() {
  return (
    <div
      className="absolute bg-[rgba(10,10,11,0.9)] h-[121px] left-0 top-[1050px] w-[390px]"
      data-name="div"
    >
      <div className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Div56 />
    </div>
  );
}

function Div58() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] h-[1171px] left-0 top-0 w-[390px]"
      data-name="div"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
      <Header />
      <Div17 />
      <Div55 />
      <Div57 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#0a0a0b] h-[1171px] relative shrink-0 w-[390px]"
      data-name="body"
    >
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div58 />
    </div>
  );
}

export default function Frame34() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg size-full"
      data-name="Frame"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Body />
      </div>
      <div className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}
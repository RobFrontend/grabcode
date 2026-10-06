import { HiDevicePhoneMobile } from "react-icons/hi2";
import {
  IoColorPaletteOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

function TrustBar() {
  return (
    <div className="mt-20 px-8">
      <div className="container flex gap-8 justify-between max-lg:grid max-lg:grid-cols-2">
        <div className="flex gap-4 items-center">
          <IoColorPaletteOutline className="h-20 w-20 text-[var(--accent-color)]" />
          <div>
            <p className="hero-p-icon">
              Indywidualny <br></br>projekt
            </p>
            {/* <p>Dopasowany do Twojej marki i celów binzesowych.</p> */}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <HiDevicePhoneMobile className="h-20 w-20 text-[var(--accent-color)]" />
          <div>
            <p className="hero-p-icon">
              Strona gotowa <br></br>na mobile
            </p>
            {/* <p>Świetnie wygląda i działa na każdym urządzeniu.</p> */}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <TbTargetArrow className="h-20 w-20 text-[var(--accent-color)]" />
          <div>
            <p className="hero-p-icon">
              Przemyślana struktura <br></br>i CTA
            </p>
            {/* <p>Prowadzi użytkownika do działania.</p> */}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <IoSettingsOutline className="h-20 w-20 text-[var(--accent-color)]" />
          <div>
            <p className="hero-p-icon">
              Wdrożenie <br></br>i opieka techniczna
            </p>
            {/* <p>Nie zostawiam CIę po starcie. Zapewniam wsparcie.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBar;

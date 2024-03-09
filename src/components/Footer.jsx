// import { Warning2 } from "iconsax-react";

const Footer = () => {
  return (
    <div className="flex font-bold justify-between items-center p-3 text-sm text-md w-full border-t-gray-300 border text-gray-900 bg-gray-100 max-sm:text-[10px] max-sm:h-[150px] max-sm:flex-col max-sm:justify-evenly max-sm:items-start">
      <div className="flex gap-2">
        {/* <Warning2 /> */}
        <p>
          هرگونه کپی برداری از مطالب این سایت بدون ذکر نام و حذف لینک غیر قانونی
          است.
        </p>
      </div>
      <p className="max-sm:pb-9">ساخته شده توسط شرکت راهکار جامع اسپندار</p>
    </div>
  );
};

export default Footer;

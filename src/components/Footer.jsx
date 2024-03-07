import { Warning2 } from "iconsax-react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-5 text-md w-full h-[100px] bg-primary text-white flex-col max-sm:hidden">
      <div className="flex gap-2">
        <Warning2/>
        <p>
          هرگونه کپی برداری از مطالب این سایت بدون ذکر نام و حذف لینک غیر قانونی
          است.
        </p>
      </div>
      <p>ساخته شده توسط شرکت راهکار جامع اسپندار</p>
    </div>
  );
};

export default Footer;

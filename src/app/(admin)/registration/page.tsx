// import Registration from "@/ui/Registration";

import { loginLogo } from "@/images";
import Registration from "@/ui/Registration";
import "../../../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <Link href="/">
          <Image src={loginLogo} alt="logoDark" className="w-24 mt-5" />
        </Link>
        {/* <Registration /> */}
        <Registration />
      </div>
    </div>
  );
};

export default RegistrationPage;

import Link from "next/link";
import Image from "next/image";
import BackIcon from "../../public/back-button.png";

const BackButton = () => {
  return (
    <Link href={"/"} className="animate-pulse absolute top-5 left-5">
      <Image src={BackIcon} alt="Back Button" priority />
    </Link>
  );
};

export default BackButton;

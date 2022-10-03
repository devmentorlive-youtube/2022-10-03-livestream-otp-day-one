import { useState } from "react";
import Otp from "@/features/otp";

export default function Homepage() {
  const [data, setData] = useState({
    phone: "5628760090",
    code: "",
  });

  return (
    <div className="mt-16 container mx-auto">
      <Otp {...{ ...data, length: 6, onChange: setData }} />
    </div>
  );
}

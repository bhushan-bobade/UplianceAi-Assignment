import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const UserData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobilNo, setMobilNo] = useState("");
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [isModified, setIsModified] = useState(false);

  // Function to check if all fields are filled
  const areAllFieldsFilled = () => {
    return name.trim() && email.trim() && address.trim() && mobilNo.trim();
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);

    // Only set `isModified` to true if all fields are filled
    if (areAllFieldsFilled()) {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isModified) {
        e.returnValue = "You have unsaved changes, do you really want to leave?";
        return e.returnValue;
      }
    };

    if (isModified) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isModified]);

  const saveHandler = () => {
    if (areAllFieldsFilled()) {
      setData({
        name,
        email,
        address,
        mobilNo,
        id: nanoid(8),
      });

      toast.dismiss();
      toast.success("Details Saved Successfully", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setShow(true);
      setIsModified(false); // Reset modified state after saving
    } else {
      toast.dismiss();
      toast.error("All Fields are Required", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShow(false);
    }
  };

  return (
    <div className="relative max-w-screen-md mx-auto py-12 z-0 px-4">
      {show === false ? (
        <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input onChange={handleChange(setName)} size="lg" type="text" label="Name" placeholder="Enter your Name" />
          <Input onChange={handleChange(setAddress)} size="lg" type="text" label="Address" placeholder="Enter your Address" />
          <Input onChange={handleChange(setEmail)} required size="lg" type="email" label="Email" placeholder="Enter your email" />
          <Input onChange={handleChange(setMobilNo)} size="lg" type="number" label="Mobile No" placeholder="Enter your Mobile No." />
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="border w-1/3 font-bold text-xl text-center py-2">Name</td>
                  <td className="border w-2/3 font-semibold text-xl px-4">{data?.name}</td>
                </tr>
                <tr>
                  <td className="border w-1/3 font-bold text-xl text-center py-2">Address</td>
                  <td className="border w-2/3 font-semibold text-xl px-4">{data?.address}</td>
                </tr>
                <tr>
                  <td className="border w-1/3 font-bold text-xl text-center py-2">Email</td>
                  <td className="border w-2/3 font-semibold text-xl px-4">{data?.email}</td>
                </tr>
                <tr>
                  <td className="border w-1/3 font-bold text-xl text-center py-2">Mobile No.</td>
                  <td className="border w-2/3 font-semibold text-xl px-4">{data?.mobilNo}</td>
                </tr>
                <tr>
                  <td className="border w-1/3 font-bold text-xl text-center py-2">Unique ID</td>
                  <td className="border w-2/3 font-semibold text-xl px-4 text-blue-700">{data?.id}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="mt-4 text-center">
        {show === false ? (
          <Button onClick={saveHandler} radius="full" className="bg-gradient-to-tr from-red-700 to-orange-400 text-white shadow-lg">
            Save
          </Button>
        ) : (
          <Link to={"/"}>
            <Button radius="full" className="bg-gradient-to-tr from-red-800 to-orange-400 text-white shadow-lg">Home</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserData;

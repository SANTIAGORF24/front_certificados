import React, { useState, useEffect } from "react";
import { Input, CircularProgress, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { useRouter } from "next/navigation";

export function Itemslogin() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/iniciar_sesion/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        router.push("/admin_panel");
      } else {
        setIsInvalid(true);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setIsInvalid(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isInvalid) {
      timeoutId = setTimeout(() => {
        setIsInvalid(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [isInvalid]);
  return (
    <>
      <div className="flex justify-center items-center h-[85%]">
        <div className=" felx flex-colum w-full h-full justify-center items-center">
          <div className="pb-10">
            <h2 className="text-6xl text-[#4a53a0] font-bold flex justify-center">
              Iniciar sesión
            </h2>
            <p className="text-zinc-500 flex justify-center">
              {" "}
              Inicia sesión para gestionar con eficacia los recursos del
              Ministerio del Deporte
            </p>
          </div>
          <div className="flex flex-col justify-around items-center h-64">
            <div className="w-full flex justify-center">
              <Input
                value={email}
                type="text"
                label="Email"
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={
                  isInvalid &&
                  "Credenciales inválidas. Por favor, inténtalo de nuevo."
                }
                onValueChange={setEmail}
                className="max-w-sm text-black"
              />
            </div>

            <div className="w-full flex justify-center">
              <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                onValueChange={setPassword}
                className="max-w-sm text-black"
              />
            </div>
            <div className="flex itmes-center justify-center">
              <Button className="bg-[#4a53a0] text-white" onClick={handleLogin}>
                Iniciar sesión
              </Button>
              {isLoading && (
                <div className="ml-2">
                  <CircularProgress label="Loading..." />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

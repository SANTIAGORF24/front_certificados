"use client";
import React from "react";
import { Input, Image } from "@nextui-org/react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.js";

export function Search() {
  return (
    <div className="flex justify-center items-center w-full h-[85%]">
      <div className="flex h-full w-[85%] justify-center items-center">
        <div className="flex flex-col justify-center items-start w-2/3">
          <div className="py-10">
            <h1 className="text-6xl font-bold text-[#4a53a0]">
              CERTIFICADO DE EXISTENCIA{" "}
            </h1>
            <h1 className="text-6xl font-bold text-[#4a53a0]">
              Y REPRESENTACIÓN LEGAL{" "}
            </h1>
            <p className="text-zinc-500 w-4/5 pt-10">
              ¡Bienvenido a la plataforma oficial del Ministerio del Deporte!
              Aquí puedes descargar fácilmente tus certificados de existencia y
              presentación legal. Simplificamos el proceso para que accedas
              rápidamente a la documentación que necesitas. ¡Optimiza tu
              experiencia y potencia tu participación en el mundo del deporte
              con nosotros!
            </p>
          </div>
          <div className="w-4/5 h-auto rounded-2xl flex justify-start items-center ">
            <Input
              className="pr-2"
              label="Organismo"
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Buscar organismo por nombre o NIT"
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Button
              className="bg-[#4a53a0] text-[white] w-2/6 text-lg"
              endContent={<SearchIcon />}
            >
              Buscar
            </Button>
            <p className="text-[#4a53a0] px-3 text-4xl font-thin">|</p>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="bg-[white] text-[#4a53a0] w-2/5 text-lg border-2 border-[#4a53a0]  "
                >
                  ¿Dificultades?
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                className="text-[#4a53a0] font-bold"
              >
                <DropdownItem
                  key="new"
                  href="https://www.youtube.com/watch?v=dMYcqrfrbDM&feature=youtu.be"
                >
                  Tutorial
                </DropdownItem>
                <DropdownItem key="copy"> Busca en la Lista</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="w-1/3 h-[90%] flex">
          <Image
            src={"/assets/img/fondo.webp"}
            alt="fondo"
            width={500}
            height={500}
            className="w-full h-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}

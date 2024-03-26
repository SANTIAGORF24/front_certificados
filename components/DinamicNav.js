import React, { useMemo } from "react";
import { AcmeLogo } from "./AcmeLogo.js";
import { AcmeLogo2 } from "./AcmeLogo2.js";
import Link from "next/link";
import { usePathname } from "next/navigation.js";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.js";

export function DinamicNav() {
  const router = useRouter();

  const handleLogout = () => {
    // Elimina el token almacenado al cerrar sesión
    localStorage.removeItem("token");

    // Redirige al usuario a la página de inicio de sesión
    router.push("/login");
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const location = usePathname();
  const navigationComponent = useMemo(() => {
    if (location === "/login") {
      return (
        <>
          <div className="flex justify-center items-center h-[10%]">
            <div className="flex w-5/6 justify-center items-center ">
              <div className="w-full h-">
                <Link href="/">
                  <Button
                    className="text-[bg-white text-[#4a53a0] border-3 border-[#4a53a0]]"
                    variant="flat"
                  >
                    Regresar al inicio
                  </Button>
                </Link>
              </div>

              <div className="flex justify-between w-1/5">
                <div>
                  <AcmeLogo />
                </div>
                <div>
                  <AcmeLogo2 />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if ((location === "/admin_panel", "/plantilla")) {
      return (
        <>
          <Navbar onMenuOpenChange={setIsMenuOpen} className="text-[#4a53a0]">
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
              />
              <NavbarBrand>
                <AcmeLogo />
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent
              className="hidden sm:flex gap-4 text-[#4a53a0]"
              justify="center"
            >
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[#4a53a0]"
                      endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                      Organismos
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px] text-[#4a53a0]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  <DropdownItem
                    key="autoscaling"
                    description="Personaliza las plantillas de certificados para diferentes organismos según sus necesidades. Edita y adapta los documentos de manera eficiente."
                    startContent={icons.scale}
                  >
                    Organismos
                  </DropdownItem>
                  <DropdownItem
                    key="usage_metrics"
                    description="Gestiona las personas que forman parte de los órganos de administración. Modifica y actualiza la información de los miembros de la administración de manera sencilla y eficaz."
                    startContent={icons.activity}
                  >
                    Organo de administración
                  </DropdownItem>
                  <DropdownItem
                    key="production_ready"
                    description="Administra los integrantes de los órganos de control. Añade o modifica la información de las personas involucradas en el control organizacional, asegurando una gestión eficiente."
                    startContent={icons.flash}
                  >
                    Organo de control
                  </DropdownItem>
                  <DropdownItem
                    key="99_uptime"
                    description="Personaliza las plantillas de certificados para la comisión disciplinaria, gestionando la información de sus miembros. Agrega y modifica datos de manera rápida y precisa para mantener la integridad del proceso disciplinario."
                    startContent={icons.server}
                  >
                    Comisión disciplinaria
                  </DropdownItem>
                  <DropdownItem
                    key="supreme_support"
                    description="Facilita la creación de certificados para nuevos usuarios. Personaliza las plantillas para reflejar información relevante y proporcionar la mejor experiencia posible."
                    startContent={icons.user}
                  >
                    Nuevo usuario
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem>
                <Link href="#" aria-current="page">
                  Estadisticas
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Logs
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Link href="#" passHref>
                  <Button
                    color="primary"
                    variant="flat"
                    className="bg-[#4a53a0] text-white"
                    onClick={handleLogout}
                  >
                    Salir
                  </Button>
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                    }
                    className="w-full text-[#4a53a0]"
                    href="#"
                    size="lg"
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </>
      );
    }

    return (
      <div className="h-[10%] flex items-center justify-center ">
        <div className="w-5/6 py-5 flex items-center justify-between">
          <div className="flex items-center justify-between w-1/5">
            <div>
              <AcmeLogo />
            </div>
            <div>
              <AcmeLogo2 />
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="pr-5">
              <Button
                className="bg-white text-[#4a53a0] border-3 border-[#4a53a0]"
                variant="ghost"
              >
                Validar
              </Button>
            </div>
            <div>
              <Link href="/login">
                <Button className="bg-[#4a53a0] text-white">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }, [location]);

  return navigationComponent;
}

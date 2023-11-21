import { usePathname } from "next/navigation";

const useCurrentPath = (): string => {
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/|\/$/g, "");

  return currentPath;
};

export default useCurrentPath;
